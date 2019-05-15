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



fire.once('value', (snap) => {

	// store.state.firedb = snap.val();
	store.commit('createLocalDB');
})


export const store = new Vuex.Store({
    state: {
        text: "this is text",
        request: '',
		localdb: [],
		firedb: [{id: 123}],
        show: false,
        dark: true,

        search: 'earl',
    },
    // getimdbObject (query, callback) {
        mutations: {
		// 	//takes an id and gets the movie of that id from imdb 

		// 	// let api_key = '2fb2a73cdabea954fa733209911eea69'
		// 	// let urlbody = 'https://api.themoviedb.org/3/search/movie'
		// 	// var url = urlbody + '?api_key=' + api_key + '&language=en-US&query=' + query + '&page=1&include_adult=false'


		// 	//let url = urlbody + '/search/movie?api_key=' + api_key + '&language=en-US&query=' + query + '&page=1&include_adult=false'

		// 	// $.get(url, function (data, error) {
		// 	// 	//let temp = sdata.results[0];
		// 	// 	//app.$set(app.obj, n , temp)

		// 	// }).done(function (data) {
		// 	// 	callback(data);

		// 	// })
        // },
        createLocalDB (f) {
            var api_key = '2fb2a73cdabea954fa733209911eea69';
            var urlbody = 'https://api.themoviedb.org/3/movie/';

			async function geg(query) {
				//takes an id and gets the movie of that id from imdb 
                var url = urlbody + query + '?api_key=' + api_key;
                
                var data = await axios.get(url);
                store.state.localdb.push(data)
            }
            
			for (f in store.state.firedb) {
				let kek = store.state.firedb[ f ].id

				geg(kek);
            }
            // console.log(store.state.localdb);
            
        }
        
    }, 

   
    getters: {
        filteredList ()  {

            // gives an object which includes the some part of the query in
            var query = store.state.search;
            query = 'earl';
            var preobj = store.state.localdb;
            return preobj
            // return preobj.filter(item => item.data.title.toUpperCase().includes(query.toUpperCase() ));
        },

        GET_text (f) {return f;}
    },
})

