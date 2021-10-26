<template>
  <main class="skills">
    <div>
      <div class="text-center skills-intro">
        I have been a programmer for over five years. During these years, I had
        the chance to work closely with developers and executives. It allowed me
        to gain skills both at the technology level as well as the business
        level.
      </div>
    </div>
    <div class="green-bg">
      <div class="container">
        <div>
          <h3>SOFT SKILLS</h3>
          <span>Leadership</span>
          <span>Teamwork</span>
          <br />
          <span>Quick Learner</span>
          <span>Self-Starter</span>
          <br />
          <span>Creative</span>
          <span>Passionate</span>
          <h3>LANGUAGES</h3>
          <ul>
            <li>English: Fluent</li>
            <li>Arabic: Fluent</li>
            <li>French: Intermediate</li>
          </ul>
        </div>
        <div>
          <h3>HARD SKILLS</h3>
          <div>
            <label>HTML5</label><br />
            <progress value="100" max="100"> 100% </progress>
          </div>
          <div>
            <label>CSS</label><br />
            <progress value="90" max="100"> 90% </progress>
          </div>
          <div>
            <label>JavaScript</label><br />
            <progress value="80" max="100"> 80% </progress>
          </div>
          <div>
            <label>jQuery</label><br />
            <progress value="80" max="100"> 80% </progress>
          </div>
          <div>
            <label>VueJS</label><br />
            <progress value="80" max="100"> 80% </progress>
          </div>
          <div>
            <label>PHP</label><br />
            <progress value="95" max="100"> 95% </progress>
          </div>
          <div>
            <label>Laravel</label><br />
            <progress value="95" max="100"> 95% </progress>
          </div>
          <div>
            <label>SQL</label><br />
            <progress value="95" max="100"> 95% </progress>
          </div>
          <div>
            <label>Python</label><br />
            <progress value="80" max="100"> 80% </progress>
          </div>
          <div>
            <label>Java</label><br />
            <progress value="70" max="100"> 70% </progress>
          </div>
          <div>
            <label>Flutter</label><br />
            <progress value="50" max="100"> 50% </progress>
          </div>
          <div>
            <label>Git</label><br />
            <progress value="100" max="100"> 100% </progress>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  name: "mainContent"
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.skills-intro {
  width: 56%;
  font-size: 1.4em !important;
  padding: 60px;
  margin: auto;
  font-weight: 300;
  color: #777;
}

.skills .green-bg .container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  grid-gap: 30px;
}

.skills .green-bg .container div {
  flex: 1 1 0;
}

.skills .green-bg .container div:last-child {
  flex-grow: 3;
}

.skills .green-bg .container div h3 {
  margin: 20px 0;
  text-decoration: underline;
  font-size: 1.2em;
}

.skills .green-bg progress {
  width: 80%;
}

.skills .green-bg span {
  padding: 10px;
  margin: 5px;
  background-color: #42b983;
  border-radius: 0.25em;
  text-align: center;
  font-size: 0.9em;
  display: inline-block;
}

.skills .green-bg ul {
  list-style: none;
}

@media (max-width: 576px) {
  .skills-intro {
    width: 80%;
    padding: 40px 0;
  }
}
</style>
