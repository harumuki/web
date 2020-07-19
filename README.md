# duncandavidson.com

![](https://github.com/duncan/web/workflows/Azure%20Static%20Web%20Apps%20CI%2FCD/badge.svg)

This repository holds the code for [duncandavidson.com](https://duncandavidson.com).

## Infrastructure as Code

I’ve started to capture the infrastructure setup that runs this site on Azure as a set of Azure Resource Manager template files. So far, the DNS records are there. To push changes, I use the following:

```
az deployment group create -c -g duncandavidson.com --template-file azure/dns-duncandavidson.com.json
az deployment group create -c -g duncandavidson.com --template-file azure/dns-x180.com.json
az deployment group create -c -g duncandavidson.com --template-file azure/dns-x180.net.json
az deployment group create -c -g duncandavidson.com --template-file azure/dns-duncan.dev.json
```
