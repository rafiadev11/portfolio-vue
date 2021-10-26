<template>
  <headerContent title="Education" />
  <mainContent />
</template>
<script>
// @ is an alias to /src
import headerContent from "@/components/education/header.vue";
import mainContent from "@/components/education/main.vue";

export default {
  name: "Education",
  components: {
    headerContent,
    mainContent
  }
};
</script>
