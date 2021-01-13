<template>
  <div class="LogOut">
    <button @click="logOut">LogOut</button>
  </div>
</template>

<script>
import firebase from "firebase/app";
import 'firebase/app';
import 'firebase/auth';
  export default {
    name: 'private',
    methods: {
      logOut() {
        firebase
          .auth()
          .signOut()
            .then( () => {
              this.$router.replace('/')
            })
      }
    }
  }
</script>