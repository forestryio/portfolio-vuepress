module.exports = {
  title: "Acme",
  description: "creative agency",
  base: "/",
  themeConfig: {
    nav: [
      { text: "Works", link: "/", position: "left" },
      { text: "Instagram", link: "/instagram/", position: "left" },
      { text: "Say hi!", link: "/about/", position: "right" },
      { text: 'Journal', link: '/journal/', position: 'right' },
    ]
  },
  markdown: {
    anchor: {
      permalink: false
    }
  }
};
