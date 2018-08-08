<template>
  <div class="journal-list">
    <div v-for="post in journal">
        <router-link tag="h2" :to="post.path">{{ post.frontmatter.title }}</router-link>
        <p>{{ post.frontmatter.description }}</p>
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
</style>
