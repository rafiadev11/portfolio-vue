<template>
  <headerContent title="About Me" />
  <mainContent />
</template>
<script>
// @ is an alias to /src
import headerContent from "@/components/about/header.vue";
import mainContent from "@/components/about/main.vue";

export default {
  name: "About",
  components: {
    headerContent,
    mainContent
  }
};
</script>
