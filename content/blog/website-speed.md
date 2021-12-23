---
title: Things that make your website slow
date: 2020-09-09T19:53:07.625Z
description: Some interesting links
---

As someone who is a huge fan of optimizing and making websites as fast as possible and as easier for the browser to handle, I really resonated with an episode of [Syntax.fm](http://syntax.fm) (from Wes Bos and Scott Tolinski) `Hasty Treat - 5 Things That Make Your Site Slow.` I decided to dig a bit deeper and wrote a summary and a few tips on how to "fix" the website issues.

## TTFB (Time to first byte)

TTFB, which stands for time to first byte, is the amount of time it takes from when a client makes an HTTP request to it receiving its first byte of data from the web server. It is an important aspect of website optimization since the faster the TTFB, the faster the requested resource can start being delivered to the browser.

The time to first byte is made up of three separate components.

- The time needed to **send the HTTP request**
- The time needed for the server to **process the request**
- The time needed for the server to **send back the first byte** of the response to the client

**Things that slow down your TTFB**

- The creation of dynamic content
- Networking issues
- Poorly configured web server
- Server capacity issues (disk I/O, RAM, network bottlenecks)
- Database configuration/design
- Server location / higher latency

**Improving TTFB**

- Caching - Many processes and interactions must be carried out in order the generate a page, be that Wordpress or a custom website using some JS framework. These interactions each take time and can consequently increase your _TTFB_. Implementing a caching mechanism can help minimize the load time disadvantages as it keeps a stored copy of a prebuilt page that was previously requested.
- Update to latest version - Update all your packages, server side languages which run the code and even the webservers. Everything should be as up to date as possible.
- Check Logs and monitor server - Keeping track on your logs is always a good idea. You can catch early issues that may indicate a website being overloaded. This includes web servers and databases. In my career I have seen a lot of websites being slow due to bad SQL queries which need optimisation. The traffic which the website receives is also something to keep an eye on since that can impact the performance largely. If needed update your server, scale up, implement load balancing etc.

## **Requests**

![request](https://hackernoon.com/photos/ODqpGrKgCbTLUFU0tkLq9IXHAqt2-9r1k32nu)

Going from the previous topic to the next, we have requests. After TTFB is finished we have requests which load files from the server to the client / web browser. The files should be as small as possible and they should be as few as possible. Too many requests, loading too much JS Files, CSS files and images causes a **longer** loading time.

The best **solution** for this would be bundling the JS and CSS files and also minimizing them. (_Minification (also minimisation or minimization) is the process of removing all unnecessary characters from the source code of interpreted programming languages or markup languages without changing its functionality._)

**Bundling**

Using tools like Parcel, Webpack or even Grunt, will help you to bundle your JS files into one file which will be delivered to the client besides bundling they also compress them so it will be delivered as optimized as possible. I think modern web development without a Build tool is not even viable anymore, if you use Angular/Vue/React you must use some kind of build system.

Besides taking care of the number of files we also have to take care of the **size** of those.

With moving the files from server to client these file are gonna take longer to load pretty straight forward, however what is the solution here ?

**Compress images**

By compressing the images we want to make them "web efficient". There are tons of tools out there for making this happen.

Like mentioned on the show, there are a few options for image optimisation. For example we have [ImageOptim](<[https://imageoptim.com/mac](https://imageoptim.com/mac)>) which is only a mac app but can be used to compress your images, services like [cloudinary](<[https://cloudinary.com/](https://cloudinary.com/)>) which helps you manage images on your devices. Also if you have an 4k image or something ridiculous like that on you website, you don't want to serve that to the user on mobile phones. That is why the images should be adapted to the device.
Speaking of that we have the `picture` element in HTML. [More on the picture element here](<[https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture)>)

Idea is you can pass multiple sources along with media queries show/hide different sizes depending on the device, for example (taken from MDN):

```jsx
<picture>
    <source srcset="/media/examples/surfer-240-200.jpg"
            media="(min-width: 800px)">
    <img src="/media/examples/painted-hand-298-332.jpg" />
</picture>
```

(Wordpress for example does image optimization out of the box.)

Something they mentioned on the show which I also did not know is the [ImgBot](<[https://github.com/apps/imgbot](https://github.com/apps/imgbot)>) on Github.
Its a free Bot for open source projects which resizes your images in your repo for **FREE** and it does it lossless. The results are about 30-40% image size reduction.

## **Lazy Loading**

Lazy loading (also known as asynchronous loading) is a design pattern commonly used in computer programming to defer initialization of an object until the point at which it is needed.

For example we can make an offset in an HTML element and say "Hey, When you scroll over me just load the images below (Or some other DOM element)" The idea is that the content is being loaded as we scroll the page no need to load a huge website all at once. For a good example just visit [https://reddit.com](https://reddit.com).

We also have the lazy load attribute in HTML for images which can help us easily to implement lazy loading on images and almost every browser supports it.

````jsx
<img src="image.png" loading="lazy" alt="…" width="200" height="200">```
````

## **CDN (Content delivery network)**

When you have an asset(JS file, CSS File or an Image), and you use a CDN, the asset will put on servers all over the world. Then, when someone requests the CDN will be smart enough to route the closest server to this asset. As simple as that.

The current top providers are [Cloudflare](<[https://www.cloudflare.com/](https://www.cloudflare.com/)>) and [AWS Cloudfront](<[https://aws.amazon.com/cloudfront/](https://aws.amazon.com/cloudfront/)>).

**Fun Fact:** Netlify, the web app where this website is also hosted, uses a CDN and it is free to use and it is zero setup. So thanks Netlify!

I hope you have taken some value from this post. There is a lot more to talk about and going into the details however a lot of problems are taken care of by boilerplates like `create-react-app` which configure the project for you. These are some general information on how to maintain your website.
