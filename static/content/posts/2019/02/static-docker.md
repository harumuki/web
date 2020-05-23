---
date: 2019-02-23T20:00:00.0+01:00
---

Maxime Rouiller’s article about [building a multi-stage Dockerfile for SPA and static sites](https://blog.maximerouiller.com/post/how-to-build-a-multistage-dockerfile-for-spa-and-static-sites/) kind of opened up my mind a little bit. I’m pretty comfortable with containers at this point, but the simplicity of the idea is so damn elegant.

Take an NGINX base layer, and put the static content in on top of that, and done. You now have an instant packaged website in an efficient deployment mechanism that can be executed anywhere you can run a container.

Nifty.
