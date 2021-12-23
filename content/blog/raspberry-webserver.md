---
title: Setting up a private web server to host my API - Raspberry pi
date: 2021-02-26T19:53:07.625Z
description: Some interesting links
---

<style>
img {
    width:100%;
}
</style>

<div>
    <img src=/img/rpi.jpg />
</div>

I was thinking "Why should I pay for a server when I have 2 Raspberry Pi's lying around which can do the smae thing and more as a VPS + they are under my control?". 
And this is exactly what i did. 

Short summary: 

I've been paying a server to host a small API for https://hedlajn.info, but it really does not pay off. I have about 10 users daily and paying 5 euros a month does not justify me having the server. 

Now, what I did as a small side project is make a full blown server with ssl and reverse proxy that does the same as a dedicated one and costs me how ever much a raspberry pi can consume energy. 

#### Disclaimer: This will only work if you can do portforwarding from your home router.

## Nginx

The first step is installing nginx on the raspberry which is easy enough just use these commands:

```bash
sudo apt update
sudo apt install nginx
sudo /etc/init.d/nginx start
```

To test if this is working - go to `http://<ipaddress-of-raspberry>`, you should see the default Nginx welcome page. 

After we have our nginx, we need to configure it.

### Configure Nginx to forward request to your app

- First step is to go to the direcotry `/etc/nginx/sites-available` and create a new file, `my-site` or `my-api` whatever you want really.

```bash
cd /etc/nginx/sites-available
touch my-site
vim my-site
```

- Set the following config in the file: 

```nginx
server {
    listen 0.0.0.0:80;
    server_name my-site.com;
    access_log /var/log/nginx/my-site.com.log;
    location / {
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header HOST $http_host;
        proxy_set_header X-NginX-Proxy true;
        proxy_pass http://127.0.0.1:3000;
        proxy_redirect off;
    }
}
```
- So to explain a bit, the important part here is to set the `server_name` which should be your Domain. For example for hedlajn.info I've used `api.hedlajn.info` to point to the nginx - which results in redirecting to the `proxy_pass` which is the app running. So when pinging the URL my Nginx will return the result of the proxy. 


- Last step, we need to link to `sites-enabled` from our `sites-available` and that is easy as executing this: 

```bash
cd /etc/nginx
sudo ln -s /etc/nginx/sites-available/my-site sites-enabled/my-site
```

then just restart the nginx `sudo /etc/init.d/nginx restart` and viola! You have setup a nginx server on your Raspberry pi! 

##### Bonus: Repeat this part and you can add as many projects / websites as you want onto your raspberry pi or any other web server which has nginx. 

## Running the node app (API)

Now that I have setup the Nginx server and he listens on the :3000 port for my app - I can just install pm2. 

```npm 
npm install -g pm2
```

"PM2 is a production process manager for Node.js applications with a built-in load balancer. It allows you to keep applications alive forever, to reload them without downtime and to facilitate common system admin tasks."

A must have tool for things like this and it is also fairly user friendly to setup. Besides pm2 provides us with extremely well logging which I use all the time. 

How did I start my app using pm2? 

Easy, `git clone project` after that i just `cd project` and `pm2 start index.js -n SomeCustomName`. I can then check `pm2 logs SomeCustomName` and see what is happening. If everything is fine I should be able to access my website or API thru it. 

## Configuring SSL 

One last thing is configuring the SSL certificates so that I can access my API over the internet using https. This is also very simple I just used the [CertBot](https://certbot.eff.org/) - but to save you some time debugging issues with cert bot on raspberry pi, the issues is that on the RPI you have to use the python version like this: 

```bash
sudo apt-get install certbot python-certbot-nginx
```

and start it 

```bash
sudo certbot --nginx
```

Now follow the instructions and you should have configured SSL on your raspberry for your domain! Thats it! 

Happy hacking! 




