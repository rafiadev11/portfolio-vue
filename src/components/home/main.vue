<template>
  <main id="content-wrapper" class="container">
    <div>
      <h2>About Me</h2>
      <p>
        Since I was a young child, I knew I wanted to pursue a career in
        computer programming. It all began when I started watching videos of
        developers taking ideas and turning them into computer programs. These
        videos inspired me and fostered my passion for computer programming.
        Since then, I began a journey full of research and independent study
        that led me to my current programming field.
      </p>
      <router-link class="button" to="/about">Learn More </router-link>
    </div>
    <div>
      <figure>
        <img
          src="../../assets/images/profile_picture.jpg"
          class="img-rounded"
          alt="Business Trip to Quito, Ecuador"
        />
        <figcaption>Business Trip to Quito, Ecuador</figcaption>
      </figure>
    </div>
  </main>
</template>
<script>
export default {
  name: "mainContent"
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
