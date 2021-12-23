---
title: Developer productivity (part 1)
date: 2021-01-18T19:53:07.625Z
description: Some interesting links
---

<style>
img {
    width:100%;
}
</style>

<div className={styles["logo"]}>
  <img src="/img/stockphoto.png" alt="logo" />
</div>

Productivity as a developer is the thing I've been focusing on for quiet a time. There are a lof of productivity tips and tricks for how to time manage and become better and more productive developer. This is the first part of a hopefully two where I will talk more about application and the workflows I've been using and changing up - and how I test what productivity hacks work and which do not. 
I want to start with some basics in this blogpost.

## **What is productivity?**
The [Wikipedia](https://en.wikipedia.org/wiki/Productivity) definition is "**__Productivity describes various mesaures of the efficency of production.__**". If productivity is the measure of efficency, what could that be in the context of development? Lines of Code? How much tickets did you move?

I also really like the "Productivity equiation" from Ali Abdaal:

>**Productivity = Useful output / time x f (where f is the ‘fun factor’)**

If you increase the 'f' or 'fun' constant in everything you do it amplifies your productivity! It will make you more motivated, more consistent and in the end more productive.

As a developer, you mostly get the fun factor when learning as new language, a new skill or start to work on a new project. I can tell from my experience I've been stuck in a job where the tech stack was Jquery and NodeJS backend. At the first few month I was fine with it, I learned Jquery more deeply and got better with understanding NodeJS, but seeing other colleagues work with NextJs, React, GraphQL kinda put me off my own project and I got a feeling that I'm missing out and that the thing I do are not relevant for my future career or my future development. 

I asked to get moved to the new projects, but I did not get a concrete timeline on when that could happen. After a while, even tho I work with the same technologies for ~1.5 years, my productivitry fell. The reason for that was my work and the technologies I've been working with. I did not get challanged, I did not have any fun working on the same bugs over and over, and my productivity fell more and more. 

So the options I was left with, change the technologies to something I was having fun - but wait for the company to decide when or leave the company, and those are bad options. 

## How to Increase productivity

**Habits**

Habits are an "easy" thing to change and which result in the biggest payoff. If you can change your habits you can become a better developer period. I can give you a silly example from when I started working with Git the first time. 

As junior dev I've had the issue to push things that do not needed to be pushed in the repo, be it some .env file which was not in gitignore or some test functions I've written and did not delete at the time of creating a PR. I would see those things when I already created my pull request and it would result in my senior colleagues pointing out the obvious and "wasting" their and mine time to remove a function or file which should not be there in the first place. So I've set a small pre-commit hook as a bash script (The idea for it can be found on this [link]([https://stackoverflow.com/questions/45416049/how-to-make-a-git-pre-commit-hook-that-checks-the-commit-message](https://stackoverflow.com/questions/45416049/how-to-make-a-git-pre-commit-hook-that-checks-the-commit-message)))which echoes(Screams) a message: "CHECK YOUR FILES" everytime I would make a commit, so I'm reminded to check on the files I'm trying to push. Over time that helped me develop a habit to always check the code before pushing if there are any files that are unnecessary or just test code which should be removed. 

This is just a small example of how to "actively" change some of your habits and making yourself aware of things that need to be done. 

**Productive downtime**

Many productivity books recommend a "productive downtime" which is just simple as it sounds. Stop whatever you are banging your head with go for a walk and come back in 15 minutes. The famous pomodoro technique (which I will outline more in my second post) is something which takes advantage of this. 

Also, I think, every dev can relate to having a super hard problem which you are working on and then after going home, sleeping and getting back at work in the morning, the problem is solved in 10 minutes. 

**External storage**

Since I do not trust my brain at all with keeping important information for longer then 30 minutes, one of the most important thing at least for me, is being able to store things not in my head but somewhere external. Like an external HDD, you offload your brain and store the data in an external place like a Note taking app - calendar or even manual notebooks. I always liked the idea to use digital notebooks and calendars to plan and to store as much data as possible, because I will probably forget it if I try to remember something. 

Currently I'm using the Notion app, which is one of the best note taking apps I've used (and I've used a lot of them) I currently use to make for example a "Engineering Wiki" where I store all the new technologies, scripts and tools I write, into it and make it searchable. Because I for sure won't remember everything, because my brain is so bad at it. I like to make notes about knowledge which will probably not change, for example configurating a apache web server, setting up docker etc. and just offload these things into a notebook. 

So these are some of my basics of productivity around which I'm working with. Next time, I probably will write more about tools and how to implement some workflows which I'm using for productivity.