<template>
  <navbar />
  <header class="transparent"></header>
  <router-view />
  <footer>
    <div class="container">
      Follow me on Social Media:
      <a href="https://www.facebook.com/dailyNewsRead" target="_blank">
        Facebook
      </a>
      |
      <a href="https://twitter.com/MyDailyNewsRead" target="_blank">
        Twitter
      </a>
    </div>
  </footer>
</template>
<script>
import navbar from "@/components/navs/navbar";
export default {
  setup() {
    return {
      navbar
    };
  }
};
</script>
<style>
@import "assets/css/main.css";
@import "assets/css/footer.css";
@import "assets/css/helpers.css";
</style>
