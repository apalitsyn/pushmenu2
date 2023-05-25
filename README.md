# PUSH MENU

Live example - https://symphonious-cucurucho-b1d1ff.netlify.app/

## Getting Started
Please run:
`npm install`
following by:
`npm start`

p.s. I have Node v16.10.0

## What I have done:

### HTML
Semantic HTML, but didn't create a footer since it wasn't relevant.

### CSS
I used SCSS, which is compiled with grunt via watch or grunt sass task

### JavaScript
A rather basic script with a class toggle function which is used for the push menu itself and the slide-down sub-menu.

## Things I would like to fix:
- I have done some basic rules to make the example responsive, so that it is usable at any width.
- For the sub-menu, I am using a max-height: 500px in css to animate the slide-down, but I would rather have the max-height calculated with JavaScript to smoothen out the transition during slide-up
- Used hardcoded px values within the menu toggle. Would rather use variables.
- I would also work on making the content of the menu dynamic .i.e. a JSON file and, as something that has come up in our conversation, {{mustache}} template. But I have an example of Ractive I did for another test last year.
