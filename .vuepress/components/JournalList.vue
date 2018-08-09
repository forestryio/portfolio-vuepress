<template>
  <div class="journal-list">
    <div v-for="post in journal" :key="post.title">
        <img v-if="post.frontmatter.thumbnail" :src="post.frontmatter.thumbnail" :alt="post.title" />
        <router-link tag="h2" :to="post.path" class="title">{{ post.frontmatter.title }}</router-link>
        <p>{{ post.frontmatter.excerpt }}</p>
        <hr>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      journal() {
        return this.$site.pages
          .filter(x => x.path.startsWith('/journal/') && !x.frontmatter.journal_index)
          .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date))
      }
    }
  }
</script>

<style scoped>
  .title {
    cursor: pointer;
  }
</style>
