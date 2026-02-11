# Frontend Mentor - Conference ticket generator solution

This is a solution to the [Conference ticket generator challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/conference-ticket-generator-oq5gFiKgYj). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

Users should be able to:

- Complete the form with their details
- Receive form validation messages if:
  - Any field is missed
  - The email address is not formatted correctly
  - The avatar upload is too big or the wrong image format
- Complete the form only using their keyboard
- Have inputs, form field hints, and error messages announced on their screen reader
- See the generated conference ticket when they successfully submit the form
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Design preview for the Conference ticket generator coding challenge](./preview.jpg)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- JavaScript for form validation and ticket generation

### What I learned

In this project, I learned about form validation using JavaScript, including checking email formats and file uploads. I also improved my skills in responsive design and accessibility features like screen reader announcements.

```js
// Example of email validation
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
```

### Continued development

I want to continue focusing on JavaScript for more complex interactions and perhaps integrate with backend services for real ticket generation.

### Useful resources

- [MDN Web Docs on Form Validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation) - Helped with understanding form validation.
- [Frontend Mentor Community](https://www.frontendmentor.io/community) - Great for feedback.

### AI Collaboration

I used GitHub Copilot to assist with Readme.md.

## Author

- Frontend Mentor - [@AlexanderMartinez0410](https://www.frontendmentor.io/profile/AlexanderMartinez0410)

## Acknowledgments

Thanks to Frontend Mentor for this challenging project that helped me practice form handling and validation.
