<template>
  <hero />
  <quote />
  <mainContent />
</template>
<script>
// @ is an alias to /src
import hero from "@/components/home/hero.vue";
import quote from "@/components/home/quote.vue";
import mainContent from "@/components/home/main.vue";

export default {
  name: "Home",
  components: {
    hero,
    quote,
    mainContent
  }
};
</script>
