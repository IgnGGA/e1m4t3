<template>
  <div id="Chat">
    <b-button v-b-toggle.sidebar-footer variant="success"><b-icon icon="chat-square-text" rotate="45"></b-icon> Chat</b-button>
    <b-sidebar id="sidebar-footer" aria-label="Sidebar with custom footer" no-header shadow>
      <template #footer="{ hide }">
       <div class="d-flex bg-success text-light align-items-center px-3 py-2">
        <strong class="mr-auto">NorthSide Youth Socer League</strong>
        <b-button size="sm" @click="hide"><b-icon icon="x-circle-fill"></b-icon> Close</b-button>
       </div>
      </template>
      <div class="px-3 py-2">
        <ChatRoom></ChatRoom>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
import ChatRoom from '../views/ChatRoom'

export default {
  name:'Chat',
  components:{
    ChatRoom,
  }
}
</script>