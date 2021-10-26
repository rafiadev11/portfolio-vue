<template>
  <main class="portfolio">
    <div class="container">
      <div class="text-center">
        <small class="desktop">
          <i>Note: Hover over each card to reveal more information.</i>
        </small>
        <small class="mobile">
          <i>Note: Click on each card to reveal more information.</i>
        </small>
      </div>
      <div class="cards">
        <div class="card">
          <div class="card-inner">
            <div class="card-front">
              <h3>Bullard</h3>
            </div>
            <div class="card-back">
              <p>
                Bullard's main website
              </p>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-inner">
            <div class="card-front">
              <h3>DistPortal</h3>
            </div>
            <div class="card-back">
              <p>
                Website dedicated to Bullard customers
              </p>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-inner">
            <div class="card-front">
              <h3>EDB</h3>
            </div>
            <div class="card-back">
              <p>
                Bullard's intranet website
              </p>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-inner">
            <div class="card-front">
              <h3>myBullard</h3>
            </div>
            <div class="card-back">
              <p>
                Thermal Imaging cameras software
              </p>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-inner">
            <div class="card-front">
              <h3>DailyNewsRead</h3>
            </div>
            <div class="card-back">
              <p>
                A personal website that fetches and displays the latest news
                stories
              </p>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-inner">
            <div class="card-front">
              <h3>EzSkillz</h3>
            </div>
            <div class="card-back">
              <p>
                A personal website for teaching programming (pending)
              </p>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-inner">
            <div class="card-front">
              <h3>Fitness App</h3>
            </div>
            <div class="card-back">
              <p>
                A personal project for fitness (pending)
              </p>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-inner">
            <div class="card-front">
              <h3>DbBackup</h3>
            </div>
            <div class="card-back">
              <p>
                A personal package for database backups
              </p>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-inner">
            <div class="card-front">
              <h3>GeoIP Location</h3>
            </div>
            <div class="card-back">
              <p>
                A personal package for geolocation
              </p>
            </div>
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
.portfolio .mobile {
  display: none;
}
.portfolio .cards {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
}

.portfolio .cards .card {
  margin: 20px;
  background-color: #42b983;
  padding: 10px;
  height: 300px;
  color: white;
  border-radius: 10px;
}

.portfolio .cards .card h3 {
  font-size: 30px;
}

.portfolio .cards .card p {
  color: white;
}

/*Flip card styles*/
.card-inner {
  position: relative;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  top: 40%;
}

.card:hover .card-inner {
  transform: rotateY(180deg);
}

.card-front,
.card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

.card-back {
  transform: rotateY(180deg);
}

.card-front {
  transform: rotateY(0deg);
}

@media (max-width: 576px) {
  .portfolio .cards {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 30px;
  }
  .portfolio .mobile {
    display: block;
  }
  .portfolio .desktop {
    display: none;
  }
}
</style>
