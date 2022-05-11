import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
    state: () => {
        return {
          address: ""
        }
    },
    actions: {
        addAddress(newAddress) {
            console.log(newAddress);
            this.address = newAddress
        }
    },
});