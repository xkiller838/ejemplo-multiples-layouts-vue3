<template>
  <div class="container:none h-screen">
    <Header />
    <div class="bg-red-200">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/header/welcome.vue";
import Footer from "../components/footer/welcome.vue";
export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss" scoped></style>
