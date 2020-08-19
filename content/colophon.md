---
title: Colophon
layout: main
---

# Colophon

## Infrastructure

This site is statically hosted by and accelerated worldwide with [Azure CDN][1]. The content delivery network uses an origin hosted by [Azure Static Web Apps][2], currently in preview (hence, using Azure CDN in front of it).  

It’s built using [Eleventy][3] for HTML, [PostCSS][4] for CSS, [Gulp Responsive][5] and [Sharp][6] for image processing, and a few scripts to coordinate everything. The current public version of this site is generated from the `main` branch of [github.com/duncan/web][7] and he process of taking all the bits, statically compiling them, and shipping them off to Azure is handled by [GitHub Actions][8]. 

The domains for this website are registered at [Hover][9] and zones are hosted by [Azure DNS][10]. Nifty Lettuce’s [Forward Email][11] handles my domain’s email forwarding.

## Images

The image of Duncan with camera which appears on this site as well as being used as my social media avatar is [©2013 David Hobby (aka Strobist)][12] and is used with permission. 

All other photographs are either credited where they appear or are copyright ©James Duncan Davidson.

## Fonts and icons

[Open Sans][13] by Steve Matteson at Monotype is used as the main font for this site. [Cascadia Code][14] by Aaron Bell at Microsoft is used as the monospace and code font. [Variable font files][15] are used for both fonts, and the files are segmented by character language and type (Latin, Greek, etc) using [fontTools][16] for smoother loading.

Icons used throughout are a subset from the [Font Awesome][17] collection.

All fonts are used under the terms of the [SIL Open Font License 1.1][18]. 

[1]:	https://docs.microsoft.com/en-us/azure/cdn/?WT.mc_id=personal-blog-duncand
[2]:	https://docs.microsoft.com/en-us/azure/static-web-apps/overview?WT.mc_id=personal-blog-duncand
[3]:	https://www.11ty.dev/
[4]:	https://postcss.org/
[5]:	https://www.npmjs.com/package/gulp-responsive
[6]:	https://github.com/lovell/sharp
[7]:	https://github.com/duncan/web
[8]:	https://docs.microsoft.com/en-us/azure/developer/github/github-actions?WT.mc_id=personal-blog-duncand
[9]:	https://www.hover.com/
[10]:	https://docs.microsoft.com/en-us/azure/dns/?WT.mc_id=personal-blog-duncand
[11]:	https://forwardemail.net/en
[12]:	http://strobist.blogspot.com/
[13]:	https://fonts.google.com/specimen/Open+Sans
[14]:	https://github.com/microsoft/cascadia-code
[15]:	https://v-fonts.com/
[16]:	https://fonttools.readthedocs.io/en/latest/
[17]:	https://fontawesome.com/
[18]:	https://fontawesome.com/license/free