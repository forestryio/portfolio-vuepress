---
title: CMS and auto deployment for vuepress
date: 2018-08-09 19:49:28 +0200
excerpt: This works like expected, this text is only visible on the front page where
  all the journal posts are listed

---
# CMS and auto deployment for vuepress

Let's check out how we can automatically deploy our vuepress sites and manage the content from within Forestry.

### Preparing our vuepress site

We need to create a `package.json` file in the root of our project, this will include the build command and list vuepress as a dependency.

    {
      "name": "project-name",
      "scripts": {
        "site:build": "vuepress build"
      },
      "author": "Nichlas W. Andersen",
      "license": "MIT",
      "dependencies": {
        "vuepress": "^0.14.1"
      }
    }

Now, push it up to your remote git repository.

### Deploying with Netlify

1. Create a new site in Netlify and import your repository.
2. Set the build command to: `npm run site:build`
3. Set the publish directory to `.vuepress/dist`

That's it! your site is now deploying automatically!
