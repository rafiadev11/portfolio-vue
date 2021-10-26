<template>
  <main id="content-wrapper">
    <div class="container">
      <div class="alert" v-for="(degree, index) in degrees" :key="index">
        <div>{{ degree.start_end_date }}</div>
        <h3>{{ degree.degree }}, {{ degree.field_of_study }}</h3>
        <small>{{ degree.school }}</small>
      </div>
    </div>
  </main>
</template>
<script>
import { ref } from "vue";
import EventService from "@/services/EventService";
export default {
  name: "mainContent",
  setup() {
    let degrees = ref();
    EventService.getDegrees()
      .then(response => {
        degrees.value = response.data;
      })
      .catch(error => {
        console.log(error);
      });

    return {
      degrees
    };
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.alert {
  background: #d3f8e6;
  padding: 20px;
  margin: 20px;
  border-radius: 10px;
}
.alert:hover {
  background: #42b983;
  color: white;
}
</style>
