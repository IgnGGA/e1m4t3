<template >
  <div>
    <b-col>
      <div id="porMes">
        <b-button @click="showS = !showS" class="mb-2" variant="success"
          >September</b-button>&nbsp;
        <b-button @click="showO = !showO" class="mb-2" variant="info"
          >October</b-button>
      </div>
    </b-col>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showS: true,
      showO: true,
      isVisible: false,
    };
  },
  methods: {
    handleVisibility(isVisible) {
      this.isVisible = isVisible;
    },
  },
};
</script>
