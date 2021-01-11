<template>
  <div>
    <header>
      <Navbar></Navbar>
    </header>
    <div id="cuerpo">
      <Transicion></Transicion>
    </div>
    <footer>
      <PiePag></PiePag>
      <Footer></Footer>
    </footer>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import PiePag from "./components/PiePag.vue";
import Transicion from './components/Transicion.vue';
import Footer from './components/Footer.vue';


export default {
  name: "App",
  components: {
    Navbar,
    PiePag,
    Transicion,
    Footer,
   
  },
};
</script>

<style lang="css">
@import "../src/assets/css/main.css";
</style>