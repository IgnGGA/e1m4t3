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
      <Footer></Footer>
    </footer>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Moments from "./components/Moments.vue";
import Transicion from './components/Transicion.vue';
import Footer from './components/Footer.vue';


export default {
  name: "App",
  components: {
    Navbar,
    Moments,
    Transicion,
    Footer,
   
  },
};
</script>

<style lang="css">
@import "../src/assets/css/main.css";
</style>