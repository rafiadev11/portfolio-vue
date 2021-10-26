<template>
  <div id="menu-trigger" @click="toggleMenu" :class="{ open: showNav }">
    <span></span>
    <span></span>
    <span></span>
  </div>
  <nav v-if="showNav" @click="toggleMenu">
    <div>
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
        <li>
          <router-link to="/education">Education</router-link>
        </li>
        <li>
          <router-link to="/skills">Skills</router-link>
        </li>
        <li>
          <router-link to="/projects">Projects</router-link>
        </li>
        <li>
          <router-link to="/contact">Contact</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
import { ref } from "vue";
export default {
  name: "sidebar",
  setup() {
    const showNav = ref(false);

    function toggleMenu() {
      showNav.value = !showNav.value;
    }
    return {
      showNav,
      toggleMenu
    };
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@1,700&display=swap");

nav {
  font-family: "Poppins", sans-serif;
  width: 100%;
  height: 100vh;
  background: rgba(94, 215, 159, 0.95);
  position: fixed;
  top: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  font-weight: bold;
}
nav ul {
  display: block;
  list-style: none;
}
nav ul li a {
  text-decoration: none;
  color: white;
}
nav ul li .router-link-exact-active {
  color: #0d7a48;
}

#menu-trigger {
  z-index: 3;
  width: 60px;
  height: 45px;
  position: fixed;
  margin: 40px;
  transform: rotate(0deg);
  transition: 0.5s ease-in-out;
  cursor: pointer;
}

#menu-trigger span {
  display: block;
  position: absolute;
  height: 9px;
  width: 100%;
  background: #42b983;
  border-radius: 9px;
  opacity: 1;
  left: 0;
  transform: rotate(0deg);
  transition: 0.25s ease-in-out;
}
#menu-trigger.open span {
  background: white;
}

#menu-trigger span:nth-child(1) {
  top: 0;
}

#menu-trigger span:nth-child(2) {
  top: 18px;
}

#menu-trigger span:nth-child(3) {
  top: 36px;
}

#menu-trigger.open span:nth-child(1) {
  top: 18px;
  transform: rotate(135deg);
}

#menu-trigger.open span:nth-child(2) {
  opacity: 0;
  left: -60px;
}

#menu-trigger.open span:nth-child(3) {
  top: 18px;
  transform: rotate(-135deg);
}
</style>
