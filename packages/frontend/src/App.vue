<template>
  <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link class="navbar-item" to="/">ReservApp</router-link>
      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item"> About </a>

        <router-link
          class="navbar-item"
          aria-current="page"
          to="/AddLocation"
          v-if="this.address !== ''"
          >Agregar Locación</router-link
        >

        <router-link
          class="navbar-item"
          aria-current="page"
          to="/AddCategory"
          v-if="this.address !== '' && this.isOwner"
          >Agregar Categoria</router-link
        >
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <a class="nav-link disabled">{{ this.address }}</a>
          <div class="buttons" v-if="this.address == '' && this.hasMeta">
            <button
              type="button"
              class="button is-primary"
              @click="connectWallet"
            >
              Conectar Wallet
            </button>
          </div>
        </div>

        <div class="navbar-item">
          <div class="buttons" v-if="!this.hasMeta">
            <button
              type="button"
              class="button is-primary"
              @click="installMeta"
            >
              Instalar Metamask
            </button>
          </div>
        </div>

        <div
          class="navbar-item has-dropdown is-hoverable"
          v-if="this.address !== ''"
        >
          <a class="navbar-link"> Usuarioooo </a>
          <div class="navbar-dropdown">
            <router-link class="navbar-item" to="/MyRents">
              Mis reservas
            </router-link>
            <router-link class="navbar-item" to="/MyPlaces">
              Mis lugares
            </router-link>
            <router-link
              v-if="this.person.first_name == ''"
              class="navbar-item"
              to="/Login"
            >
              Vincular usuario
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <router-view></router-view>
</template>

<script>
import { useStore } from "./store/store.js";
import { storeToRefs } from "pinia";
import abi from "../contract/abi.json";
import { ethers } from "ethers";
import { toast } from "bulma-toast";

const contractAddress = import.meta.env.VITE_API_CONTRACT;

export default {
  setup() {
    const store = useStore();
    const { hasMeta, address, contract, isOwner, person } = storeToRefs(store);
    const {
      addAddress,
      setContract,
      initializeOwner,
      setMeta,
      setPerson,
      setProvider,
    } = store;
    return {
      store,
      hasMeta,
      address,
      contract,
      isOwner,
      person,
      setMeta,
      addAddress,
      setContract,
      initializeOwner,
      setPerson,
      setProvider,
    };
  },
  data() {
    return {
      exists: false,
    };
  },
  methods: {
    async connectWallet() {
      if (typeof window.ethereum !== "undefined") {
        const accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });
        let account = "";
        if (accounts.length > 0) account = accounts[0];
        this.addAddress(account);
        this.initializeOwner();
      }
    },
    toLogin() {
      this.$router.push("/Login");
    },
    installMeta() {
      window.location.href = "https://metamask.io/";
    },
  },
  async mounted() {
    if (localStorage.getItem("address")) {
      await this.connectWallet();

      const Person = await this.contract.getPersonByAddress();
      if (
        Person.last_name !== "" &&
        Person.first_name !== "" &&
        Person.email !== ""
      ) {
        this.setPerson(Person);
      }

      this.initializeOwner();
    }
  },
  created() {
    const contractAbi = abi.abi;
    let provider = "";

    if (typeof window.ethereum !== "undefined") {
      this.setMeta(true);

      provider = new ethers.providers.Web3Provider(ethereum);
      this.setProvider(provider["provider"]);
      const signer = provider.getSigner();
      this.setContract(
        new ethers.Contract(contractAddress, contractAbi, signer)
      );
    } else {
      this.setMeta(false);
      toast({
        message: "Debe instalar metamask",
        type: "is-warning",
        dismissible: true,
        pauseOnHover: true,
        duration: 2000,
        position: "bottom-right",
      });
    }
  },
};
</script>

<style>
</style>
