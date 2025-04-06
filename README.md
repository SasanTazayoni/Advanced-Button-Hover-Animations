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

### Trail

The Trail button introduces an interactive and visually engaging cursor-following effect that leaves behind a glowing trail as the user moves their mouse across the button. Styled with a black background and white text, it starts with a minimal, high-contrast look. The key to the effect lies in the dynamic use of pseudo-elements and JavaScript to track mouse movement and render responsive visual feedback.
As the user hovers over the button, a radial glow appears at the cursor’s current location — achieved using a ::before pseudo-element positioned with custom CSS variables (--x, --y) updated in real time via JavaScript. This glow softly fades in with opacity: 0.8, creating a spotlight effect that tracks the cursor.

Simultaneously, small circular "trail" elements are generated with each movement, styled as blurred white dots using CSS filters (filter: blur(10px)) and positioned exactly at the cursor's location. These trail dots fade out smoothly over time via JavaScript, producing a fading particle-like path that follows the cursor — enhancing interactivity and visual feedback.

The glow and trail effects are fully customisable. You can adjust their colour, size, blur intensity, fade duration, or opacity to suit your project’s aesthetic. The radial gradient in the ::before pseudo-element determines the soft highlight area, while the number and timing of trail elements control the density and smoothness of the trailing effect.

Together, these elements create a fluid, motion-based experience that transforms a standard button into an engaging, reactive UI component — perfect for applications where attention to detail and interaction are key.

### Blink

The Blink button introduces a captivating and visually dynamic hover effect that creates a blinking animation over the button. Initially, the button features a light blue background with white text, offering a clean and appealing look. Upon hovering, a white overlay gradually fades in over the button with a soft blinking effect. The button background colour transitions to a deep blue, adding a further layer of interactivity while emphasising the effect.

#### How It Works

* Hover Interaction: The hover effect activates when the user places their cursor over the button. A white overlay is generated, which gradually fades in over the button and starts to blink in and out. This effect gives the impression that the button is pulsating or "blinking" with each hover.
* Animation: The blinking effect is achieved using CSS animations. The ```@keyframes blink``` controls the opacity of the overlay, gradually increasing and decreasing it from 0.6 to 0.0, giving the blinking illusion. The ```@keyframes pulse``` animation also causes the button to slightly scale in and out, creating a subtle pulsating effect. Both animations are timed to coincide with the hover interaction, adding fluidity and energy to the effect.
* Button Background Colour: As the blinking animation occurs, the button's background colour transitions to a darker blue (```#0011ff```), which helps highlight the button's interactivity and further emphasises the blinking effect. The background colour change provides additional visual feedback to the user.
* Mouse Leave Behaviour: When the cursor leaves the button, the blinking effect halts, and the overlay fades out. The button's background colour transitions back to its initial light blue shade, ensuring a smooth and seamless return to its resting state.

#### Customisation

* Blink Speed & Opacity: The speed and opacity of the blinking overlay can be customised by adjusting the ```@keyframes blink```. The duration of the fade-in and fade-out effect can be modified to create a quicker or slower blinking effect. The opacity values at different keyframes can also be adjusted to make the blinking effect more or less pronounced.
* Pulse Effect: The button's pulse effect can be tailored by adjusting the ```@keyframes pulse```. Changing the scale values and timing of the animation will modify how the button expands and contracts, allowing developers to control the intensity and speed of the pulse.
* Button Background Colour: The initial and hover background colours of the button can be modified by adjusting the ```background``` property in the ```.blink-button``` CSS rule. The hover background colour is controlled by the ```:hover``` pseudo-class, where the colour can be changed to suit the design of the project.

The Blink button offers an eye-catching interaction that adds an element of movement and surprise to any user interface. By adjusting the blink speed, opacity, and pulse effect, developers can customise the button to create a wide range of visual effects, making it a versatile UI component perfect for calls to action or important interactions.


### Spiral

The Spiral button introduces an engaging and visually dynamic hover effect that creates a sequence of expanding circles, each with decreasing opacity. Initially, the button has a light green background with black text. Upon hovering, concentric circles begin to appear at the centre of the button and expand outward, creating a spiral-like effect. The button background colour transitions to a darker green, enhancing the interactive feedback and further emphasising the effect.

#### How It Works

* Hover Interaction: The hover effect begins when the user places their cursor over the button. A series of circles is generated at the button’s centre, each expanding in size and fading out in opacity. The circles are placed with absolute positioning, and their sizes and opacity are controlled via CSS, creating the illusion of a spiral effect emanating from the centre.
* Animation: The circles expand and fade out sequentially, using CSS transitions and ```opacity``` manipulation. The ```setTimeout``` and ```setInterval``` functions control the timing of the circle’s appearance and fading effect. Each circle gradually fades out as it expands, enhancing the overall dynamic feel of the interaction.
*	Button Background Colour: As the circles expand and complete their animation, the button’s background colour shifts to a darker shade of green (```rgb(6, 224, 6)```). This colour change provides additional visual feedback that highlights the button's interactivity.
*	Mouse Leave Behaviour: When the cursor leaves the button, the circles gradually fade out and are removed from the button. The button’s background colour reverts to its initial light green shade, ensuring a smooth and clean transition between interactions.

#### Customisation

*	Circle Size & Opacity: The size and opacity of the circles can be easily customised by adjusting the ```circlesData``` array in the JavaScript. Each element in the array defines the size (as a fraction of the button's width) and opacity of the circles. You can modify these values to achieve different visual effects, such as larger circles or more gradual opacity fades.
*	Speed & Timing: The speed at which the circles appear and fade can be modified by adjusting the delay values in the ```setTimeout``` and ```setInterval``` functions. For example, changing the 30ms and 60ms delays can make the circles appear faster or slower. Additionally, the 0.1 opacity decrement rate can be adjusted to control the fading effect’s speed.
*	Button Background Colour: The button's background colour can be modified by changing the background-colour property in the ```.spiral-button``` CSS rule. The background colour on hover is controlled by the ```.spiral-button.active``` class, which you can update to match your project’s colour scheme.

Overall, this button adds a distinctive, fluid animation to any user interface, ideal for attention-grabbing calls to action. By adjusting the size, speed, and opacity of the circles, developers can tailor the effect to match their desired aesthetic, making it a versatile and engaging UI component.
