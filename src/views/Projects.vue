<template>
  <headerContent title="Portfolio" />
  <mainContent />
</template>
<script>
// @ is an alias to /src
import headerContent from "@/components/projects/header.vue";
import mainContent from "@/components/projects/main.vue";

export default {
  name: "Projects",
  components: {
    headerContent,
    mainContent
  }
};
</script>
