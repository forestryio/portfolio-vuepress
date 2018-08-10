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

    <nav v-if="navLinks" class="navigation left desktop-nav">
      <ul>
        <router-link
          v-for="nav in navLinks"
          :key="nav.text"
          v-if="nav.position === 'left' && !nav.external"
          tag="li"
          :to="nav.link"
          active-class="active"
          v-text="nav.text"
          exact
        />
        <li v-for="nav in navLinks" v-if="nav.position === 'left' && nav.external">
          <a :href="nav.link" target="_blank">{{ nav.text }}</a>
        </li>
      </ul>
    </nav>

    <div class="brand">
      <router-link to="/">
        <div
          v-if="logo"
          class="logo"
          :style="{ backgroundImage: `url(${logo})`}"
          :title="$site.title"
        />
        <span v-else>{{ $site.title }}</span>
      </router-link>
    </div>

    <nav v-if="navLinks" class="navigation right desktop-nav">
      <ul>
        <router-link
          v-for="nav in navLinks"
          :key="nav.text"
          v-if="nav.position === 'right' && !nav.external"
          tag="li"
          :to="nav.link"
          active-class="active"
          v-text="nav.text"
          exact
        />
        <li v-for="nav in navLinks" v-if="nav.position === 'right' && nav.external">
          <a :href="nav.link" target="_blank">{{ nav.text }}</a>
        </li>
      </ul>
    </nav>

    <div class="mobile-nav-toggle" @click="toggleMobileNav" />
    <div class="mobile-nav" :class="{'mobile-nav--active': mobileNavActive}">
      <nav>
        <ul @click="toggleMobileNav">
          <router-link
            v-for="nav in navLinks"
            :key="nav.text"
            v-if="!nav.external"
            tag="li"
            :to="nav.link"
            active-class="active"
            v-text="nav.text"
            exact
          />
          <li v-for="nav in navLinks" v-if="nav.external" @click="toggleMobileNav">
            <a :href="nav.link" target="_blank">{{ nav.text }}</a>
          </li>
        </ul>
        <div class="mobile-nav-close" @click="toggleMobileNav" />
      </nav>
    </div>

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
    data() {
      return {
        mobileNavActive: false
      }
    },
    computed: {
      navLinks() {
        return this.$site.themeConfig.nav
      },
    },
    methods: {
      toggleMobileNav() {
        this.mobileNavActive = !this.mobileNavActive
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
    height: 6rem;
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

  a {
    text-decoration: none;
    color: inherit;
  }

  a:active { color: inherit; }
  a:visited { color: inherit; }

  .desktop-nav {
    display: none;
  }

  .mobile-nav {
    display: block;
    position: absolute;
    background: #ffffff;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    padding: 2rem;
    transform: translateY(-100%);
    transition: transform 0.35s ease-in-out;
    text-align: center;
    font-size: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 2;
  }

  .mobile-nav li {
    list-style: none;
    cursor: pointer;
    transition: opacity 0.15s;
  }

  .mobile-nav li:hover {
    opacity: 0.6;
  }

  .mobile-nav--active {
    transform: translateY(0);
  }

  .mobile-nav-close {
    position: absolute;
    content: '';
    right: 0;
    top: 0;
    width: 3rem;
    height: 3rem;
    padding: 3rem;
    background-image: url('/close.svg');
    background-position: center;
    background-size: 1.5rem;
    background-repeat: no-repeat;
    transition: opacity 0.15s;
    cursor: pointer;
  }

  .mobile-nav-toggle {
    display: block;
    width: 3rem;
    height: 3rem;
    background-image: url('/burger.svg');
    background-position: center;
    background-size: 1.5rem;
    background-repeat: no-repeat;
    transition: opacity 0.15s;
    cursor: pointer;
  }

  .mobile-nav-toggle:hover,
  .mobile-nav-close:hover {
    opacity: 0.6;
  }

  @media screen and (min-width: 600px) {
    .desktop-nav {
      display: block;
    }
    .mobile-nav-toggle {
      display: none;
    }
    .mobile-nav {
      display: none;
    }
  }

</style>
