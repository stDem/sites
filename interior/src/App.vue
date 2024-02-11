<template>
  <Header></Header>
  <Main></Main>
  <Blog></Blog>
  <Footer></Footer>
</template>

<script>
import Blog from "./components/Blog.vue";
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";

export default {
  name: "App",
  components: {
    Header,
    Main,
    Blog,
    Footer
},
};
</script>

<style lang="scss"></style>
