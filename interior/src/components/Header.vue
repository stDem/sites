<template>
  <div class="container">
    <header class="header">
      <div class="header__logo-left">
        <a class="interno-logo" href="#">
          <svg
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 34.0003H13.4588V24.499C13.4588 22.4853 15.0898 20.8543 17.1035 20.8543C19.1172 20.8543 20.7482 22.4853 20.7482 24.499V34.0003H33.9975V0C15.2211 0 0 15.2211 0 34.0003Z"
              fill="#CDA274"
            />
          </svg>
          <h1 class="header__logo-left__text">Interno</h1>
        </a>
      </div>
      <div class="header__logo-right">
        <!-- <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Project</a></li>
          <li><a href="#">Blog</a></li>
        </ul> -->
        <router-link v-for="link in links" :key="link.id" :to="link.url">{{
          link.title
        }}</router-link>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          id: 1,
          title: "Main",
          url: "/",
        },
        {
          id: 2,
          title: "Project",
          url: "/project",
        },
        {
          id: 3,
          title: "Blog",
          url: "/blog",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
$widthContainer: 1000px;
$mainTextColor: #292f36;
$colorTextGray: #4d5053;
@mixin font($font-size, $font-weight, $color) {
  font-family: "DM Serif Display";
  font-size: $font-size;
  font-style: normal;
  font-weight: $font-weight;
  line-height: normal;
  color: $color;
}
%flex-center {
  display: flex;
  align-items: center;
}
* {
  margin: 0;
  padding: 0;
}
.container {
  padding-left: calc(50% - $widthContainer/2);
  padding-right: calc(50% - $widthContainer/2);
}
.interno-logo {
  color: $mainTextColor;
  display: flex;
  align-items: center;
  gap: 10px;
  h1 {
    color: $mainTextColor;
    font-family: "DM Serif Display";
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
  }
}
.header {
  display: flex;
  justify-content: space-between;
  &__logo-left {
    a {
      display: flex;
      align-items: center;
      gap: 10px;
      text-decoration: none;
      color: $mainTextColor;
    }
  }
  &__logo-right {
    display: flex;
    align-items: center;
    ul {
      @extend %flex-center;
      gap: 20%;
      li {
        list-style-type: none;
        a {
          text-decoration: none;
          color: $mainTextColor;
        }
      }
    }
  }
}
</style>
