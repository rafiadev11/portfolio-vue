<template>
  <section id="intro-wrapper">
    <div class="intro">
      <div class="container">
        <div class="intro-text">
          <div>
            <h2 class="title">Rachid Rafia</h2>
            <div class="subtitle">
              Full-Stack Developer
              <a href="https://www.bullard.com">@Bullard</a>
            </div>
          </div>
        </div>
      </div>
      <div class="overlay"></div>
    </div>
  </section>
</template>
<script>
export default {
  name: "hero"
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#intro-wrapper {
  min-height: 100vh;
}

#intro-wrapper .container {
  position: relative;
  height: 100%;
}

.intro {
  background: url("../../assets/images/intro.jpg") no-repeat left;
  background-size: cover;
  height: 100vh;
  color: white;
}

.intro-text {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  color: #eee;
  font-size: 1.3em;
  font-weight: 300;
  margin-left: auto;
}

.intro-text div {
  z-index: 1;
}

.intro-text .title {
  font-weight: bold;
  font-size: 4em;
  margin-bottom: 0;
}

.intro-text .subtitle {
  font-weight: 500;
  font-size: 1.5em;
}

.intro-text .subtitle a {
  color: inherit;
  text-decoration: none;
  font-style: italic;
}

@media (max-width: 576px) {
  .intro-text {
    font-size: 0.8em;
  }
}
</style>
