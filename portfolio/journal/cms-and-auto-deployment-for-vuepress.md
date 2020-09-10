---
title: Content management and auto deployment for VuePress
date: 2018-08-09 17:49:28 +0000
excerpt: This works like expected, this text is only visible on the front page where all the journal posts are listed

---
# Content management and auto deployment for VuePress

Let's check out how we can manage the content from within Forestry and automatically deploy our VuePress site.

## Manage your content with Forestry

This theme is pre-configured and works out of the box with Forestry. Create an account at [Forestry](https://forestry.io "Forestry") and import your repository. You can now edit, manage and preview your content.

That's it, that's all. Enjoy your new site!

## Deployment

1. Create a new site in [Vercel](https://vercel.com) or [Netlify](https://netlify.com) and import your repository.
2. Set the build command to: `npm run build`
3. Set the publish directory to `portfolio/.vuepress/dist`
