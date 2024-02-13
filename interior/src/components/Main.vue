<template>
  <section class="banner">
    <div class="banner__project">
      <h1>Our Project</h1>
      <p>Home / Project</p>
    </div>
  </section>
  <section class="tags">
    
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
*{
  margin: 0;
  padding: 0;
}
.banner {
  background: url("/src/assets/img/banner_project.png"),
    lightgray 50% / cover no-repeat;
  width: 100%;
  height: 30vh;
  background-size: cover;
  position: relative;
}
  .banner__project {
    position: absolute;
    bottom: 0;
    right: 50%;
    width: 100px;
    height: 17px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 41px 125px 41px 125px;
    border-radius: 37px 37px 0px 0px;
    background: rgb(255, 255, 255);
  }

</style>
