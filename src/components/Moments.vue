<template>
  <div id="Moments">
    <b-button v-b-toggle.sidebar-footer variant="success"><b-icon icon="camera" rotate="45"></b-icon> Momentos</b-button>
    <b-sidebar id="sidebar-footer" aria-label="Sidebar with custom footer" no-header shadow>
      <template #footer="{ hide }">
       <div class="d-flex bg-success text-light align-items-center px-3 py-2">
        <strong class="mr-auto">NorthSide Youth Socer League</strong>
        <b-button size="sm" @click="hide"><b-icon icon="x-circle-fill"></b-icon> Close</b-button>
       </div>
      </template>
      <div class="px-3 py-2">
        <p>
        The Northside Youth Soccer League was established in 1996 to provide
          athletes residing in Chicago's northside neighborhoods an environment
          in which to learn and play soccer. To be a member of NYSL, you must be
          between the ages of 4 - 12 and reside in a Chicago northside
          neighborhood. NYSL is run by a small full-time staff, and relies on
          the generous volunteer time of parents and previous league members.
        </p>
        <Carrusel></Carrusel>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
import Carrusel from './Carrusel.vue'

export default {
  name:'Moments',
  components:{
    Carrusel,
  }
}
</script>