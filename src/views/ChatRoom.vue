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