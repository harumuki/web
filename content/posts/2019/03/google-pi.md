---
date: 2019-03-19T12:20:00.0+01:00
---

Props to Emma Haruka and her work with the Google Cloud Platform Developer Advocacy team to [calculate 31.4 trillion digits of π](https://cloud.google.com/blog/products/compute/calculating-31-4-trillion-digits-of-archimedes-constant-on-google-cloud).

They don't say how much it would cost to do this yourself, but [Corey Quinn estimates it's about a quarter of a million dollars](https://twitter.com/QuinnyPig/status/1107838507802714112?s=19). Now that it's been generated, however, you can just grab the data by accessing the [delivery.pi](https://pi.delivery/) API:

```
$ curl "https://api.pi.delivery/v1/pi?numberOfDigits=10"
{"content":"3.14159265"}
```

Or, you can clone off your own copy of their cloud disk image. The dataset is big enough, however, that it'll cost you \$40 a day.
