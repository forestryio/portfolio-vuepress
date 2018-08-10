<template>
  <div class="wrapper">

    <Navbar :logo="$site.themeConfig.logo" :sticky="$route.path === '/'" />

    <div class="container">

      <!-- Single project view -->
      <div v-if="isSingleProject">
        <SingleProjectHeader
          :title="$page.frontmatter.title"
          :year="$page.frontmatter.year.toString()"
          :categories="$page.frontmatter.categories"
        />
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

    <Footer />

  </div>
</template>

<script>
  export default {
    computed: {
      isSingleProject() {
        const worksRoute = '/works/'
        const path = this.$route.path
        if (path.includes('works') && path.length >= (worksRoute.length + 1)) {
          return true
        }
      },
    },
    created() {
      // unwrap all images from paragraph tags so we can have
      // different widths inside the content.
      document.querySelectorAll('img').forEach(image => {
        var parent = image.parentNode
        while (image.firstChild) parent.insertBefore(image.firstChild, image)
        parent.removeChild(image)
      })

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
    line-height: 0;
  }

  .container {
    padding: 0 5vw;
  }

  h1 {
    font-size: 3rem;
    line-height: 1.15;
    font-weight: 300;
    margin: 0 0 2rem 0;
  }

  h2 {
    font-size: 2rem;
    font-weight: 300;
    margin: 1rem 0 2rem 0;
  }

  h3 {
    font-size: 1rem;
    font-weight: 700;
    margin: 1rem 0 1rem 0;
  }

  p {
    font-size: 1rem;
    line-height: 1.5;
    margin: 1rem 0 2rem 0;
  }

</style>
