<template>
  <header
    class="header"
    :style="sticky && {
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100%',
    }"
  >

    <nav v-if="navLinks" class="navigation left">
      <ul>
        <router-link
          v-for="nav in navLinks"
          v-if="nav.position === 'left'"
          tag="li"
          :to="nav.link"
          active-class="active"
          v-text="nav.text"
          exact
        />
      </ul>
    </nav>

    <div class="brand">
      <div
        v-if="logo"
        class="logo"
        :style="{ backgroundImage: `url(${logo})`}"
        :title="$site.title"
      />
      <span v-else>{{ $site.title }}</span>
    </div>

    <nav v-if="navLinks" class="navigation right">
      <ul>
        <router-link
          v-for="nav in navLinks"
          v-if="nav.position === 'right'"
          tag="li"
          :to="nav.link"
          active-class="active"
          v-text="nav.text"
          exact
        />
      </ul>
    </nav>

  </header>
</template>

<script>
  export default {
    props: {
      logo: {
        type: String,
        required: false,
      },
      sticky: {
        type: Boolean,
        required: false,
      }
    },
    computed: {
      navLinks() {
        return this.$site.themeConfig.nav
      }
    }
  }
</script>

<style scoped>

  .header {
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 5vw;
    font-size: 0.8rem;
    font-weight: 600;
    z-index: 10;
  }

  .logo {
    position: absolute;
    width: 3rem;
    height: 3rem;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }

  .navigation li {
    display: inline-block;
    list-style: none;
    margin-right: 1rem;
    user-select: none;
    cursor: pointer;
    border-bottom: 1px solid transparent;
  }

  .navigation li:last-of-type {
    margin: 0;
  }

  .navigation li:hover {
    border-bottom: 1px solid #000;
  }

  .active {
    border-bottom: 1px solid #000;
  }

</style>
