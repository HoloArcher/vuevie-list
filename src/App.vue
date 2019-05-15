<template>
  <v-app v-bind:dark="store.state.dark">
    <v-toolbar app >
        
        <v-toolbar-title>
          <span class="accent--text text-thin">
            Vuevie
          </span>List
        </v-toolbar-title>

        <v-spacer></v-spacer>
        <v-text-field           v-model="store.state.search"
 prepend-inner-icon="search" class="mx-3" solo-inverted placeholder="Search"></v-text-field>

        
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
    return { store: store };
  }
};
</script>
