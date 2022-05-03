---
title: React performance hacks
date: 2022-05-03T19:11:53.568Z
description: Small ideas how to improve react website
---
While working on my small "SaaS" product, I wanted to make it as "performant" as it gets. Something I found out is that every time I do a re-render while using `useEffect` the dependency array is being re initialized every time. So what we can do to mitigate this is adding a empty array varible and assigning it to the `useEffect`. 

For example if you have something like this: 

```js
useEffect( () => {
// some code
}, [])
```

You can write something like: 

```js
const empy = []; // Must be outside the component declaration / global variable

useEffect( () => {
// some code
}, empty)
```
So now we have only one initialization of the empty array. 

### `useMemo` / `useCallback` 

Something else which is useful for performance gains in React are some specific hooks like the `useMemo` hook [Documentation link](https://reactjs.org/docs/hooks-reference.html#usememo).

In layman terms, what this does is not rendering a child component in the case of not changing the child component's internal state. We Just render the parent component. So we can save a lot of rendering time with this method. 


`useCallback` hook [Documentation link](https://reactjs.org/docs/hooks-reference.html#usecallback) similar to the `useMemo` hook, we can use `useCallback` instead of `useEffect` which will only trigger when one of the dependencies change and return us a Memoized / cached callback. 

Some small optimizations tips I've been using recently for React. I'm on a quest to learn even more things about the way react optimization works as I find this part of React still lacking a bit from my side. Will update with further findings. 


