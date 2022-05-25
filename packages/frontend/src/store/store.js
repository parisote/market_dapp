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
            console.log(newAddress);
            this.address = newAddress;
        },
        setContract(contract) {
            console.log("CONTRATO", contract);
            this.contract = contract;
        }
    },
});