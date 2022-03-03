---
title: Homelab Details
date: 2022-03-03T20:13:36.823Z
description: Update to my homelab
---


 
After a short delay, here is the promised blogpost about my Homelab. 

This is a poorly made network graph of what and how stuff is connected: 
 <div>
    <img src="/img/untitled-diagram.drawio.png" alt="Profile menu" width= "100%" height="1%" />
  </div>

The most importat parts are that I have 1x Raspberry pi 4, 1x Synology NAS (which is my primary storage device) and just a normal switch to connect it to all the other devices on the LAN. 

The important part on the Raspberry is the [Portainer](https://www.portainer.io). Portainer is a management tool for docker containers and it is essentially the tool I'm using to manage all my docker images and monitor them. 

On the topic of monitoring there is also [NetData](https://www.netdata.cloud/) which I use for monitoring my Raspberry and Synology nas. (Because I'm lazy to configure Grafana). 

All the other apps which I'm running can be found on this [link](https://github.com/alminisl/docker-images), where I made a small bucket of docker images and docker-compose.yml files. Those can be either manually started in the CLI or using Portainer. 

I'm really loving to tinker with the docker images and configure different apps to work with each other. There are also apps I never expected to find alternatives to for example I now exclusively use bitwarden the self hosted version on my Synology and use that as my primary password manager and I know that my passwords are kept on my password dump. 

Also an app which I love is [Paperless-ng](https://paperless-ng.readthedocs.io/en/latest/) which is a super useful app for organizing your digital documents and even supports OCR, so the "searchability" is amazing. 


