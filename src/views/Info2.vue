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
            <table class="table table-bordered">
                    <tr>
                      <th colspan="4" id="sept">SEPTEMBER</th>
                    <tr>
                    <th>Date</th>
                    <th>Teams</th>
                    <th>Location</th>
                    <th>Times</th>
                    </tr>
                    <tr>
                      <td rowspan="2">9/01</td>
                      <td v-if="u1 && u4"> <img src="../assets/icon/G1.png" alt="icono" class="icono">U1 and U4<img src="../assets/icon/G4.png" alt="icono" class="icono"></td>
                      <td v-if="u1 && u4">AJ Katzenmaier</td>
                      <td v-if="u1 && u4">9:30 a.m.</td>
                    </tr>
                    <tr>
                    <td><img src="../assets/icon/G3.png" alt="icono" class="icono">U3 and U2<img src="../assets/icon/G2.png" alt="icono" class="icono"></td>
                    <td>Greenbay</td>
                    <td>1:00 p.m.</td>
                    </tr>
                    <tr>
                    <td rowspan="2">9/08</td>
                    <td><img src="../assets/icon/G5.png" alt="icono" class="icono">U5 and U6<img src="../assets/icon/G6.png" alt="icono" class="icono"></td>
                    <td>Howard A Yeager</td>
                    <td>9:30 a.m.</td>
                    </tr>
                    <tr>
                    <td><img src="../assets/icon/G6.png" alt="icono" class="icono">U6 and U1<img src="../assets/icon/G1.png" alt="icono" class="icono"></td>
                    <td>Marjorie P Hart</td>
                    <td>1:00 p.m.</td>
                    <tr>
                    <td rowspan="2">9/15</td>
                    <td><img src="../assets/icon/G2.png" alt="icono" class="icono">U2 and U4<img src="../assets/icon/G4.png" alt="icono" class="icono"></td>
                    <td>North</td>
                    <td>9:30 a.m.</td>
                    </tr>
                    <tr>
                    <td><img src="../assets/icon/G3.png" alt="icono" class="icono">U3 and U5<img src="../assets/icon/G5.png" alt="icono" class="icono"></td>
                    <td>AJ Katzenmaier</td>
                    <td>1:00 p.m.</td>
                    <tr>
                    <td rowspan="2">9/22</td>
                    <td><img src="../assets/icon/G1.png" alt="icono" class="icono">U1 and U3<img src="../assets/icon/G3.png" alt="icono" class="icono"></td>
                    <td>South</td>
                    <td>9:30 a.m.</td>
                    </tr>
                    <tr>
                    <td><img src="../assets/icon/G2.png" alt="icono" class="icono">U2 and U6<img src="../assets/icon/G6.png" alt="icono" class="icono"></td>
                    <td>Howard A Yeager</td>
                    <td>1:00 p.m.</td>
                    <tr>
                    <td>9/29</td>
                    <td><img src="../assets/icon/G4.png" alt="icono" class="icono">U4 and U5<img src="../assets/icon/G5.png" alt="icono" class="icono"></td>
                    <td>Greenbay</td>
                    <td>9:30 a.m.</td>
                    </tr>
              </table>
        </div>
        <div  v-if="showO">
            <table class="table table-bordered">
              <tr>
                  <th colspan="4" id="oct">OCTOBER</th>
              <tr>
            <tr>
              <th>Date</th>
              <th>Teams</th>
              <th>Location</th>
              <th>Times</th>
            </tr>
            <tr>
              <td rowspan="2">10/06</td>
              <td><img src="../assets/icon/G2.png" alt="icono" class="icono">U2 and U5<img src="../assets/icon/G5.png" alt="icono" class="icono"></td>
              <td>Marjorie P Hart</td>
              <td>9:30 a.m.</td>
            </tr>
            <tr>
              <td><img src="../assets/icon/G1.png" alt="icono" class="icono">U1 and U6<img src="../assets/icon/G6.png" alt="icono" class="icono"></td>
              <td>South</td>
              <td>1:00 p.m.</td>
            </tr>
            <tr>
              <td rowspan="2">10/08</td>
              <td><img src="../assets/icon/G3.png" alt="icono" class="icono">U3 and U4<img src="../assets/icon/G4.png" alt="icono" class="icono"></td>
              <td>Howard A Yeager</td>
              <td>9:30 a.m.</td>
            </tr>
            <tr>
              <td><img src="../assets/icon/G5.png" alt="icono" class="icono">U5 and U1<img src="../assets/icon/G1.png" alt="icono" class="icono"></td>
              <td>Greenbay</td>
              <td>1:00 p.m.</td>
          <tr>
              <td rowspan="2">10/20</td>
              <td><img src="../assets/icon/G6.png" alt="icono" class="icono">U6 and U3<img src="../assets/icon/G3.png" alt="icono" class="icono"></td>
              <td>North</td>
              <td>9:30 a.m.</td>
            </tr>
            <tr>
              <td><img src="../assets/icon/G2.png" alt="icono" class="icono">U2 and U4<img src="../assets/icon/G4.png" alt="icono" class="icono"></td>
              <td>Marjorie P Hart</td>
              <td>1:00 p.m.</td>
            <tr>
              <td rowspan="2">10/27</td>
              <td><img src="../assets/icon/G3.png" alt="icono" class="icono">U3 and U1<img src="../assets/icon/G1.png" alt="icono" class="icono"></td>
              <td>AJ Katzenmaier</td>
              <td>9:30 a.m.</td>
            </tr>
            <tr>
              <td><img src="../assets/icon/G5.png" alt="icono" class="icono">U5 and U6<img src="../assets/icon/G6.png" alt="icono" class="icono"></td>
              <td>Howard A Yeager</td>
              <td>1:00 p.m.</td>
            </tr>
          </table>
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
  }

}
</script>


