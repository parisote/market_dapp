import { defineStore } from 'pinia'
import { isProxy, toRaw } from 'vue';
import { toast } from "bulma-toast"
import ApolloClient from 'apollo-boost'
import gql from 'graphql-tag'
import { ethers } from "ethers";

export const useStore = defineStore('main', {
    state: () => {
        return {
            hasMeta: false,
            address: "",
            contract: "",
            isOwner: "",
            categories: [],
            sizeRent: 0,
            person: {},
            provider: "",
            preImage: "",
            places: [],
            balance: 0
        }
    },
    actions: {
        addAddress(newAddress) {
            if(!localStorage.getItem('address')){
                localStorage.setItem('address',newAddress);
            }
            this.address = newAddress; 
        },
        setContract(contract) {
            contract.on("NewPlaceEvent", (_id, index, size, price, category, title, description, image)=>{ 
                this.messageSuccess("Se creo correctamente " + title);
                this.initializePlaces(category,index);
                this.setPreImage('');
            });
            contract.on("NewCategoryEvent", (index, name, description, image)=>{ 
                this.messageSuccess("Se creo correctamente " + name);
                this.intializeCategories();
                this.setPreImage('');
            });
            contract.on("NewRentEvent", (user, category, index, name, description)=>{
                this.messageSuccess("Se rento correctamente " + name)}
                );
            contract.on("NewPersonEvent", (direction,last_name,first_name,email,image)=>{
                this.messageSuccess("Se rento correctamente " + last_name);
                this.initializePerson();
                this.setPreImage('');
            });
            contract.on("NewWithdrawEvent", (from) => {
                this.messageSuccess("Se retiro correctamente el dinero");
                this.initializeBalance();
            });
            this.contract = contract;
        },
        async initializePerson(){
          try{
            let Person = await this.contract.getPersonByAddress();
            this.setPerson(Person);            
         } catch (error){
             console.log(error)
         } 
        },
        async initializeOwner(){
            try{
                let result = await this.contract.isOwner();
                this.isOwner = result;

                localStorage.setItem("isOwner", result);
             } catch (error){
                 console.log(error)
             }  
        },
        async intializeCategories(){
            try{
               //let result = await this.contract.getCategories();
               //this.categories = result;

            const apolloClient = new ApolloClient({
                uri: import.meta.env.VITE_API_SUBGRAPH
            })

            const q = gql`
                query {
                    newCategoryEvents(first: 3) {
                    id
                    index
                    name
                    description
                    image
                }
                }`;

            const l = await apolloClient.query({ query: q })
            this.categories = l.data.newCategoryEvents

            } catch (error){
                console.log(error)
            }            
        },
        async initializePlaces(categoryId){
            try{
             const apolloClient = new ApolloClient({
                 uri: import.meta.env.VITE_API_SUBGRAPH
             })
 
             const q = gql`
                 query {
                    newPlaceEvents(category: categoryId) {
                     id
                     index
                     size
                     price
                     category
                     title
                     description
                     image
                 }
                 }`;
 
             const l = await apolloClient.query({ query: q })
             this.places = []

             for(const item of l.data.newPlaceEvents){
                this.places.push({
                    id: item.id,
                    index: item.index,
                    category: item.category,
                    title: item.title,
                    price: ethers.utils.formatEther(item.price, "ethers"),
                    image: 'https://upcdn.io/' + item.image,
                    descripcion: item.description,
                    cantDisponible: item.size
                  });
             }
 
             } catch (error){
                 console.log(error)
             }  
        },
        setMeta(value){
            this.hasMeta = value;
        },
        setSizeRent(value){
            this.sizeRent = value
        },
        messageSuccess(msg){
            toast({
                message: msg,
                type: "is-success",
                dismissible: true,
                pauseOnHover: true,
                duration: 2000,
                position: "bottom-right"
              }) 
        },
        setPerson(value){
            this.person.first_name = value.first_name
            this.person.last_name = value.last_name
            this.person.email = value.email
            this.person.image = 'https://upcdn.io/' + value.image
        },
        setProvider(provider){
            this.provider = provider
        },
        async connectWallet() {
            if (typeof window.ethereum !== 'undefined') {
              const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
              let account = ""
              if(accounts.length > 0)
                 account = accounts[0];
              this.addAddress(account);
              this.initializeOwner();
            
            window.ethereum.on('accountsChanged', (accounts) => {
                this.addAddress(accounts[0])
                this.initializePerson()
                this.initializeOwner()
            })
        }
        },
        setPreImage(image){
            this.preImage = image
        },
        async initializeBalance(){
            const amount = await this.contract.getBalance();
            this.balance = ethers.utils.formatEther(amount);
        }
    },
});