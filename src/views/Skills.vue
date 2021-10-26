<template>
  <headerContent title="Skills" />
  <mainContent />
</template>
<script>
// @ is an alias to /src
import headerContent from "@/components/skills/header.vue";
import mainContent from "@/components/skills/main.vue";

export default {
  name: "Skills",
  components: {
    headerContent,
    mainContent
  }
};
</script>
