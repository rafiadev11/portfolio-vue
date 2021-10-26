<template>
  <headerContent title="Contact Me" />
  <mainContent />
</template>
<script>
// @ is an alias to /src
import headerContent from "@/components/contact/header.vue";
import mainContent from "@/components/contact/main.vue";

export default {
  name: "Contact",
  components: {
    headerContent,
    mainContent
  }
};
</script>
