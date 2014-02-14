# Myriel

Myriel is a very minimum yet flexible blog boilerplate for [Hugo](http://hugo.spf13.com/).

## Prerequisite

- [Hugo](http://hugo.spf13.com/)
- Node.js and several modules which you can install with `npm install` at this
  root dir (Since I'm new to Go).

## Quickstart

[Install Hugo](http://hugo.spf13.com/overview/quickstart)!  

You need to clone this repo on your local machine.  

```
git clone git@github.com:studiomohawk/myriel.git
```

`cd` into your cloned repo.

Then, install node dependencies by 

`npm install`

### Run Hugo

```
hugo server -s . -w
```

or 

```
npm run start
```

Point your browser to <http://localhost:1313/>

And your running Hugo with Myriel theme!

### Example

I've setup example at <http://studiomohawk.github.io/myriel/>

### Customize Myriel

As you can see, Myriel is very minimum theme, so you do want to customize it to fit your needs.

#### Where is CSS?

CSS files are located within `_devel/style` dirs.  
Dirs are structured to follow Hugo’s dirs convention. 

##### But, how to modify them?

Since I don’t like any of CSS preprocessors,  I’ve decided to not use them at all!  
But as everyone knows that using `@import` is bad for performance, I am using node [borschik](https://github.com/bem/borschik) from Yandex to concatenate CSS.

```
npm run watch-css
```

This command will start watching css dirs change and when any change detected, borschik will concatenate css and move it to `static/static/style/bundle.css`.  
borschik looks for `_devel/style/main.css`, so if you add new file, make sure you add `@import`rule to that file.

#### Where is JavaScript?

At this time, I don’t have any JavaScript!  
**but** I’m planning to use [browserify](https://github.com/substack/node-browserify) by substack for modularize JavaScript.  
I already setup necessary  commands at `package.json` so if you need to add JavaScript, please check them out.

#### It is possible to automate creating a new post?

Yes.  

```
npm run write --title=your title
```

