<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
<div class="container">
  <router-link class="navbar-brand" to="/">ReservApp</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" to="/">Inicio</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" to="/InSellProduct">Lugares</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" to="/MyProduct">Mis Reservas</router-link>
        </li>
      </ul>
      <ul class="nav navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link disabled">{{this.address}}</a>
        </li>
        <li>          
          <div class="btn-nav me-2" v-if="this.address == ''"><button type="button" class="btn btn-primary" @click="connectWallet">Conectar wallet</button></div>          
        </li>
      </ul>
    </div>
  </div>
</nav>
<router-view></router-view>
</template>

<script>
import { useStore } from './store/store.js';
import { storeToRefs } from 'pinia';

export default {
  setup() {
    const store = useStore();
    const { address } = storeToRefs(store);
    const { addAddress } = store;
    return {
      store,
      address,
      addAddress
    };
  },
  data(){
  },
  methods: {
    async connectWallet() {
      if (typeof window.ethereum !== 'undefined') {
        console.log('MetaMask is installed!');
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        const account = accounts[0];
        this.addAddress(account);
      } else {
        console.log("Install metamask")
      }
    }
  }
};
</script>

<style>
/*
@import './assets/base.css';

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }
}
*/
</style>
