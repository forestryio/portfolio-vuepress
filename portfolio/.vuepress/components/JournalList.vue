<template>
  <div class="journal-list">
    <div v-for="post in journal" :key="post.title" class="post">
      <router-link tag="h2" :to="post.path" class="title">{{ post.frontmatter.title }}</router-link>
      <p>{{ post.frontmatter.excerpt }}</p>
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
  .post {
    padding: 2rem 0;
    border-bottom: 1px solid #eee;
  }
  .post:last-of-type {
    border: 0;
  }
  .post h2 {
    margin: 0 0 1rem 0;
  }
  .post h2:hover {
    opacity: 0.6;
  }
  .post p {
    margin: 0;
    color: #333;
  }
</style>
