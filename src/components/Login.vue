<template>
    <div class="LogIn">
        <form @submit.prevent="login">
            <label for="">
                <input type="text" v-model="user">
            </label>
            <label for="">
                <input type="password" v-model="pass">
            </label>
            <input type="submit" value="Login">
        </form>
    </div>
</template>

<script>
import firebase from 'firebase'

export default {
    name: 'Login',
    data(){
        return{
            user:'',
            pass:'',
        }
    },
    methods:{
        login(){
            firebase
            .auth()
            .signInWithEmailAndPassword(this.user, this.pass)
            .then(()=>{
                this.$router.replace('PageTestView')
            })
            .catch(function(error){
                console.log(error.message)
            });
        }
    }    
}
</script>