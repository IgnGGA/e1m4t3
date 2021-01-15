<template>
    <div class="message-body mt-3">
      <h4>Chat NYSL</h4>
      <h5>Welcome {{ name }}</h5>
      <div class="card">
        <div class="card-body">
          <div
            class="border pl-2 pt-1 ml-2 message-text mb-2"
            v-for="(message, index) in messages"
            :key="index" >
            
            <span class="mg-text" {{message.username}}></span>
            <span class="message" {{message.datetime}}></span>
            <p class="message pt-1" {{message.text}}></p>
          </div>
        </div>
      </div>
      <input v-model="showMessage" type="text" class="mt-3 mr-2 pl-2 pr-2" />
      <button class="btn btn-success" @click="sendMessage">Send</button>
    </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "Chat",
  data() {
    return {
      name: "",
      showMessage:"",
      message: [],
      datetime: null
    };
  },
  methods: {
    sendMessage() {
      this.name = firebase.auth().currentUser.email;

      const today = new Date();
      const date = today.getFullYear()+ '-' +(today.getMonth() + 1)+ '-' +today.getDate();
      const time = today.getHours()+ ':' +(today.getMinutes() + 1)+ ':' +today.getSeconds();
      const dateTime = date + '' + time
      
      this.dateTime = dateTime;

      const message = {
        text: this.showMessage,
        username: this.name,
        datetime: this.datetime
      };
      firebase.database().ref("messages").push(message);
      this.showMessage = "";
    }
  },
  mounted() {
    this.name = firebase.auth().currentUser.email;
    const query = firebase.database().ref("mensages");
      query.on("value", snapshot => {

        let data = snapshot.val();
        let messages = [];

        Object.keys(data).forEach(key => {
          messages.push({
            id: key,
            username: data[key].username,
            text: data[key].text,
            datetime: data[key].datetime
          })
        });
        this.messages = messages;
      });
  }
};
</script>
