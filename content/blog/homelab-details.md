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

In my tech setup, I have a Raspberry Pi 4 and a Synology NAS, which serves as my primary storage solution. To connect everything on my local network, I use a standard switch.

Central to my Raspberry Pi's functionality is [Portainer](https://www.portainer.io/), a powerful management tool for Docker containers. Through Portainer, I efficiently handle my Docker images, overseeing their deployment and monitoring their performance.

For comprehensive monitoring, I rely on [NetData](https://www.netdata.cloud/). This tool enables me to keep tabs on both my Raspberry Pi and Synology NAS without the need for extensive Grafana configuration, which suits my preference for simplicity.

All the applications I run are neatly documented in this [repository](https://github.com/alminisl/docker-images). Within this collection, I've curated a variety of Docker images along with their corresponding `docker-compose.yml` files. These apps can be conveniently launched either through manual CLI commands or the user-friendly Portainer interface.

One of my most satisfying endeavors involves configuring various applications to seamlessly interact within Docker. This tinkering has led me to discover unexpected alternatives, such as utilizing the self-hosted version of Bitwarden on my Synology NAS. This shift has transformed Bitwarden into my primary password management solution, offering the reassurance that my sensitive data remains within my controlled environment.

Another standout in my lineup is [Paperless-ng](https://paperless-ng.readthedocs.io/en/latest/), a remarkable tool for digital document organization. This application goes beyond basic storage, enabling OCR capabilities that enhance the searchability of my documents and significantly boost overall organization.