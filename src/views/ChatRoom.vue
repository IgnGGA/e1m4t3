<template>
    <div>
        <h3>Chat Room</h3>
        <h5>Welcome {{name}}</h5>
        <div class=card>
            <div class=card-body>
                <div class='border pl-2 pt-1 ml-2 messahe-text mb-2' v-for='(message, index) in message' :key="index">
                    <span class='mg-text'>{{message.usermane}}</span>
                    <span class='mg-text'>{{message.datatime}}</span>
                    <span class='mg-text'>{{message.text}}</span>
                </div>
            </div>
        </div>
        <input type="text" class='mt3 mr.3 pl-2 pr-2' v-model="ShowMessage">
        <button class='btn btn-success' @click='sendMessage'>Send</button>
    </div>
</template>

<script>
import firebase from 'firebase';

export default {
    name:'Chat',
    data(){
        return{
            name:'',
            showMessage:'',
            messages:[],
            datatime:null
        };
    },
    methods:{
        sendMessage(){
            const today=new Date();
            const date=today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
            const time=today.getHours()+':'+today.getMinutes()+':'+today.getSeconds();
            const dataTime=date+' - '+time;
            this.datatime=dataTime;
            const message={
                text:this.showMessage,
                usermane:this.name,
                datatime:this.datatime,
            };
            firebase.database().ref('messages').push(message);
            this.showMessage='';
        }
    },
    mounted(){
        this.name=firebase.auth().currentUser.email;
        const query=firebase.database().ref('messages');
        query.on('value', snapshot=>{
            let data=snapshot.val();
            let messages=[];
            Object.keys(data).forEach(key=>{
                messages.push({
                    id:key,
                    username:data[key].username,
                    text:data[key].text,
                    datatime:data[key].datatime,
                });
            });
            this.messages=messages;
        });
    }
};
</script>