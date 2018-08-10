module.exports = {
  title: "Acme",
  description: "creative agency",
  base: "/",
  themeConfig: {
    logo: "/upload/logo.svg",
    footer: "Ⓒ Acme",
    nav: [
      { text: "Works", link: "/", position: "left", external: false },
      { text: "Instagram", link: "https://www.instagram.com/its.nwa/", position: "left", external: true },
      { text: "Say hi!", link: "mailto:sayhi@mydomain.com", position: "right", external: true },
      { text: 'Journal', link: '/journal/', position: 'right', external: false },
    ]
  },
  markdown: {
    anchor: {
      permalink: false
    }
  }
};
