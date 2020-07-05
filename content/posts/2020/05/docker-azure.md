---
date: 2020-05-28T08:30:00.0+02:00
title: docker login azure
---

Coming later this year, [an updated version of Docker Desktop will let you use Azure as a container runtime directly from your desktop](ttps://www.docker.com/blog/shortening-the-developer-commute-with-docker-and-microsoft-azure/).

```
$ docker login azure
$ docker context aci-create MyTestContext
$ docker context use MyTestContext
$ docker run duncan/my-web-app:1.1
```

Being able to directly access cloud compute like this from a development desktop will be super cool and useful. More importantly, it will remove a point of friction between developing something locally and deploying it somewhere you can share it with others.
