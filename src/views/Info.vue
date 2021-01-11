<template>
<div>
<b-container>
  <b-row>
    <b-col class="ocultable">
      <div>
          <div id="porMes">
          <b-button @click="showS = !showS" class="mb-2" variant="success">September</b-button>
          <b-button @click="showO = !showO" class="mb-2" variant="info">October</b-button>
          </div>
         
          <div>
            <h3>Our teams</h3>
            <b-list-group>
              <b-list-group-item><img src="../assets/icon/G1.png" alt="icono" class="avat">The pelicans</b-list-group-item>
              <b-list-group-item><img src="../assets/icon/G2.png" alt="icono" class="avat">The rattlesnakes</b-list-group-item>
              <b-list-group-item><img src="../assets/icon/G3.png" alt="icono" class="avat">The squirreles</b-list-group-item>
              <b-list-group-item><img src="../assets/icon/G4.png" alt="icono" class="avat">The reindeer</b-list-group-item>
              <b-list-group-item><img src="../assets/icon/G5.png" alt="icono" class="avat">The dinos</b-list-group-item>
              <b-list-group-item><img src="../assets/icon/G6.png" alt="icono" class="avat">The unicorns</b-list-group-item>
            </b-list-group>
          </div>
      </div>

    </b-col>
    <b-col>
        <div id="infotable">

         <div v-if="showS">
            <TablaSep></TablaSep>
        </div>
        <div  v-if="showO">
            <TablaOct></TablaOct>
      </div>
    </div>

    </b-col>
  </b-row>
   <b-row>
          <b-col>
            <div id="bodycontent">
              <h2><em>Fall Schedule</em></h2>
              <p class="announcement">*All games take place on Saturday</p>

              <p><br /><strong>Facility Type:</strong> Outdoor</p>
              <p>
                <strong>Additional Information:</strong> If deemed necessary by
                NYSL, games may be shortened or cancelled due to extreme weather
                conditions.
              </p>
              <p>
                <strong>Please direct all questions to:</strong> Michael
                Randall, League Coordinator
              </p>
              <address>
                <p>
                  <span style="float: left"
                    ><strong>Phone:</strong> (630) 690-8132</span
                  >
                </p>
                <p style="text-align: right">
                  <strong>Email:</strong>
                  <a href="mailto:michael.randall@chisoccer.org"
                    >michael.randall@chisoccer.org</a
                  >
                </p>
              </address>
            </div>
          </b-col>
        </b-row>
</b-container>
</div>

</template>

<script>
import TablaSep from '../components/TablaSep.vue';
import TablaOct from '../components/TablaOct.vue';

export default {
  data () {
    return {
      showS: true,
      showO: true,
     
      isVisible: false
    }
  },
  methods: {
    handleVisibility (isVisible) {
      this.isVisible = isVisible
    }
  },
  name:'Info',
  components:{
    TablaSep,
    TablaOct,
  }
}
</script>


