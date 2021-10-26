<template>
  <section id="heading-wrapper" class="skills-header">
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
.skills-header {
  background: url("../../assets/images/skills.jpg") no-repeat bottom;
  background-size: cover;
}
</style>
