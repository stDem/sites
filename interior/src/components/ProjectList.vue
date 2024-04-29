<template>
  <div>
    <button class="project-btn" @click="sort('Kitchen')">Kitchen</button>
    <button class="project-btn" @click="sort('Bedroom')">Bedroom</button>
    <button class="project-btn" @click="sort('Building')">Building</button>
    <button class="project-btn" @click="sort('Architecture')">Architecture</button>
    <button class="project-btn" @click="sort('Kitchen-planning')">
      Kitchen planning
    </button>
    <button class="project-btn" @click="sort('Bathroom')">Bathroom</button>
</div>
  <!-- <div v-if="filteredArticles=[]">
    <div v-for="article in articles" :key="article.id">
    <h1>{{ article.title }}</h1>
    <img :src="article.img" :alt="article.tag" />
    <p>{{ article.text }}</p>
  </div>
  </div>
  <div v-else> -->
    <Project v-for="filteredArticle in filteredArticles" :key="filteredArticle.id" :filteredArticle="filteredArticle" />
  <!-- </div> -->
  

 
</template>

<script>
import Project from './Project.vue';
    export default {
data() {
    return {
        articles: [
        {
          id: 1,
          tag: "Kitchen",
          title:
            "CUTTING-EDGE COUNTERTOP IDEAS FOR YOUR MODERN AMERICAN KITCHEN",
          img: "/src/assets/img/blog-kitchen1.png",
          text: "A quintessential modern kitchen may be sleek, sophisticated and simple, but if you look closely, you’ll realize that it takes a lot of work to turn simplicity into brilliance.The modern American kitchen is the result of innovation and creativity—a product of meticulous craftsmanship that defines function and style. Thanks to an array of modern materials, we now have the power to make big changes with small accessories, focusing on more than just aesthetic beauty.",
          date: "26 December,2022 ",
        },
        {
          id: 2,
          tag: "Kitchen",
          title: "YOUR QUICK GUIDE TO MODERN CABINETRY",
          img: "/src/assets/img/blog-kitchen2.png",
          text: "It’s amazing what small tweaks in interior design can do to your kitchen. From high-end finishes to wood textures, there’s a world of options just waiting to be discovered!         In recent years, we’ve seen modern kitchen styles dominating American homes, and prompting homeowners to invest in innovative ideas.   Choosing the right cabinetry forms the crux of kitchen innovation as it adds a strikingly unique touch that punctuates your kitchen, while giving you an opportunity to be creative!",
          date: "01 May,2023",
        },
        {
          id: 3,
          tag: "Bedroom",
          title: "Bedroom Lighting Tips to Make Your Bedroom Feel Extra Cosy",
          img: "/src/assets/img/blog-bedroom1.jpg",
          text: "The perfect lighting for the bedroom is essential to ensure warmth and comfort in the room. In addition, different light sources can enhance the decor and bring much more practicality to everyday life. There is a wide variety of lighting options; that can help you create the perfect ambience in your room. There are countless ways to use light to your advantage and brighten up your room smartly and stylishly—whether direct lighting through ceiling light fixtures, indirect lighting, or lampshades on top of the nightstand or bedside wall lights.",
          date: "20 July,2023",
        },
        {
          id: 4,
          tag: "Bedroom",
          title: "Essential bedroom lighting tips",
          img: "/src/assets/img/blog-bathroom2.jpg",
          text: "Articulated wall light: This type of sconce is ideal, if you desire a focus on books or even turn to the ceiling and create an indirect lighting point.Deflector Lamps: For bedside pendants, deflector lamps are an excellent option because they have a mirrored layer on the underside that avoids disturbing the eyes when lying down.  Tube light bulb: For curtain or ceiling mouldings lighting, tubular bulbs are recommended instead of LED strips, as they cast light almost all around them, making the lighting softer and producing fewer shadows. ",
          date: "12 January,2023",
        },
        {
          id: 5,
          tag: "Bathroom",
          title: "Modern Bathroom Vanity Ideas",
          img: "/src/assets/img/blog-bathroom1.jpg",
          text: "The bathroom vanity is one of the first places most people head to before beginning the day—so, it's a good idea to give some serious thought to how you want it to look and feel.",
          date: "18 March,2023",
        },
        {
          id: 6,
          tag: "Bathroom",
          title: "Modern Bathroom Ideas That Go Off the Beaten Path",
          img: "/src/assets/img/blog-bathroom2.jpg",
          text: "If your bathroom design is feeling lackluster, look no further for innovative design inspiration. From a converted enclosed deck to a shower that's steps away from a private garden, these unique spaces are sure to ignite your creativity",
          date: "09 April,2023",
        },
      ],
      filteredArticles:[],
    }
},
  components: { Project },
  methods: {
    sort(tag) {
      this.filteredArticles = this.articles.filter((el) => el.tag === tag);
    },
}
    
}
</script>

<style lang="scss" scoped>

</style>