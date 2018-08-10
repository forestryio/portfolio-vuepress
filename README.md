<p align="center">
  <img src="portfolio/.vuepress/public/upload/logo.svg" height="64">
  <h3 align="center">Vuepress Portfolio</h3>
  <p align="center">Vuepress site with portfolio and blogging pages<br>ready to deloy, and configured for Forestry (Content Management)<p>
</p>

## Todo

- [x] Add favicon
- [x] Add Hero section to Forestry config
- [x] Mobile navigation
- [x] Unwrap images from p tag
- [x] Style typography
- [x] Style code blocks
- [x] Style layout for journal list
- [x] Remove thumbnail from Journal
- [x] Remove tags/categories from Journal

## Development

```bash
# install vuepress locally
npm i -g vuepress

# cd into the vuepress directory
cd portfolio

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
3. Set the publish directory to `portfolio/.vuepress/dist`

That's it, now your site gets deployed automatically on `git push`

## Forestry (Content Management)

This project has been pre-configured to work with Forestry, just import your repository ✨  
Any changes you make will be commited back to the repo, and deployed if you're using Netlify.

[Create Forestry account](https://forestry.io)
