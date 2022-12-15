<template>
  <div class="container:none h-screen">
    <Header />
    <div class="bg-blue-200">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/header/auth.vue";
import Footer from "../components/footer/auth.vue";
export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss" scoped></style>
