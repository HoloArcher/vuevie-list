import Vue from 'vue'
import Vuex from 'vuex'
const axios = require('axios');
Vue.use(Vuex)


var firebase = require("firebase");

var config = {
    apiKey: "AIzaSyDnHUH6Ye4NP4eacQIJEz035GU2izj7Abk",
    authDomain: "filmlist-7f806.firebaseapp.com",
    databaseURL: "https://filmlist-7f806.firebaseio.com",
    projectId: "filmlist-7f806",
    storageBucket: "filmlist-7f806.appspot.com",
    messagingSenderId: "852162697399"
};
firebase.initializeApp(config);


const fire = firebase.database().ref().child('/')



fire.on('value', (snap) => {

    store.state.firedb = snap.val();
    store.commit('createLocalDB');
})


export const store = new Vuex.Store({
    state: {
        text: "this is text",
        request: '',
        localdb: [],
        firedb: [],
        show: false,
        dark: false,
        search: '',
        api_key: '2fb2a73cdabea954fa733209911eea69',

    },
    // getimdbObject (query, callback) {
    mutations: {
        createLocalDB(f) {  //takes an id and gets the movie of that id from imdb 
            store.state.localdb = [];
            
            var urlbody = 'https://api.themoviedb.org/3/movie/';

            async function geg(query) {
                var url = urlbody + query + '?api_key=' + store.state.api_key;

                var data = await axios.get(url);
                store.state.localdb.push(data.data)
            }

            for (f in store.state.firedb) {
                let kek = store.state.firedb[f].id
                geg(kek);
            }

        },


        PUSH_firedb: item => {
            store.state.firedb.push(item);
        },
        addel: async function () {
            // var id = store.commit('getimdbObject', store.state.search).results[0].id;
            // var id = await getimdbObject(store.state.search).data.results[0].id
            var whyarewestillhere = await getimdbObject(store.state.search)
 
            var id = whyarewestillhere.data.results[0].id
            
            var item = {
                id: id,
                object: 'filler',
                rating: 'filler'
            }
            
            store.state.firedb.push(item);

            await fire.set(store.getters.GET_firedb)


        },

    },
    actions: {

    },
    getters: {
        GET_firedb: () => {
            return store.state.firedb
        },

        filteredList: () => {

            // gives an object which includes the some part of the query in
            var query = store.state.search;
            // query = 'kek';
            var preobj = store.state.localdb;
            // return preobj
            return preobj.filter(item => item.title.toUpperCase().includes(query.toUpperCase()));
        },
    },
    computed: {

    },

})



async function getimdbObject(query) {
    //takes an id and gets the movie of that id from imdb 

    let api_key = store.state.api_key
    let urlbody = 'https://api.themoviedb.org/3/search/movie'
    var url = urlbody + '?api_key=' + api_key + '&language=en-US&query=' + query + '&page=1&include_adult=false'

    return await axios.get(url)
}