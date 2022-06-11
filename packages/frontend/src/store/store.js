import { defineStore } from 'pinia'
import { isProxy, toRaw } from 'vue';
import { toast } from "bulma-toast"

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
            provider: ""
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
            contract.on("NewPlaceEvent", (_id, index, size, price, category, title, description, image)=>{this.messageSuccess("Se creo correctamente " + title)});
            contract.on("NewCategoryEvent", (index, name, description, image)=>{this.messageSuccess("Se rento correctamente " + name); this.intializeCategories()});
            contract.on("NewRentEvent", (user, category, index, name, description)=>{this.messageSuccess("Se rento correctamente " + name)});
            this.contract = contract;
        },
        async initializeOwner(){
            try{
                let result = await this.contract.isOwner();
                this.isOwner = result;
             } catch (error){
                 console.log(error)
             }  
        },
        async intializeCategories(){
            try{
               let result = await this.contract.getCategories();
               this.categories = result;
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
            this.person = value
        },
        setProvider(provider){
            console.log(provider.on('accountsChanged', () => {this.connectWallet()}))
            //console.log(provider.on('disconnect', () => {console.log("ASD")}))
            //console.log(provider.on('accountsChanged', () => {console.log("CAMBIO BRO")}))
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
            }
          }
    },
});