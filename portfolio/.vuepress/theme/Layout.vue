<template>
  <div class="wrapper">

    <Navbar logo="/upload/logo.svg" :sticky="$route.path === '/'" />

    <div class="container">

      <!-- Single project view -->
      <div v-if="isSingleProject">
        <SingleProjectHeader
          :title="$page.frontmatter.title"
          :year="$page.frontmatter.year.toString()"
          :categories="$page.frontmatter.categories"
        />
        <img :src="$page.frontmatter.thumbnail" :alt="$page.frontmatter.title">
        <Content/>
      </div>

      <!-- Main -->
      <div
        v-else
        :style="$route.path === '/' && {
          marginTop: '14vw'
        }"
      >
        <Content/>
      </div>

    </div>

  </div>
</template>

<script>
  export default {
    computed: {
      isSingleProject() {
        const worksRoute = '/works/'
        const path = this.$route.path
        if (path.includes('works') && path.length >= (worksRoute.length + 1)) {
          console.log(`Current route is ${path}, and is indeed a single project.`)
          return true
        }
      },
    },
    mounted() {
      console.log(this.$site)
    }
  }
</script>

<style>

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  *::-moz-selection {
    background: var(--color-highlight);
    color: #2b2b2b;
  }

  *::-webkit-selection {
    background: var(--color-highlight);
    color: #2b2b2b;
  }

  *::selection {
    background: var(--color-highlight);
    color: #2b2b2b;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Noto Sans", "Ubuntu", "Droid Sans", "Helvetica Neue", sans-serif;
    font-size: 16px;
    background: #fff;
    color: #000;
  }

  img {
    max-width: 100%;
  }

  .container {
    padding: 0 5vw;
  }

  h1 {
    margin-bottom: 2rem;
    line-height: 1.15;
  }

  p {
    margin: 1.5rem 0;
    line-height: 1.5;
  }

</style>
