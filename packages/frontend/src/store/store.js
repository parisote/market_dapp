import { defineStore } from 'pinia'

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
            this.contract = contract;
        }
    },
});