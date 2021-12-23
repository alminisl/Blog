---
title: The pain of Networking with WSL2 and how to Fix it
date: 2021-02-04T19:53:07.625Z
description: Some interesting links
---

I run my dev enviroment on MS WSL, I had the need to access my web app from another device. Usually if a web server is running on your PC you can easily access it by typing the PC IP and Port. However, Windows is NAT-ing the connection to WSL and that results in WSL having its own IP range and subnet. So the only one knowing about the WSL netowrk is the host PC.

WSL1 had a proxy I think, It worked out of the box and for some reason they removed that from WSL2. More info here on [Microsoft Page](https://docs.microsoft.com/en-us/windows/wsl/compare-versions#accessing-a-wsl-2-distribution-from-your-local-area-network-lan)

Now, what I had to do with my WSL to be able to share the connection is run the powershell command:

`netsh interface portproxy add v4tov4 listenport=3000 listenaddress=0.0.0.0 connectport=3000 connectaddress=<WSL IP>`

Which allows proxing from port 3000 to WSL 3000. After I execute this command I could access this port from everywhere.

Same thing I did for port 22 so I can ssh.

Also you need to change Windows firewall settings and allow inbound connections to these ports. (duuh)

Now, after restarting windows - the config is being reset because the WSL IP is always being changed after restart. After some digging I found a way to make this "permanent" by running task scheduler on windows and calling this script every time the PC starts - [github link](https://github.com/microsoft/WSL/issues/4150#issuecomment-504209723)

I was so dissapointed in this networking implementation on WSL2 compared to WSL1. I hope this is fixed since these steps are just insane.

**Update**

Thanks to the lovely people of the Twitters, I give you a link to [Scott Hanselmans blogpost](https://www.hanselman.com/blog/page/1) about Tailscale, which essentially helps with this and makes it a bit easier.
