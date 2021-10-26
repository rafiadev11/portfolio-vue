<template>
  <section id="heading-wrapper" class="education-header">
    <h1>{{ title }}</h1>
  </section>
</template>
<script>
export default {
  name: "headerContent",
  props: {
    title: String
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.education-header {
  background: url("../../assets/images/education.jpg") no-repeat center;
  background-size: cover;
}
</style>
