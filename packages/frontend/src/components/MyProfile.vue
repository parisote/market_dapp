<template>
  <div class="container rounded bg-white mt-5 mb-5">
    <div class="row">
        <div class="col-md-3 border-right">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5">
                <img class="rounded-circle mt-3" :src="this.person.image">
            </div>
        </div>
        <div class="col-md-5 border-right">
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h4 class="text-right">Profile Settings</h4>
                </div>
                <div class="row mt-2">
                    <div class="col-md-6"><label class="labels">Name</label><input type="text" class="form-control" placeholder="first name" v-model="this.person.first_name" readonly></div>
                    <div class="col-md-6"><label class="labels">Surname</label><input type="text" class="form-control" placeholder="surname" v-model="this.person.last_name" readonly></div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-12"><label class="labels">Email</label><input type="text" class="form-control" placeholder="" v-model="this.person.email" readonly></div>
                    <div class="col-md-12"><label class="labels">Account Number</label><input type="text" class="form-control" placeholder="enter address line 1" v-model="this.address" readonly></div>

                    <div class="col-md-12"><label class="labels">Account Number</label><input type="text" class="form-control" placeholder="enter address line 1" v-model="this.balance" readonly></div>
                </div>
                <div class="mt-5 text-center">
                    <button class="btn btn-primary profile-button" type="button" @click="withdraw">Retirar dinero</button>
                </div>
            </div>
        </div>
        <div class="col-md-4">
        </div>
    </div>
</div>
</template>

<script>
import { useStore } from '../store/store.js';
import { storeToRefs } from 'pinia';
import { ethers } from "ethers";

export default {
  setup() {
    const store = useStore();
    const { address, person, contract, balance } = storeToRefs(store);
    const { initializeBalance } = store; 
    return {
      store,
      address,
      contract,
      person,
      balance,
      initializeBalance
    };
  },
  async created(){
        this.initializeBalance()
  },
  methods:{
    async withdraw(){
        await this.contract.withdraw();
    }
  }
}
</script>

<style>
.form-control:focus {
    box-shadow: none;
    border-color: #BA68C8
}

.profile-button {
    background: rgb(99, 39, 120);
    box-shadow: none;
    border: none
}

.profile-button:hover {
    background: #682773
}

.profile-button:focus {
    background: #682773;
    box-shadow: none
}

.profile-button:active {
    background: #682773;
    box-shadow: none
}

.back:hover {
    color: #682773;
    cursor: pointer
}

.labels {
    font-size: 11px
}

.add-experience:hover {
    background: #BA68C8;
    color: #fff;
    cursor: pointer;
    border: solid 1px #BA68C8
}
</style>