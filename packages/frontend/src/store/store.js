import { defineStore } from 'pinia'
import { isProxy, toRaw } from 'vue';

export const useStore = defineStore('main', {
    state: () => {
        return {
          address: "",
          contract: ""
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
            contract.on("NewPlaceEvent", (_id, index, size, price, category, title, description, image)=>{console.log("Se creo " + title)});
            this.contract = contract;
        }
    },
});