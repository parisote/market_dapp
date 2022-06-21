<template>
<div id="wrapper">
  <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a href="/"><img src="data:image/png;base64,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"/></a>
      <router-link class="navbar-item" to="/" >ReservApp</router-link>
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
        <a class="navbar-item" :href="about">About us</a>

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
          >Agregar Categoria
        </router-link>
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
          v-if="this.address !== ''">
          <div class="btn-group open" style="margin-right:5px">
            <a class="btn btn-success "><i class="fa fa-user fa-fw "></i> User</a>
            <a class="btn btn-success dropdown-toggle" data-toggle="dropdown">
              <span class="" title="Toggle dropdown menu"></span>
            </a>
            <ul class="navbar-dropdown">
              <li><router-link class="navbar-item" to="/MyRents">Mis reservas</router-link></li>
              <li><router-link class="navbar-item" to="/MyPlaces">Mis lugares</router-link></li>
              <li class="divider"></li>
              <li><router-link
                    v-if="this.person.first_name === ''"
                    class="navbar-item"
                    to="/Login">
                    Vincular usuario              
                  </router-link>
                  <router-link
                    v-if="this.person.first_name !== ''"
                    class="navbar-item"
                    to="/MyProfile">
                    Mi perfil              
                  </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <div class="section">
    <router-view></router-view>
  </div>
  <footer class="footer">
    <div class="content has-text-centered">
      <p>
        The source code is licensed
        <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
      </p>
    </div>
  </footer>
</div>
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
      initializePerson,
      connectWallet
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
      initializePerson,
      connectWallet
    };
  },
  data() {
    return {
      exists: false,
    };
  },
    computed: {
    about() {
      return "#/About/"
    }
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
      this.initializePerson();
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
#footer {
            position: fixed;
            padding: 10px 10px 0px 10px;
            bottom: 0;
            width: 100%;
            /* Height of the footer*/ 
            height: 40px;
            background: grey;
        }
</style>
