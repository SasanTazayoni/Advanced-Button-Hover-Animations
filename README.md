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

#### How it works

* Background Animation: The sweeping motion is achieved by shifting the ```background-position``` from ```0%``` to ```100%``` on hover. The gradient itself usually consists of three colour stops — a primary colour, a contrasting central shade (such as white), and a secondary colour — all arranged linearly from left to right. When animated, the middle colour moves across the button, creating the impression of light or energy sweeping over the surface.
* Styling & Transition: The CSS transition (```transition: all 0.3s ease```) ensures the sweep effect feels natural and responsive. The ```background-size: 400%``` property is critical — it extends the gradient beyond the button's visible area, so the shift in background-position causes the gradient to animate smoothly across it.

#### Customisation

* Colours & Direction: The colours used in the gradient can be customised to match any design palette. The key is to maintain enough contrast between the central highlight colour and the surrounding tones to preserve the sweeping illusion. You can also adjust the direction of the sweep (for example, top to bottom or diagonal) by changing the angle of the ```linear-gradient```.
* Speed & Smoothness: The animation timing is controlled by the ```transition``` property. You can speed up or slow down the sweep effect by changing the duration or easing function. Try ```ease-in-out``` for a more gradual build-up and release.
* Gradient Complexity: For more nuanced visual effects, you can add more than three colour stops to the gradient. This allows for subtle multi-colour sweeps or stylised lighting effects.

The Sweep button is ideal for modern, animated interfaces where motion is used to guide the user’s attention. Its customisable gradient and smooth transition make it a versatile component that can be tailored to suit a wide variety of visual themes and user interactions.

---

### Neon

The Neon button delivers a bold, luminous effect that draws inspiration from classic neon signage, offering a visually striking experience with minimal styling. At rest, the button features a white background with a red border and red text, creating a clean, high-contrast look. When hovered, the button undergoes a smooth transformation — the background fills with red, the text colour inverts to white, and the border becomes transparent. This shift in appearance sets the stage for the core feature of the button: a glowing neon aura that radiates from the text and border.

#### How it works

* Glow Effect: The signature neon glow is created using multiple ```drop-shadow``` filters layered on top of one another. Each ```drop-shadow``` has a different blur radius, giving the illusion of a soft, radiating light that mimics real neon tubing. This stack of shadows builds depth and luminosity, with the text at the centre appearing to pulse with energy.
* Hover Interaction: The visual transformation on hover — including the colour inversion and glow — is handled through a CSS ```transition``` set to ```all 0.3s ease```. This ensures the changes occur quickly but fluidly, enhancing the button’s responsiveness without feeling abrupt. The border fading to transparent places full emphasis on the glowing effect, while the bold font weight ensures the text remains legible amidst the light.
* Font & Colour: The use of bold, all-caps text enhances legibility and amplifies the dramatic style of the neon effect. Although red is used by default for a classic neon look, any bright or saturated colour can be used to achieve different moods — such as cyan, lime green, magenta, or electric blue — depending on the project’s design language.

#### Customisation

* Glow Intensity: The depth and vividness of the glow can be fine-tuned by adjusting the number of ```drop-shadow``` layers and their respective blur radii. Adding more layers with subtle differences in radius creates a more pronounced halo effect, while fewer layers result in a gentler glow. You can also experiment with shadow offsets and opacity levels to refine the overall look.
* Colour Scheme: The glow colour, text, and background are fully customisable through CSS. By modifying the ```color```, ```background```, and ```filter``` properties, developers can tailor the button to fit a wide range of aesthetics — from vibrant cyberpunk themes to sleek, modern UIs.
* Background Compatibility: While the Neon button is most striking against dark or neutral backgrounds where the glow can fully radiate, it can also be effective on lighter backgrounds with slight adjustments to the glow intensity and shadow colour.

This Neon button is ideal for calls to action or interactive elements that demand visual attention. Its glowing presence adds an energetic, tech-inspired touch to any interface, making it particularly well-suited for landing pages, gaming UIs, portfolio sites, or anywhere a vibrant, standout element is needed.

---

### Trail

The Trail button offers a sleek and highly interactive hover experience that visually responds to the user’s cursor movement. Initially styled with a black background and white text, it maintains a clean and modern look. Upon hovering, the button activates a glowing radial highlight that follows the cursor in real time, accompanied by a series of soft, fading dots that create a light trail effect. This dual-layered animation transforms a standard button into an expressive, responsive visual component.

#### How it works

* Cursor-Tracking Highlight: A ```::before``` pseudo-element creates a radial glow that follows the cursor as it moves across the button. This element uses custom CSS variables — ```--x``` and ```--y``` — to dynamically position the glow according to the cursor's coordinates, which are updated in real time via JavaScript. The radial gradient is centred at the cursor’s position and softly fades in with ```opacity: 0.8```, giving a subtle spotlight effect as the user hovers.
* Fading Trail Dots: As the cursor moves, small circular elements — or "trail" dots — are created and placed at the exact position of the cursor. Each dot is a div styled with a blurred white background (```filter: blur(10px)```) and fades out smoothly using opacity transitions handled via JavaScript. These dots create a transient path that trails behind the user’s cursor, enhancing the feeling of motion and responsiveness.
* Mouse Movement Handling: JavaScript listens for ```mousemove``` events on the button, updating the CSS variables for the glow effect and simultaneously generating new trail elements. These trail dots are appended to the button temporarily and removed after a short delay, allowing for a smooth, continuous animation without cluttering the DOM.
* Visual Feedback: The combination of real-time glow and fading trails provides immediate, tactile feedback to the user, making the interaction feel both fluid and responsive. The result is a dynamic visual layer that responds precisely to every movement.

#### Customisation

* Glow Colour & Intensity: The radial glow’s appearance can be adjusted by modifying the gradient used in the ```::before``` pseudo-element. You can change its colour, size, or opacity to produce a softer or more intense highlight.
* Trail Dot Styling: Each trail dot’s size, colour, and blur radius can be customised in the JavaScript or CSS. The ```filter: blur()``` property controls the softness of the dots, while the background colour and opacity determine how prominent they appear.
* Fade Timing: The lifespan and fading speed of the trail elements are controlled through JavaScript timers and CSS transitions. Developers can fine-tune how quickly dots appear and disappear, allowing for denser trails or a subtler effect.

The Trail button is ideal for interfaces where interactivity and feedback are essential. With its smooth, cursor-reactive design and glowing aesthetic, it elevates user experience through subtle motion and layered animation — perfect for attention-grabbing Call-To-Actions or expressive UI elements.

---

### Blink

The Blink button introduces a captivating and visually dynamic hover effect that creates a blinking animation over the button. Initially, the button features a light blue background with white text, offering a clean and appealing look. Upon hovering, a white overlay gradually fades in over the button with a soft blinking effect. The button background colour transitions to a deep blue, adding a further layer of interactivity while emphasising the effect.

#### How it works

* Hover Interaction: The hover effect activates when the user places their cursor over the button. A white overlay is generated, which gradually fades in over the button and starts to blink in and out. This effect gives the impression that the button is pulsating or "blinking" with each hover.
* Animation: The blinking effect is achieved using CSS animations. The ```@keyframes blink``` controls the opacity of the overlay, gradually increasing and decreasing it from 0.6 to 0.0, giving the blinking illusion. The ```@keyframes pulse``` animation also causes the button to slightly scale in and out, creating a subtle pulsating effect. Both animations are timed to coincide with the hover interaction, adding fluidity and energy to the effect.
* Button Background Colour: As the blinking animation occurs, the button's background colour transitions to a darker blue (```#0011ff```), which helps highlight the button's interactivity and further emphasises the blinking effect. The background colour change provides additional visual feedback to the user.
* Mouse Leave Behaviour: When the cursor leaves the button, the blinking effect halts, and the overlay fades out. The button's background colour transitions back to its initial light blue shade, ensuring a smooth and seamless return to its resting state.

#### Customisation

* Blink Speed & Opacity: The speed and opacity of the blinking overlay can be customised by adjusting the ```@keyframes blink```. The duration of the fade-in and fade-out effect can be modified to create a quicker or slower blinking effect. The opacity values at different keyframes can also be adjusted to make the blinking effect more or less pronounced.
* Pulse Effect: The button's pulse effect can be tailored by adjusting the ```@keyframes pulse```. Changing the scale values and timing of the animation will modify how the button expands and contracts, allowing developers to control the intensity and speed of the pulse.
* Button Background Colour: The initial and hover background colours of the button can be modified by adjusting the ```background``` property in the ```.blink-button``` CSS rule. The hover background colour is controlled by the ```:hover``` pseudo-class, where the colour can be changed to suit the design of the project.

The Blink button offers an eye-catching interaction that adds an element of movement and surprise to any user interface. By adjusting the blink speed, opacity, and pulse effect, developers can customise the button to create a wide range of visual effects, making it a versatile UI component perfect for calls to action or important interactions.

---

### Spiral

The Spiral button introduces an engaging and visually dynamic hover effect that creates a sequence of expanding circles, each with decreasing opacity. Initially, the button has a light green background with black text. Upon hovering, concentric circles begin to appear at the centre of the button and expand outward, creating a spiral-like effect. The button background colour transitions to a darker green, enhancing the interactive feedback and further emphasising the effect.

#### How it works

* Hover Interaction: The hover effect begins when the user places their cursor over the button. A series of circles is generated at the button’s centre, each expanding in size and fading out in opacity. The circles are placed with absolute positioning, and their sizes and opacity are controlled via CSS, creating the illusion of a spiral effect emanating from the centre.
* Animation: The circles expand and fade out sequentially, using CSS transitions and ```opacity``` manipulation. The ```setTimeout``` and ```setInterval``` functions control the timing of the circle’s appearance and fading effect. Each circle gradually fades out as it expands, enhancing the overall dynamic feel of the interaction.
*	Button Background Colour: As the circles expand and complete their animation, the button’s background colour shifts to a darker shade of green (```rgb(6, 224, 6)```). This colour change provides additional visual feedback that highlights the button's interactivity.
*	Mouse Leave Behaviour: When the cursor leaves the button, the circles gradually fade out and are removed from the button. The button’s background colour reverts to its initial light green shade, ensuring a smooth and clean transition between interactions.

#### Customisation

*	Circle Size & Opacity: The size and opacity of the circles can be easily customised by adjusting the ```circlesData``` array in the JavaScript. Each element in the array defines the size (as a fraction of the button's width) and opacity of the circles. You can modify these values to achieve different visual effects, such as larger circles or more gradual opacity fades.
*	Speed & Timing: The speed at which the circles appear and fade can be modified by adjusting the delay values in the ```setTimeout``` and ```setInterval``` functions. For example, changing the 30ms and 60ms delays can make the circles appear faster or slower. Additionally, the 0.1 opacity decrement rate can be adjusted to control the fading effect’s speed.
*	Button Background Colour: The button's background colour can be modified by changing the background-colour property in the ```.spiral-button``` CSS rule. The background colour on hover is controlled by the ```.spiral-button.active``` class, which you can update to match your project’s colour scheme.

Overall, this button adds a distinctive, fluid animation to any user interface, ideal for attention-grabbing calls to action. By adjusting the size, speed, and opacity of the circles, developers can tailor the effect to match their desired aesthetic, making it a versatile and engaging UI component.
