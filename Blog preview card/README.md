# Frontend Mentor - Blog preview card solution

This is a solution to the [Blog preview card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/blog-preview-card-ckPaj01IcS). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Your challenge is to build out this blog preview card and get it looking as close to the design as possible.

Users should be able to:

- See hover and focus states for all interactive elements on the page
- View the optimal layout for the interface depending on their device's screen size

### Screenshot

![](./design/desktop-design.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it.

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Google Fonts (Figtree)
- CSS transitions and hover effects

### What I learned

In this project, I learned how to create an elegant card component with hover effects and proper styling. The use of CSS custom properties made it easy to maintain consistent colors throughout the design.

```html
<article class="card">
  <div class="card__image">
    <img src="./assets/images/illustration-article.svg" alt="HTML & CSS illustration">
  </div>
</article>
```

```css
.card:hover {
  box-shadow: 16px 16px 0px 0px var(--gray-950);
  transform: translate(-4px, -4px);
}
```

This approach helped me create an interactive and visually appealing card with smooth transitions.

### Continued development

I want to continue focusing on:
- Advanced CSS animations and micro-interactions
- Accessibility features for card components
- Responsive design patterns for complex layouts
- CSS Grid for more sophisticated card layouts

### Useful resources

- [MDN Web Docs on CSS Transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions) - Helped me understand smooth transitions for hover effects.
- [CSS Tricks - A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) - Great resource for flexbox layout.
- [Frontend Mentor Community](https://www.frontendmentor.io/community) - Great for getting feedback and inspiration from other developers.

### AI Collaboration

I used GitHub Copilot to assist with generating semantic HTML structure, ensuring best practices for component architecture and responsive design.

## Author

- Frontend Mentor - [@AlexanderMartinez0410](https://www.frontendmentor.io/profile/AlexanderMartinez0410)

## Acknowledgments

Thanks to Frontend Mentor for providing this challenge, which helped me practice my HTML and CSS skills.

