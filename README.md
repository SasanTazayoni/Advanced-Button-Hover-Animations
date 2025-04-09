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
* Styling & Transition: The CSS transition (```transition: all 0.3s ease```) ensures the sweep effect feels natural and responsive. The ```background-size: 400%``` property is critical — it extends the gradient beyond the button's visible area, so the shift in background-position causes the gradient to animate smoothly across it. Additionally, ```overflow: hidden``` is applied to the button to ensure the animated gradient stays neatly contained within its bounds, preventing visual overflow.

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

### Ripple

The Ripple button introduces an energetic and tactile animation that simulates the visual of a water ripple expanding outward from the point of cursor interaction. Styled with a light red background and black text, the button maintains a clean and vibrant appearance by default. Upon hover, the background deepens to a bold red while the text switches to white, enhancing contrast and providing immediate visual feedback. The standout feature, however, is the ripple itself — a circular burst that originates precisely where the user places their cursor, adding a highly responsive and immersive effect.

#### How it works

* Ripple Creation: When the user hovers over the button, a ```span``` element is dynamically inserted at the cursor’s location using TypeScript. The script calculates the cursor’s position relative to the button using ```clientX```, ```clientY```, and the button’s bounding box. The inserted span serves as the ripple source — a black, semi-transparent circle that grows outward while fading in opacity.
* Animation: The ripple expands smoothly from a small point (0px) to a large radius (around 300px), while its opacity transitions from 0.7 to 0. This creates the illusion of a shockwave or ripple propagating across the button. Simultaneously, the background colour change from light to deep red adds to the sense of motion and reinforces the interactive nature of the component.
* Styling & Positioning: The ripple is absolutely positioned using ```top```, ```left```, and CSS ```transform``` properties to ensure it stays centred on the cursor point. The ```border-radius: 50%``` ensures the ripple is perfectly circular, while ```pointer-events: none``` prevents it from interfering with button interaction. To maintain a clean interface, overflow: hidden is applied to the button — this is essential to ensure the expanding ripple stays contained within the button boundaries, avoiding visual spillover. Once the animation ends, the ripple element is removed from the DOM to maintain performance and cleanliness.

#### Customisation

* Ripple Appearance: Developers can customise the ripple’s colour, size, blur, or duration by adjusting the CSS keyframes and span styling. For example, increasing the size or duration can make the ripple feel more dramatic, while a lighter colour or lower opacity can produce a subtler effect.
* Speed & Opacity: The ripple’s expansion and fade timing is defined through CSS animations. You can adjust the animation-duration and easing curve to create anything from a quick pulse to a slow, cinematic ripple.
* Layered Effects: The ripple can be combined with additional hover effects like gradient backgrounds, glowing borders, or text transformations to create rich, multi-layered interactions. This makes the component adaptable to a variety of design themes.

The Ripple button turns a basic click target into a visually expressive element, offering instant feedback and a sense of motion that enhances the overall user experience. Ideal for interactive and playful interfaces, it communicates energy, responsiveness, and user control in a simple, satisfying way.

---

### Border

The Border button introduces a modern and visually captivating rotating border effect, achieved using a conic-gradient and layered CSS pseudo-elements. Initially styled with a soft yellow background and black text, the button presents a friendly and minimal appearance. On hover, the background transitions to a vibrant green, while the border comes to life with an animated ring of colour — adding movement and depth to the interaction.

#### How it works

* Pseudo-elements & Layering: The animation relies on the use of the ```::before``` and ```::after``` pseudo-elements, which are absolutely positioned and placed behind the button using ```z-index```. These elements inherit the button’s shape via ```border-radius: inherit``` and use an ```inset``` box model to simulate a border without affecting the button’s actual content layout.
* Conic Gradient & Animation: On hover, both pseudo-elements are filled with a ```conic-gradient```, transitioning through a sequence of greens — including a dark forest green (```#084908```) — to create a dynamic and continuous colour rotation. The rotation is controlled via a custom CSS variable ```--gradient-angle```, animated from ```0deg``` to ```360deg``` using a ```@keyframes``` rule named ```rotation```. This smooth animation creates the illusion of a swirling border encircling the button.
* Glow Effect: To add visual depth, the ```::after``` pseudo-element includes a soft glow effect using ```filter: blur(0.5rem)```. This blurred gradient trails the rotating border, amplifying the overall aesthetic with a radiant aura around the button.
* Performance & CSS Features: The animation leverages the modern CSS ```@property``` rule, which allows custom properties like ```--gradient-angle``` to animate smoothly and efficiently. This ensures compatibility and performance without the need for JavaScript.

#### Customisation

* Border Thickness: The apparent border size can be adjusted by modifying the ```inset``` value in the pseudo-elements, allowing for thicker or thinner visual borders.
* Animation Speed: The speed of the rotation can be fine-tuned by editing the duration of the ```rotation``` keyframes animation — slower for a subtle effect, or faster for a more energetic vibe.
* Gradient Colours: The colours used in the ```conic-gradient``` can be changed to suit any brand or UI theme, from neon tones to warm pastels.
* Glow Radius: The intensity and size of the glow can be controlled by adjusting the ```blur``` value in the ```::after``` element’s filter property.

This button transforms a static UI element into a vivid, motion-enhanced component that adds flair to any interface. With smooth, layered animations and a fully customisable aesthetic, the Border button is ideal for interfaces that value sleekness, energy, and modern design.

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

---

### Pixels

The Pixels button introduces a playful and captivating pixelation animation that dynamically fills the button with vibrant pixel squares on hover. With a transparent background and a subtle grey border by default, the button maintains a clean, minimal appearance — allowing the interactive effect to take centre stage. On hover, the button surface is gradually populated by a wave of tiny coloured squares, creating a smooth "filling" animation that mimics pixel rendering or data loading. When the cursor leaves, the pixels begin to dissolve, restoring the button to its original state.

#### How it works

* Hover Animation & Grid Logic: When the cursor enters the button area, a grid is calculated based on the button’s dimensions and a fixed square size (5px). A JavaScript function begins filling the button with pixel squares — each one placed at a random grid position and styled with a gradient teal colour (```radial-gradient(circle, rgb(175, 238, 238), rgba(64, 224, 208, 1))```). These pixels are absolutely positioned, giving the effect of individually coloured tiles emerging from behind the button.
* Pixel Rendering: Each frame of the animation adds a few more squares, using a ```Set``` to track which grid cells have already been filled. This continues until the entire button is pixelated, creating a satisfying gradual fill that feels both energetic and controlled.
* Mouse Leave Behaviour: Once the cursor leaves the button, the animation reverses. The existing pixels are removed randomly over time, fading the button back to its empty state. This clean reversal maintains performance and prevents buildup in the DOM.
* Styling & Overflow: The core ```.pixels-button``` uses ```overflow: hidden``` to contain the pixel effect and prevent elements from spilling outside its bounds. The button also uses ```position: relative``` and ```z-index``` layering to ensure the animated pixels appear behind the text but above the button’s base layer.

#### Customisation

* Pixel Size: The square size can be changed by adjusting the ```squareSize``` variable in the script. Larger sizes create a more blocky, retro feel; smaller sizes allow for smoother, more refined animations.
* Colours & Gradient: The fill colour of the squares is fully customisable. You can replace the radial gradient with solid colours or alternative gradients to match your design palette.
* Fill & Clear Speed: The ```setTimeout``` intervals (1ms by default) control how fast the filling and clearing animations run. Increasing the delay slows the effect for a more deliberate appearance; reducing it speeds up the transition.
* Density Control: The number of pixels added per cycle (currently four) can be adjusted for more or less dense filling. This provides fine control over the pacing and visual weight of the animation.

With its satisfying, low-resolution aesthetic and dynamic interaction, the Pixels button adds charm and energy to any interface. It’s ideal for applications that want to introduce motion, surprise, or even retro digital vibes — making even a simple button feel animated and alive.

---

### Converge

The Converge button introduces a dynamic and visually captivating hover effect where multiple yellow circles (styled as "circular spans") converge towards the center of the button. Initially, the button has a clean black background with yellow borders and text. Upon hovering, four circular elements start from above and below the button move towards the center, gradually increasing in opacity. This creates a sense of motion, as if the circles are gathering to recolour the button's background.

#### How it works

* Hover Interaction & Circle Movement: When the user hovers over the button, four yellow circles, initially positioned outside the button, begin to move towards its center. Two circles are absolutely positioned above the button, and two are absolutely positioned below the button, each one following its unique path. As the circles converge towards the center, they shift positions with a smooth transition. Their opacity gradually increases to 1, making them more visible and adding to the effect's dynamic feel. The movement of the circles is designed to mimic the idea of them dissolving into the button to change its background colour, creating an engaging and fluid animation.
* Button Background Colour: As the hover effect completes and the circles converge at the centre, the button’s background colour transitions to a vibrant yellow, while the text and border colours invert. This smooth transition suggests that the circles are dissolving to recolour the button's background, providing a satisfying visual feedback for the user.
* Mouse Leave Behaviour: When the cursor leaves the button, the circles gradually fade out and return to their original positions, reversing the effect. The background colour reverts to black, restoring the button to its initial state. This ensures that the animation is seamless and clean, with no abrupt changes or lingering effects.

#### Customisation

* Circle Size & Speed: The size of the circles and the speed of their movement can be adjusted to achieve different effects. Larger circles or slower speeds create a more dramatic effect, while smaller circles or faster transitions create a quicker, more subtle feel.
* Colour & Opacity: You can customise the colour of the circles and the background by changing the respective properties. This allows you to match the button's visual appearance to your site’s colour scheme or branding.
* Circle Transition Timing: The timing of the transition for each circle is set to 0.3s, but this can be adjusted to control how fast or slow the circles move and change opacity. This gives you full control over the animation's pacing.

The Converge button offers a visually engaging hover effect, where yellow circles appear to dissolve into the button's background, creating a captivating interactive experience. The combination of smooth transitions, fading circles, and background colour change makes this button a striking addition to any interface, perfect for drawing attention and providing intuitive feedback to users.

---

### Interlace

The Interlace button features a sophisticated hover effect where multiple diagonal lines appear to interlace over the button's surface, creating an engaging and dynamic visual. The button, which has a subtle light green background and dark text by default, showcases a series of animated lines that cross each other at varying angles upon hover. This effect mimics the motion of threads weaving together, creating a visually intricate and captivating interaction.

#### How it works

* Hover Interaction & Line Animation: When the user hovers over the button, four sets of lines (styled as "line" elements) appear and start to move diagonally across the button's surface. These lines are initially barely visible (with very low opacity) and are positioned at the edges of the button. As the hover effect takes place, the lines gradually become more opaque, and their positions shift as they rotate, creating the illusion of lines interlacing and weaving together. The lines move at different angles, with lines rotating at 45 degrees clockwise and counter-clockwise.
* Line Paths & Rotation: The lines are positioned absolutely relative to the button, and their movement is controlled by CSS transitions. There are four distinct sets of lines: one set starting from the bottom-left, another from the bottom-right, one from the top-left, and the last from the top-right. Each set of lines is animated to rotate towards the center of the button, overlapping in a criss-cross pattern, mimicking the motion of an interlacing design.
* Button Background Colour: The button's background remains static in its default state, but as the lines converge and rotate during the hover interaction, the visual complexity of the button increases. The green gradient effect of the lines adds a sense of depth and texture to the button, while the gradual increase in opacity ensures the effect is smooth and subtle.

#### Customisation

* Line Size & Density: The number of lines and their size can be adjusted. By modifying the ```lineHeight``` variable and ```numberOfLines```, you can control the density and thickness of the interlacing effect. More lines create a denser pattern, while fewer lines result in a lighter effect.
* Rotation Angles: The rotation of the lines is defined by the ```rotate``` property in the hover effect, which can be modified to create different visual effects. The current setup rotates the lines by 45 degrees, but you can adjust these angles to create more complex patterns or alternative directions.
* Line Colour & Gradient: The gradient applied to the lines (a mix of dark and light greens) can be easily customised to match the overall design of your website or application. Change the linear gradient or apply solid colours to the lines for a different look.
* Timing & Speed: The lines have a ```transition``` property that determines the speed of their opacity change and rotation. You can adjust the timing and delay values to fine-tune how fast or slow the interlacing effect takes place. The current settings use a 0.3s transition duration, but this can be increased or decreased based on your desired pace.

The Interlace button adds an elegant, intricate hover effect to your user interface, where diagonal lines rotate and interlace, creating a sophisticated visual experience. Its smooth transitions, customisable parameters, and layered effects make it perfect for interactive designs where a polished and refined button is needed. This button is ideal for situations where you want to captivate users with subtle motion and sophisticated visual feedback, making it stand out as an interactive component.

---

### Fusion

The Fusion button introduces an engaging hover effect where four circles move in from the outside edges towards the button's centre. Initially, the button has a rich brown background with the word "Fusion" displayed in the middle. Upon hovering, the circles animate from the top, bottom, left, and right, converging towards the centre, creating the sensation of energy pulling together. As the circles meet in the centre, the button’s background changes to a gradient yellow, giving the impression that the circles have fused together to add energy to the button.

#### How it works

* Hover Interaction & Circle Movement: Upon hovering over the button, four circles, positioned at the outer edges, begin to move towards the centre. Each circle starts with zero opacity and increases as it moves inward. The top, bottom, left, and right circles converge at the centre of the button, creating a dynamic and energetic effect.
* Circle Animation: The circles are animated using CSS keyframes. They begin their journey from outside the button’s bounds, moving smoothly towards the centre. As they get closer, their opacity increases, which adds to the visual impact, making the circles feel like they are actively drawing energy towards the button’s core.
* Background Colour Transition: As the circles converge in the centre, the button’s background transitions from its initial rich brown to a vibrant gradient yellow. This colour change visually represents the fusion of the circles, symbolising the gathering of energy at the centre of the button.

#### Customisation

* Circle Size & Speed: You can adjust the size and speed of the circles by modifying their ```width```, ```height```, and animation duration. The larger the circles, the more prominent the effect will be. The speed of their movement can be controlled by adjusting the ```animation``` timing and the ```transition``` properties, allowing you to fine-tune how quickly or slowly the circles converge.
* Circle Position & Direction: The four circles start from the top, bottom, left, and right of the button, but you can adjust their initial positioning by tweaking the ```left```, ```right```, ```top```, and ```bottom``` properties. You can even create more complex animations by modifying the path or the amount of movement for each circle.
* Background Styling: The button's background gradient and its transition can be customized to fit your design needs. You can adjust the starting and ending colours, gradient spread, or even change the gradient type to suit the overall theme of your project.

The Fusion button delivers a visually dynamic and engaging hover effect that makes use of four animated circles converging inward, creating an energetic fusion effect. The animation of the circles, along with the background colour transition, provides an eye-catching experience that draws attention to the button. Whether you’re looking to add some flair to a call-to-action button or enhance the interactivity of your interface, this effect will elevate your design. With easy customisation options for circle size, opacity, direction, and background styling, the Fusion button can be adapted to fit a variety of styles, making it a versatile and energetic addition to any website.

---
