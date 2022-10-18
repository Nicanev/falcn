<template>
  <div class="speedchart">
    <LineChart />
  </div>
</template>

<script lang="ts">
import LineChart from "./lineChart";
import axios from "axios";
export default {
  name: "line",
  components: {
    LineChart,
  },
  mounted() {
    // axios
    //   .get("http://127.0.0.1:5000/")
    //   .then((response) => console.log(response.data.python));
  },
};
</script>
