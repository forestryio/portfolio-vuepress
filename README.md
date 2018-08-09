<p align="center">
  <img src="https://vuepress-portfolio.netlify.com/upload/logo.svg" height="64">
  <h3 align="center">Vuepress Portfolio</h3>
  <p align="center">Vuepress site with portfolio and blogging pages<br>ready to deloy, and configured for Forestry (CMS)<p>
</p>

## Development

```bash
# install vuepress locally
npm i -g vuepress

# Start local dev server
vuepress dev
```

## Build

```bash
# Build static files to .vuepress/dist
vuepress build
```

## Deploy with Netlify

Import your site in Netlify

1. Create a new site in Netlify and import your repository.
2. Set the build command to: `npm run site:build`
3. Set the publish directory to `.vuepress/dist`

That's it, now your site gets deployed automatically on `git push`

## Forestry CMS

This project has been pre-configured to work with Forestry, just create an account and import your repository.

[Create Forestry account](https://forestry.io)
