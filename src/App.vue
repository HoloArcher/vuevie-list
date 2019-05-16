<template>
  <v-app v-bind:dark="store.state.dark" >
    <v-toolbar app z-index="999">
      <v-toolbar-title>
        <h1>
          <span class="accent--text text-thin">Vuevie</span>
          List
        </h1>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-text-field
        v-model="store.state.search"
        prepend-inner-icon="search"
        class="mx-3"
        solo-inverted
        placeholder="Search"
      ></v-text-field>
      <v-btn
      fab
      color="success"
      raised
      ripple
      @click="test()"
      >
      <v-icon>add</v-icon>
      </v-btn>

      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <Test/>
    </v-content>
  </v-app>
</template>

<script>

// import HelloWorld from './components/HelloWorld'
import Test from "./components/Test";
// import firebase from 'firebase'
import { store } from "./plugins/store.js";

export default {
  name: "App",
  components: {
    Test
  },
  data() {
    return { store: store, test: () =>{store.commit('addel')} };
  }
};

</script>
