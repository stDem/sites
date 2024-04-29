<template>
      <div v-for="item in sliderText" :key="item.id">
    <h1>{{ item.title }}</h1>
    <p>{{ item.text }}</p>
    <swiper
    :style="{
      '--swiper-navigation-color': '#fff',
      '--swiper-pagination-color': '#fff',
    }"
    :zoom="true"
    :navigation="true"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide>
      <div class="swiper-zoom-container">
        <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
      </div> </swiper-slide
    ><swiper-slide>
      <div class="swiper-zoom-container">
        <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
      </div> </swiper-slide
    ><swiper-slide>
      <div class="swiper-zoom-container">
        <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
      </div> </swiper-slide
    ><swiper-slide>
      <div class="swiper-zoom-container">
        <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
      </div> </swiper-slide
    ><swiper-slide>
      <div class="swiper-zoom-container">
        <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
      </div> </swiper-slide
    ><swiper-slide>
      <div class="swiper-zoom-container">
        <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
      </div> </swiper-slide
    ><swiper-slide>
      <div class="swiper-zoom-container">
        <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
      </div> </swiper-slide
    ><swiper-slide>
      <div class="swiper-zoom-container">
        <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
      </div> </swiper-slide
    ><swiper-slide>
      <div class="swiper-zoom-container">
        <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
      </div>
    </swiper-slide>
  </swiper>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/zoom';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Zoom, Navigation, Pagination } from 'swiper/modules';
export default {
    components: {
      Swiper,
      SwiperSlide,
    },
  computed: {
    ...mapState(["sliderText"]),
  },
//   methods: {
//     ...mapActions(["getData"]),
//     },
    setup() {
      return {
        modules: [Zoom, Navigation, Pagination],
      };
    },
};
</script>

<style lang="scss" scoped></style>

