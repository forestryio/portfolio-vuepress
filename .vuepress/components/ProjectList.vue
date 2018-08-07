<template>
  <div class="project-list">
    <div v-for="post in posts">
        <router-link tag="h2" :to="post.path">{{ post.frontmatter.title }}</router-link>
        <p>{{ post.frontmatter.description }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      posts() {
        return this.$site.pages
          .filter(x => x.path.startsWith('/projects/') && !x.frontmatter.projects_index)
          .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date))
      }
    }
  }
</script>
