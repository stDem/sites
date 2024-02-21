<template>
    <div v-for="article in filteredArticle" :key="article.id">
      <h1>{{ article.title }}</h1>
      <img :src="article.img" :alt="article.tag" />
      <p>{{ article.text }}</p>
    </div>

</template>

<script>
export default {
  props: {
    filteredArticle: Object,
  },
  methods: {
    // sort(tag) {
    //   this.filteredArticles = this.article.filter((el) => el.tag === tag);
    // },
  },
};
</script>

<style lang="scss" scoped></style>
