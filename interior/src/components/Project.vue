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

       <div v-if="filteredArticles=''">
        <h1> {{ article.title }} </h1>
        <img :src="article.img" :alt="article.tag" />
        <p>{{ article.text }}</p>
      </div>
      <div v-else>
        <h1> {{ filteredArticles.title }} </h1>
        <img :src="filteredArticles.img" :alt="filteredArticles.tag" />
        <p>{{ filteredArticles.text }}</p>
      </div>
</template>

<script>
export default {

    props: {
        article: Object,
        filteredArticles: [],
    },
    methods: {
    sort(tag) {
      this.filteredArticles = this.articles.filter((el) => el.tag === tag);
    },
  },
};
</script>

<style lang="scss" scoped></style>
