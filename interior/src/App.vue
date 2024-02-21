<template>
  <Header></Header>
  <Main></Main>
  <ProjectList></ProjectList>
  <!-- <Blog></Blog> -->
  <!-- <Slider></Slider> -->
  <Footer></Footer>
</template>

<script>
// import Blog from "./components/Blog.vuxe";

import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
// import ProjectList from "./components/ProjectList.vue";
import Main from "./components/Main.vue";
import ProjectList from "./components/ProjectList.vue";

// import Slider from "./components/Slider.vue";
export default {
  name: "App",

  components: {
    Header,
    Main,
    // Blog,
    // Slider,
    Footer,
    ProjectList
},
};
</script>

<style lang="scss"></style>
