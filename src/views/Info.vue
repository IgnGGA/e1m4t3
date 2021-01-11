<template>
  <div id="info">
    <b-container>
      <b-row>
        <b-col>
          <div id="pageheader">
            <h1>NYSL Game Information</h1>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col
          ><div class="ocultable"><Busqueda></Busqueda><Teams></Teams></div
        ></b-col>
        <b-col>
          <div v-show="!showS">
            <TableSep></TableSep>
          </div>
          <div v-show="!showO">
            <TableOct></TableOct>
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
              <strong>Please direct all questions to:</strong> Michael Randall,
              League Coordinator
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
import TableSep from "../components/TablaSep.vue";
import TableOct from "../components/TablaOct.vue";
import Busqueda from "../components/Busqueda.vue";
import Teams from "../components/Teams.vue";

export default {
  name: "Info",
  components: {
    TableSep,
    TableOct,
    Busqueda,
    Teams,
  },
};
</script>     