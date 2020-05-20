import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase";
require("firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyCt9BMPWtwp-3rgxl7JDjCehnoMUTGdAu4",
  authDomain: "smartchat-43ea8.firebaseapp.com",
  databaseURL: "https://smartchat-43ea8.firebaseio.com",
  projectId: "smartchat-43ea8",
  storageBucket: "smartchat-43ea8.appspot.com",
  messagingSenderId: "1013303700532",
  appId: "1:1013303700532:web:0684ab179b2b6badcdae61",
  measurementId: "G-C8R8ZW7RSH"
};
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

window.db = db;

// db.settings({
//   timestampsInSnapshots:true
// })

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
