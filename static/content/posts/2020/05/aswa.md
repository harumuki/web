---
date: 2020-05-23T17:10:00.0+02:00
title: Azure Static Web Apps
---

I've done a test deployment of this site to the newly released [Azure Static Web Apps](https://docs.microsoft.com/en-us/azure/static-web-apps/?WT.mc_id=personal-blog-duncand) and everything so far looks pretty good. I did need to [activate Git-LFS support in the GitHub action](https://github.com/duncan/web/blob/5571ca35fc3328eaa497cad85b0932b53493e753/.github/workflows/azure-static-web-apps-white-ground-0d8a0cc03.yml#L20) that builds the site, but that was the only hurdle. Other than that, the build and deploy process _just works_. 

Root domains aren't yet supported by Azure Static Web Apps while the feature is in preview, so I haven't moved the site over yet. But. I shall soon. In the meantime, you can see the deployed site at [white-ground-0d8a0cc03.azurestaticapps.net](https://white-ground-0d8a0cc03.azurestaticapps.net).