---
title: WSL2 3 Common issues and how to 'fix' them
date: 2020-09-28T19:53:07.625Z
description: Some interesting links
---

<style>
img {
    width:100%;
}
</style>


<div>
  <img src="/img/mll.png" alt="logo" />
</div>


WSL2 is a super nice and powerfull tool for developing on windows. I'm someone who uses it daily and I would encourage everyone who wants to try using it on windows to do so. 

Some of the recent issues I've seen with colleagues and myself, when using WSL2, consists mostly of things we don't understand how things work. 

## WSL2 has slow / needs a lot of time to do something basic like git status or npm install

The solution for this is simple, just install the project in the filesystem of WSL and not on Windows. So the filepath should be something like:
 ```bash
 $ ~/projects/MyProject
 ```

More info can be found here [Github Issue: filesystem performance is much slower than wsl1 in /mnt](https://github.com/microsoft/WSL/issues/4197).

It's still a work in progress issue and hopefully one day it will be perfectly fast and reliable.

## WSL2 Takes up too much space

There is a very handy way to fix this issue too, and its called `wslconfig`. If you have this issue also, since WSL2 keeps growing and taking up RAM as much is Possible, you can easily make a `%UserProfile%\.wslconfig` file in Windows and use it to limit memory assigned to WSL2 VM.

In the config file write: 

```conf
[wsl2]
memory=6GB
swap=0
localhostForwarding=true
```

## WSL won't start

<div>
  <img src="/img/wslerror.png" alt="logo" />
</div>

This is also a common issue I experienced, however the simple solution is to Reinstall the subsystem. I've tried googling for days but until I did a hard reset (uninstall ubuntu and reinstall) it just did not work. With that, here comes my most important tip for using WSL2: **BACKUP - DON'T THINK THAT THE NEXT TIME YOU START WSL IT IS GOING TO START!**

This is the sad reality of WSL for now, sometimes a missconfiguration on the windows side or the WSL side can cause it to not start. You install something which corrupts the ubuntu installation and you have to install a clean slate of WSL etc etc. The point is threat it as a temporary workstatin and ALWAYS backup and git push your work / changes.