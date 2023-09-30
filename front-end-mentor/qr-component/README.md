# Frontend Mentor - QR code component solution

This is a solution to the [QR code component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### Screenshot

![](./images/Screenshot%202023-09-30%20074243.png)

### Links

- Solution URL: [Replit](https://replit.com/@DeniseZitting/QR-Code-Component)

## My process

I started first with reviewing the design and deciding how the HTML might be structured for the desired outcome.
Then I broke the design down into different elements/tags. Starting first with the `container` that wraps around the entire card.
Then I added a `figure` to hold the `img`. I broke the text apart from the img by separating it in a `div`.
Once the HTML structure was complete, I moved into the styling and started centering the elements. At this point I needed to resize the image/figure, and align the text.

After this was complete, I moved focus to adding in the last details with `border-radius` and a `drop-shadow` filter. I adjust the text colors and added the `background-color`. 

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox

### What I learned
I utilized `margin: 0 auto;` through this challenge, as I didn't want to cause a major shift to the elements when using `display: flex`.

I am most proud of the following CSS, due to the fact, I am used to creating percentages that allow for easier responsive design. However, in this challenge the object was not supposed to resize based on mobile/desktop. The width was set to a hard number and that maintains throughout the resizing.

```css
div.container {
    background-color: aliceblue;
    width: 325px;
    overflow: hidden;
    margin: 0 auto;
    border-radius: 20px;
    padding: 10px;
    filter: drop-shadow(0 0 15px #0000003e);
}
```

## Author

- Website - [Denise Zitting](https://www.denisezitting.netlify.app/)
- Frontend Mentor - [@denisezitting](https://www.frontendmentor.io/profile/denisezitting)