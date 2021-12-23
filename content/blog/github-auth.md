---
title: Setting up Personal Access Token with GIT / Github
date: 2021-08-31T19:53:07.625Z
description: Some interesting links
---

<style>
img {
    width:100%;
}
</style>




So Github requires now a new way to Authenticate yourself to execute github actions. (More info can be found on [Github Blog](https://github.blog/2020-12-15-token-authentication-requirements-for-git-operations/) )

Essentially you can not use your Basic Authentication anymore as in your Github username and password for executing git actions. So here I'm to offer an alternative. Not SSH alternative, since I'm too lazy to set that up on every machine, I will show a quick and easy way to never need to enter credentials without the need to use SSH keys.

### Getting a PAT

- First of, we need to generate a PAT (Personal Access Token). To do that we head over to our github profile and **_Right click_** on your profile image:

  <div>
    <img src="/img/img1.png" alt="Profile menu" width: "100%" />
  </div>

- Next, go to **_Settings > Developer Settings > Personal Access Token_** and we will arrive at this screen:

  <div>
    <img src="/img/img2.png" alt="Personal access token" />
  </div>

- Now we go to **Generate New Token** and we will be greeted with this view where we select scopes:

  <div>
    <img src="/img/img3.png" alt="Select scopes"width: "100%"  />
  </div>

- For our case we just need to select the **_Repo scope_**:

  <div>
    <img src="/img/selectedScopes.png" alt="Selected scopes"width: "100%"  />
  </div>

- We set a note and an Expiration (if you want to) and click Generate token.. and thats it, we now have a PAT, copy it and save in a text file for reference.

### Setting up the PAT Authentication

Now, what we have to do is to do a `git pull` or `git push` in the repository we have where we will get the git prompt to enter the username and password. However, we will cancel this and instead we will write

```
git config --global credential.helper cache
```

This will save our next prompt for username and password (in our case our PAT) and we will not need to enter it again. So after execting this command we just `git pull / push` and the prompt should appear again. Enter our github username and our PAT as password and this is it. Until the the token expires we have our credentials set.

Hopefully this guide was helpfull!

If you want more small tips and cool links you can always subscribe to my [Newsletter](https://www.getrevue.co/profile/almin)
