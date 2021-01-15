<template>
  <div>
    <header>
      <Navbar></Navbar>
    </header>
    <div id="cuerpo">
      <Transicion></Transicion>
    </div>
    <footer>
      <Moments></Moments>
      <Chat></Chat>
      <Footer></Footer>
    </footer>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Moments from "./components/Moments.vue";
import Transicion from './components/Transicion.vue';
import Footer from './components/Footer.vue';
import Chat from './components/Chat';


export default {
  name: "App",
  components: {
    Navbar,
    Moments,
    Transicion,
    Footer,
   Chat

  },
};
</script>

<style lang="css">
@import "../src/assets/css/main.css";
</style>