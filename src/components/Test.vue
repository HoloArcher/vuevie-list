<template>
  <v-container grid-list-lg fluid >
    <v-layout 
      row
      reverse
      justify-center
      wrap
      fill-height
    >
      <v-flex
        v-for="(d, i) in store.state.localdb" 
        :key="i" 
        max-width= "50vw"
        style="flex-basis: 350px; "
        
       >
        <v-card 
        raised
        tile

        >
            <v-card-title>
              <h2>{{ store.state.localdb[ i ].data.title  }}</h2>
            </v-card-title>
          <v-img
          max-height="100%"
          min-width="100%"
          class="white--text"
          v-bind:src='"https://image.tmdb.org/t/p/original/" + store.state.localdb[i].data.poster_path'
            
            
          >
          </v-img>
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
