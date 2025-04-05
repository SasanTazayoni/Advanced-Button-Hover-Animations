# Advanced Button Hover Animations

![HTML](tech/html.png) ![CSS](tech/css.png) ![Typescript](tech/typescript.png) ![Vite](tech/vite.png)

## Introduction

This project presents a collection of advanced button hover animations. Inspired by [Ian Lunn's Hover Effects](https://ianlunn.github.io/Hover/), this project expands upon traditional hover interactions, offering a diverse set of dynamic animations that can be integrated into any modern web project.

The animations in this collection are designed to elevate user engagement, introducing visual feedback that enhances interactivity and usability. From subtle effects to bold transformations, each animation has been carefully crafted to provide a balance between aesthetics and performance. These effects can be effortlessly applied to buttons, links, or other interactive elements, making them suitable for a variety of UI/UX applications.

This project was created purely for fun and as a way to practice using TypeScript for the first time. While experimenting with TypeScript, the focus was on structuring animations with strong typing, ensuring better error handling, clearer code organisation, and a smoother development experience.

This project is built with reusability in mind, allowing developers to easily customise effects, tweak parameters, and extend functionalities to suit their specific needs. By leveraging TypeScript, the animations are structured with strong typing, ensuring better error handling, clearer code organisation, and a smoother development experience.

To experience the animations in action, simply apply them to any button element. Each hover effect is triggered when a user moves their cursor over the button, adding an extra layer of engagement to the user interface. Developers can tweak animation settings such as duration, easing functions, and effect intensity to create unique visual styles.

Comprehensive documentation is included to ensure that users can easily implement, adjust, and maintain the animations. The instructions will detail how each effect functions, how to apply them to different elements, and how to modify styles while preserving the smooth and intended animations.

This collection caters to a broad audience, from frontend developers and UI/UX designers to enthusiasts who appreciate interactive and aesthetically pleasing web elements. The variety of effects ensures that whether you prefer sleek and minimal animations or bold, attention-grabbing transformations, there’s an option to fit your project’s style.

This base CSS defines consistent styling for all buttons in the project using CSS custom properties for flexibility and reusability. The :root section sets two variables: --button-width and --button-height, which control the default dimensions of the buttons. The .button class then applies these values along with additional styling to ensure a clean and modern appearance. Padding and font size provide comfortable spacing and readability, while border: none and border-radius: 10px give the button smooth, rounded corners. The cursor: pointer makes it clear the button is interactive, and margin: 10px ensures consistent spacing between multiple buttons. This setup creates a solid foundation that can be extended or customised for different hover animations throughout the project.

You can check them out [here!](https://sasantazayoni.github.io/Advanced-Button-Hover-Animations/)


## The Buttons

### Sweep

The Sweep button uses a linear-gradient background that creates a dynamic sweeping animation across the button surface. This gradient typically features two main colours with a sharply contrasting colour placed in between — often a lighter tone like white — to establish the illusion of a “sweep.” The gradient is expanded beyond the button’s visible area using background-size: 400%, allowing for noticeable movement when the background-position shifts from 0% to 100% on hover. This creates a left-to-right sweeping motion. You can use completely different colours or even shades of a single colour with varying contrast; the key is that the middle "fade" colour must contrast both surrounding colours to maintain the visual impact. The entire animation is smoothed using transition: all 0.3s ease, making the effect feel fluid and responsive. With simple tweaks to direction, colours, and intensity, the sweep effect can be customised to match any visual style.

### Neon

The Neon button creates a bold, glowing visual effect that mimics classic neon signage. Initially styled with a white background, red border, and red text, the button presents a clean and minimal appearance. On hover, it undergoes a dramatic transformation: the background fills with red, the text turns white, and the border fades to transparent, shifting focus to the glowing effect. This glow is achieved using multiple layered drop-shadow filters of increasing radius, which simulate the soft, radiating light characteristic of real neon. The transition is quick and smooth (transition: all 0.3s ease), and the bold font weight enhances the button’s visual impact.
The intensity of the glow effect can be finely tuned by adding or removing drop-shadow layers. More layers with varied blur radii produce a deeper, more vibrant glow, while fewer layers result in a subtler shine. Although red is used in this example for a traditional neon vibe, the effect is fully customisable — any bright colour can be used to match the design aesthetic. This button works especially well against dark backgrounds but can be effective on light ones too, offering a lively and eye-catching interaction cue.

