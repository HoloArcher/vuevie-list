<template>
  <v-container grid-list-lg  >
    <v-layout 
      row
      reverse
      justify-center
      fill-height
      style="flex-wrap: wrap-reverse;"
    >
      <v-flex
        v-for="(d, i) in store.getters.filteredList" 
        :key="i" 
        style="flex-basis: 350px; "
        shrink
       >
       
        <v-card 
        raised
        tile
        

        >
        
     
            <v-card-title><h2>{{ store.getters.filteredList[ i ].title  }} </h2></v-card-title>

          <v-img
          max-height="100%"
          min-width="100%"
          class="white--text"
          v-bind:src='"https://image.tmdb.org/t/p/original/" + store.getters.filteredList[i].poster_path'
            
          >

          </v-img>
          
          <!-- <v-card-text><p>{{ store.getters.filteredList[i].overview }}</p></v-card-text> -->
          <!-- <v-card-text>
            {{ store.state.localdb[ i ].data.overview }}
          </v-card-text> -->

        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

import {store} from "../plugins/store.js"

// console.log(store.state.text)

export default {
  data() {
    return {store: store}
  }
};

</script>
