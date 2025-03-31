## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Toggle extensions between active and inactive states.
- Filter active and inactive extensions.
- Remove extensions from the list.
- Select their color theme (light or dark mode).
- View the optimal layout for the interface depending on their device's screen size.
- See hover and focus states for all interactive elements on the page.

### Screenshot

![Screenshot of the Browser Extensions Manager UI](./preview.jpg)

### Links

- [Live Site URL](https://browser-extensions-manager-ui-main-bl4zizgrr.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/) - For styling
- [Framer Motion](https://www.framer.com/motion/) - For animations
- [Vite](https://vitejs.dev/) - Build tool

### What I learned

This project helped me understand how to manage state effectively in React using Context APIs. I also learned how to implement animations using Framer Motion and how to use Tailwind CSS for responsive design.

Here is an example of a toggle button I implemented:

```jsx
export default function ToggleButton({ isToggled, setIsToggled, action }) {
  return (
    <button
      className={`relative w-[50px] rounded-full ${
        isToggled ? "bg-red-700" : "bg-neutral-300"
      }`}
      onClick={() => {
        action();
        setIsToggled((prev) => !prev);
      }}
    >
      <p
        className={`w-[20px] h-[20px] rounded-full ${
          isToggled ? "translate-x-[25px]" : "translate-x-0"
        }`}
      ></p>
    </button>
  );
}
```

### Continued development

In future projects, I want to focus on improving accessibility and testing. I plan to integrate tools like Storybook and Vitest to ensure a robust development workflow.

### Useful resources

- [Framer Motion Documentation](https://www.framer.com/motion/) - Helped me understand how to create smooth animations.
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - A great resource for learning utility-first CSS.

## Author

- Website - [![LinkedIn](https://img.shields.io/badge/LinkedIn-Profile-blue?logo=linkedin)](https://www.linkedin.com/in/mohamed-abo-seada-0b8171166)
- Frontend Mentor - [@MohamedAboSeada](https://www.frontendmentor.io/profile/MohamedAboSeada)
- GitHub - [@MohamedAboSeada](https://github.com/MohamedAboSeada)
