---
title: Content management and auto deployment for VuePress
date: 2018-08-09 17:49:28 +0000
excerpt: This works like expected, this text is only visible on the front page where all the journal posts are listed

---
# Content management and auto deployment for VuePress

Let's check out how we can automatically deploy our VuePress sites and manage the content from within Forestry.

### Preparing our VuePress site

We need to create a `package.json` file in the root of our project, this will include the `build` and `dev` command and list VuePress as a dependency.

    {
      "name": "portfolio-vuepress",
      "scripts": {
        "site:build": "vuepress build portfolio",
        "site:develop": "vuepress dev portfolio"
      },
      "author": "Nichlas W. Andersen",
      "license": "MIT",
      "dependencies": {
        "vuepress": "^1.2.0"
      }
    }

Now, push it up to your remote git repository.

### Deploying with Netlify

1. Create a new site in Netlify and import your repository.
2. Set the build command to: `npm run site:build`
3. Set the publish directory to `portfolio/.vuepress/dist`

### Manage your content with Forestry

Well, not much to do here really, this theme is pre-configured and works out of the box with Forestry. Create an account at [Forestry](https://forestry.io "Forestry") and import your repository.

That's it, that's all. Enjoy your new site!
