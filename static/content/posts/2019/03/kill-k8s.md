---
date: 2019-03-14T11:40:00.0+01:00
title: Of course Kubernetes isn’t always the answer
---

Kubernetes is the new hotness, for sure, and pretty awesome to boot. But is it really needed, especially when you’re bootstrapping a new idea? Maybe not. UK-based [Freetrade](https://freetrade.io/) started out with a decently designed Kubernetes-based stack, complete with all the bells and whistles, but ended up [scrapping that plan and launching with Firebase functions](https://blog.freetrade.io/killing-kubernetes-7f8b61c701aa). 

Even now at 20k users, it’s been the right decision for them.

> In fact, not only did we not need it - but if we’d launched with this stack with just two engineers (our launch team size!) I’m confident our customers would have been very unhappy.

As they continue to grow, I’m sure that Freetrade may end up putting some functionality into on-demand container instances or even spin up a Kubertnetes cluster to handle the parts of their app that need it.  When they do, however, I’m sure they’ll be able to leave a significant portion of their application surface in functions.
