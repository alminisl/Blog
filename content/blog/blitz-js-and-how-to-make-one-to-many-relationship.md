---
title: Blitz.JS and how to make one to many relationship
date: 2022-01-04T09:24:23.886Z
description: "Blitz.js and why I love it "
---
Been playing around with [blitz.js](https://blitzjs.com/) and I love it! 

Blitz seems to be the one thing every web dev wants, a tool which handles all the fluff around development. You need a database and a connection to it, CRUD operations and some basic pages? Well blitz to the **rescue!**. 

What I love about blitz is how fast I can be productive and work on things that matter, woud you believe me if I told you I made a Login / Logount / Signup functionality, basic design, and pages for 3 DB models in less then a day? 

Well thanks to blitz everyone can do it. The tecnology that is behind is [prisma](https://www.prisma.io/) and it is maybe one of the best ORMs I've ever seen (at least for the JS community). 

You run `blitz generate all <model name> [props]` and you got yourself a Database table. 

Also a `prisma.schema` file is generated which is a human readable DB file. ([reference](https://www.prisma.io/docs/concepts/components/prisma-schema)) 

The biggest issue I had is creating a 1 to many relationship with Prisma. The issue was that in your app when the `getProject` lets say is generated (in my case I used a project model) you need to add a `include: {}` prop. For example: 

`const project = await db.project.findFirst({ where: { id }, include: { people: true } })`

In this case `people` is the model which will be in the project as the "many" in this relationship. So one `Project` has many `people` working on it. 

More info about relationships can be found here: [API Reference](https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#include) 
