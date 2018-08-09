<template>
  <div class="project-list">

    <router-link
      :to="post.path"
      tag="div"
      v-for="post in posts"
      :key="post.title"
      class="post"
      :style="{ backgroundImage: `url(${post.frontmatter.thumbnail})` }"
    >

      <div class="info">
        <h2>{{ post.frontmatter.title }}</h2>
        <p>{{ post.frontmatter.description }}</p>
      </div>

    </router-link>

  </div>
</template>

<script>
  export default {
    computed: {
      posts() {
        return this.$site.pages
          .filter(x => x.path.startsWith('/works/') && !x.frontmatter.works_index)
          .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date))
      }
    }
  }
</script>

<style scoped>

  .post {
    position: relative;
    width: 100%;
    height: 70vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    margin-bottom: 5vw;
  }

  .info {
    position: absolute;
    left: 0;
    top: 2rem;
    padding: 0.5rem 1rem;
    background: rgba(255,255,255, 1);
    max-width: 400px;
  }

  .info h2 {
    display: inline-block;
    font-size: 0.8rem;
    font-weight: 700;
    margin: 0;
  }

  .info p {
    display: inline-block;
    margin: 0;
    font-size: 0.8rem;
  }

</style>
