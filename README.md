# Advanced Button Hover Animations

![HTML](tech/html.png) ![CSS](tech/css.png) ![Typescript](tech/typescript.png) ![Vite](tech/vite.png) ![VSCode](tech/vscode.png)

## Introduction

This project presents a collection of advanced button hover animations. Inspired by [Ian Lunn's Hover Effects](https://ianlunn.github.io/Hover/), this project expands upon traditional hover interactions, offering a diverse set of dynamic animations that can be integrated into any modern web project.

The animations in this collection are designed to elevate user engagement, introducing visual feedback that enhances interactivity and usability. From subtle effects to bold transformations, each animation has been carefully crafted to provide a balance between aesthetics and performance. These effects can be effortlessly applied to buttons, links, or other interactive elements, making them suitable for a variety of UI/UX applications.

This project was created purely for fun and as a way to practice using TypeScript for the first time. While experimenting with TypeScript, the focus was on structuring animations with strong typing, ensuring better error handling, clearer code organisation, and a smoother development experience. Additionally, the creative application of mathematical concepts plays a key role in shaping the animations, enhancing the visual impact through calculated movement, rotation, and scaling to provide an engaging experience that feels dynamic and fluid.

Surprisingly, many of these buttons proved far more difficult to make than expected. What began as simple hover effects often required nuanced timing, precise transformations, and clever layering to achieve the intended visuals without sacrificing performance or responsiveness. Balancing complexity and smooth interaction demanded creative problem-solving and iterative refinement.

Some animations turned out to be more popular or practical than others. Interestingly, a few of the easiest ones became the most reusable and impactful in real-world scenarios, while some of the most complex ones — despite being technically impressive — proved to be less practical or visually effective than originally imagined. This contrast offered valuable insight into the balance between effort, creativity, and usability in frontend development.

This project is built with reusability in mind, allowing developers to easily customise effects, tweak parameters, and extend functionalities to suit their specific needs. By leveraging TypeScript, the animations are structured with strong typing, ensuring better error handling, clearer code organisation, and a smoother development experience.

To experience the animations in action, simply apply them to any button element. Each hover effect is triggered when a user moves their cursor over the button, adding an extra layer of engagement to the user interface. Developers can tweak animation settings such as duration, easing functions, and effect intensity to create unique visual styles.

Comprehensive documentation is included to ensure that users can easily implement, adjust, and maintain the animations. The instructions will detail how each effect functions, how to apply them to different elements, and how to modify styles while preserving the smooth and intended animations.

This collection caters to a broad audience, from frontend developers and UI/UX designers to enthusiasts who appreciate interactive and aesthetically pleasing web elements. The variety of effects ensures that whether sleek and minimal animations or bold, attention-grabbing transformations are preferred, there’s an option to suit any project’s style.

This base CSS defines consistent styling for all buttons in the project using CSS custom properties for flexibility and reusability. The `:root` section sets two variables: `--button-width` and `--button-height`, which control the default dimensions of the buttons. The `.button` class then applies these values along with additional styling to ensure a clean and modern appearance. Padding and font size provide comfortable spacing and readability, while `border: none` and `border-radius: 10px` give the button smooth, rounded corners. The `cursor: pointer` makes it clear the button is interactive, and `margin: 10px` ensures consistent spacing between multiple buttons. This setup creates a solid foundation that can be extended or customised for different hover animations throughout the project.

You can check them out [here!](https://sasantazayoni.github.io/Advanced-Button-Hover-Animations/)

## The Buttons

### Sweep

The Sweep button uses a linear-gradient background that creates a dynamic sweeping animation across the button surface. This gradient typically features two main colours with a sharply contrasting colour placed in between — often a lighter tone like white — to establish the illusion of a “sweep.” The gradient is expanded beyond the button’s visible area using background-size: 400%, allowing for noticeable movement when the background-position shifts from 0% to 100% on hover. This creates a left-to-right sweeping motion.

💡 Inspired by Muhammad Irshad’s videos on YouTube (Online Tutorials).

Completely different colours or even shades of a single colour with varying contrast can be used; the key is that the middle "fade" colour must contrast both surrounding colours to maintain the visual impact. The entire animation is smoothed using transition: all 0.3s ease, making the effect feel fluid and responsive. With simple tweaks to direction, colours, and intensity, the sweep effect can be customised to match any visual style.

#### How it works

- **Background Animation:** The sweeping motion is achieved by shifting the `background-position` from `0%` to `100%` on hover. The gradient itself usually consists of three colour stops — a primary colour, a contrasting central shade (such as white), and a secondary colour — all arranged linearly from left to right. When animated, the middle colour moves across the button, creating the impression of light or energy sweeping over the surface.
- **Styling & Transition:** The CSS transition (`transition: all 0.3s ease`) ensures the sweep effect feels natural and responsive. The `background-size: 400%` property is critical — it extends the gradient beyond the button's visible area, so the shift in background-position causes the gradient to animate smoothly across it. Additionally, `overflow: hidden` is applied to the button to ensure the animated gradient stays neatly contained within its bounds, preventing visual overflow.

#### Customisation

- **Colours & Direction:** The colours used in the gradient can be customised to match any design palette. The key is to maintain enough contrast between the central highlight colour and the surrounding tones to preserve the sweeping illusion. The direction of the sweep (for example, top to bottom or diagonal) can also be adjusted by changing the angle of the `linear-gradient`.
- **Speed & Smoothness:** The animation timing is controlled by the `transition` property. The sweep effect can sped up or slowed down by changing the duration or easing function. `ease-in-out` can be used for a more gradual build-up and release.
- **Gradient Complexity:** For more nuanced visual effects, more than three colour stops can be added to the gradient. This allows for subtle multi-colour sweeps or stylised lighting effects.

The Sweep button is ideal for modern, animated interfaces where motion is used to guide the user’s attention. Its customisable gradient and smooth transition make it a versatile component that can be tailored to suit a wide variety of visual themes and user interactions.

---

### Trail

The Trail button offers a sleek and highly interactive hover experience that visually responds to the user’s cursor movement. Initially styled with a black background and white text, it maintains a clean and modern look. Upon hovering, the button activates a glowing radial highlight that follows the cursor in real time, accompanied by a series of soft, fading dots that create a light trail effect. This dual-layered animation transforms a standard button into an expressive, responsive visual component.

#### How it works

- **Cursor-Tracking Highlight:** A `::before` pseudo-element creates a radial glow that follows the cursor as it moves across the button. This element uses custom CSS variables — `--x` and `--y` — to dynamically position the glow according to the cursor's coordinates, which are updated in real time via JavaScript. The radial gradient is centred at the cursor’s position and softly fades in with `opacity: 0.8`, giving a subtle spotlight effect as the user hovers.
- **Fading Trail Dots:** As the cursor moves, small circular elements — or "trail" dots — are placed at the exact position of the cursor. Each dot is styled with a blurred white background (`filter: blur(10px)`) and fades out smoothly via a CSS opacity transition. These dots create a transient path that trails behind the cursor, enhancing the feeling of motion and responsiveness.
- **Mouse Movement Handling:** JavaScript listens for `mousemove` events on the button, updating the CSS variables for the glow effect on every move. Trail dot spawning is throttled to once every 25ms to prevent excessive activity during fast cursor movement. A single `getBoundingClientRect()` call per event supplies the cursor coordinates used for both the glow position and the dot placement, avoiding redundant layout reads.
- **Object Pool:** All trail dot elements are pre-created at initialisation and held in a fixed-size pool rather than created and destroyed on every spawn. When a dot is needed, one is acquired from the pool and positioned; when its fade completes, it is released back for reuse. This eliminates all DOM insertion and removal during the animation, keeping memory usage stable and layout thrashing to a minimum.
- **CSS-Driven Fade:** Each dot’s fade-out is handled entirely by a CSS `opacity` transition rather than a JavaScript timer loop. Once a dot is positioned and its opacity reset, a single transition is applied and the browser handles all interpolation natively. A `transitionend` listener returns the dot to the pool when the fade completes, with no `setInterval` calls involved at any point.
- **Mouseleave Cleanup:** On mouseleave, all currently fading dots are snapped back to their initial state immediately and returned to the pool, ensuring no orphaned elements linger after the cursor leaves.

#### Customisation

- **Glow Colour & Intensity:** The radial glow’s appearance can be adjusted by modifying the gradient used in the `::before` pseudo-element. Its colour, size, or opacity can be changed to produce a softer or more intense highlight.
- **Trail Dot Styling:** Each trail dot’s size, colour, and blur radius are defined in the `.trail` CSS rule. The `filter: blur()` property controls the softness of the dots, while the background colour determines their appearance.
- **Fade Timing:** The fade duration is set by the `LIFETIME` constant (600ms), which is applied as the CSS transition duration on each dot. Reducing it produces snappier, shorter-lived dots; increasing it creates longer, more lingering trails. The `SPAWN_THROTTLE` constant (25ms) controls how frequently new dots appear — lower values produce a denser trail at the cost of more pool activity.
- **Pool Size:** The pool is sized automatically as `Math.ceil(LIFETIME / SPAWN_THROTTLE) + 6`. Adjusting either timing constant will scale the pool accordingly without any manual tuning.

The Trail button is ideal for interfaces where interactivity and feedback are essential. With its smooth, cursor-reactive design and glowing aesthetic, it elevates user experience through subtle motion and layered animation — perfect for attention-grabbing Call-To-Actions or expressive UI elements.

---

### Ripple

The Ripple button introduces an energetic and tactile animation that simulates the visual of a water ripple expanding outward from the point of cursor interaction. Styled with a light red background and black text, the button maintains a clean and vibrant appearance by default. Upon hover, the background deepens to a bold red while the text switches to white, enhancing contrast and providing immediate visual feedback.

💡 Inspired by Muhammad Irshad’s videos on YouTube (Online Tutorials).

The standout feature is the ripple itself — a circular burst that originates precisely where the user places their cursor, adding a highly responsive and immersive effect. The interaction is powered by the `mouseenter` event to ensure the ripple triggers cleanly once per entry without being retriggered by internal elements.

#### How it works

- **Ripple Creation:** When the user’s cursor enters the button, a `span` element is dynamically inserted at the cursor’s location using TypeScript. The script calculates the cursor’s position relative to the button using `clientX`, `clientY`, and the button’s bounding box. The inserted span serves as the ripple source — a black, semi-transparent circle that grows outward while fading in opacity.
- **Animation:** The ripple expands smoothly from a small point (0px) to a large radius (around 300px), while its opacity transitions from 0.7 to 0. This creates the illusion of a shockwave propagating across the button. Simultaneously, the background colour change from light to deep red reinforces the interactive nature of the component.
- **Event Handling:** The effect uses the `mouseenter` event so the ripple fires only once when the cursor enters the button. Because `mouseenter` does not bubble, child elements (including the ripple itself) cannot accidentally retrigger the animation, resulting in more predictable behaviour.
- **Styling & Positioning:** The ripple is absolutely positioned using `top`, `left`, and CSS `transform` properties to ensure it stays centred on the cursor point. The `border-radius: 50%` ensures the ripple is perfectly circular, while `pointer-events: none` prevents it from interfering with button interaction. The button uses `overflow: hidden` to keep the expanding ripple contained within its boundaries. Once the animation ends, the ripple element is removed from the DOM to maintain performance and cleanliness.

#### Customisation

- **Ripple Appearance:** The ripple’s colour is set by the `background` property in `.ripple-button > span` (currently `#000`). Its size is controlled by the `width` and `height` properties on `.ripple-button > span` (set to `300px`). The expansion is animated via `transform: scale()` in `@keyframes ripple`. A blur effect can be added with the `filter` property in `.ripple-button > span`, such as `filter: blur(4px)`.
- **Speed & Opacity:** The expansion timing is managed by `animation-duration` in `.ripple-button > span`. Opacity transition is defined in the `@keyframes ripple` block (opacity: `0.7` to `0`). The easing curve is specified as `linear` and can be changed to `ease-out`, `ease-in-out`, or a custom `cubic-bezier(...)` for different pacing.
- **Cleanup Timing:** The ripple element is removed from the DOM using `setTimeout(() => ripple.remove(), 600)` in TypeScript. This value should match the `animation-duration` (currently `0.6s`) to keep visual and DOM timing in sync.
- **Hover Transition:** The hover background colour is set in `.ripple-button:hover` (`background-color: #c50000`) and the text colour switches to white. The smoothness of this change is controlled by `transition: all 0.6s` in `.ripple-button`.
- **Layered Effects:** Additional effects can be layered using properties like `box-shadow`, `background-image`, `text-shadow`, or CSS `filters` in either `.ripple-button:hover` or `.ripple-button > span`. These enhancements work best when keeping `overflow: hidden` on the button to contain the ripple animation.

The Ripple button turns a basic click target into a visually expressive element, offering instant feedback and a sense of motion that enhances the overall user experience. Ideal for interactive and playful interfaces, it communicates energy, responsiveness, and user control in a simple, satisfying way.

---

### Border

The Border button introduces a modern and visually captivating rotating border effect, achieved using a conic-gradient and layered CSS pseudo-elements. Initially styled with a soft yellow background and black text, the button presents a friendly and minimal appearance. On hover, the background transitions to a vibrant green, while the border comes to life with an animated ring of colour — adding movement and depth to the interaction.

💡 Inspired by Kevin Powell’s conic-gradient border animation on YouTube.

#### How it works

- **Pseudo-elements & Layering:** The animation relies on the use of the `::before` and `::after` pseudo-elements, which are absolutely positioned and placed behind the button using `z-index: -1`. These elements inherit the button’s shape via `border-radius: inherit` and use an `inset` box model to simulate a border without affecting the button’s actual content layout.
- **Conic Gradient & Animation:** The pseudo-elements are filled with a `conic-gradient` that cycles through various shades of green — including a vivid greenyellow and a deep forest green (`#084908`). This gradient is always present in the background but remains hidden by default with `opacity: 0`. On hover, the opacity transitions to 1, revealing the animated effect. The rotation is achieved by animating a custom CSS property `--gradient-angle` from `0deg` to `360deg` using a `@keyframes` rule called `rotation`. As the angle value changes, the conic-gradient appears to spin continuously, creating the illusion of a swirling border encircling the button.
- **Glow Effect:** To add visual depth, the `::after` pseudo-element includes a soft glow effect using `filter: blur(0.5rem)`. This blurred gradient trails the rotating border, adds visual depth by casting a diffuse aura around the button.
- **Performance & CSS Features:** The animation leverages the modern CSS `@property` rule, which allows custom properties like `--gradient-angle` to animate smoothly and efficiently. This ensures compatibility and performance without the need for JavaScript.

#### Customisation

- **Border Thickness:** The apparent border size can be adjusted by modifying the `inset` value in the pseudo-elements, allowing for thicker or thinner visual borders.
- **Animation Speed:** The speed of the rotation can be fine-tuned by editing the duration of the `rotation` keyframes animation — slower for a subtle effect, or faster for a more energetic vibe.
- **Gradient Colours:** The colours used in the `conic-gradient` can be changed to suit any brand or UI theme, from neon tones to warm pastels.
- **Glow Radius:** The intensity and size of the glow can be controlled by adjusting the `blur` value in the `::after` element’s filter property.

This button transforms a static UI element into a vivid, motion-enhanced component that adds flair to any interface. With smooth, layered animations and a fully customisable aesthetic, the Border button is ideal for interfaces that value sleekness, energy, and modern design.

---

### Blink

The Blink button introduces a captivating and visually dynamic hover effect that creates a blinking animation over the button. Initially, the button features a light blue background with white text, offering a clean and appealing look. Upon hovering, a white overlay gradually fades in over the button with a soft blinking effect. The button background colour transitions to a deep blue, adding a further layer of interactivity while emphasising the effect.

#### How it works

- **Hover Interaction:** The hover effect activates when the user places their cursor over the button. A white overlay is generated, which gradually fades in over the button and starts to blink in and out. This effect gives the impression that the button is pulsating or "blinking" with each hover.
- **Animation:** The blinking effect is achieved using CSS animations. The `@keyframes blink` controls the opacity of the overlay, gradually increasing and decreasing it from 0.6 to 0.0, giving the blinking illusion. The `@keyframes pulse` animation also causes the button to slightly scale in and out, creating a subtle pulsating effect. Both animations are timed to coincide with the hover interaction, adding fluidity and energy to the effect.
- **Button Background Colour:** As the blinking animation occurs, the button's background colour transitions to a darker blue (`#0011ff`), which helps highlight the button's interactivity and further emphasises the blinking effect. The background colour change provides additional visual feedback to the user.
- **Mouse Leave Behaviour:** When the cursor leaves the button, the blinking effect halts, and the overlay fades out. The button's background colour transitions back to its initial light blue shade, ensuring a smooth and seamless return to its resting state.

#### Customisation

- **Blink Speed & Opacity:** The speed and opacity of the blinking overlay can be customised by adjusting the `@keyframes blink`. The duration of the fade-in and fade-out effect can be modified to create a quicker or slower blinking effect. The opacity values at different keyframes can also be adjusted to make the blinking effect more or less pronounced.
- **Pulse Effect:** The button's pulse effect can be tailored by adjusting the `@keyframes pulse`. Changing the scale values and timing of the animation will modify how the button expands and contracts, allowing developers to control the intensity and speed of the pulse.
- **Button Background Colour:** The initial and hover background colours of the button can be modified by adjusting the `background` property in the `.blink-button` CSS rule. The hover background colour is controlled by the `:hover` pseudo-class, where the colour can be changed to suit the design of the project.

The Blink button offers an eye-catching interaction that adds an element of movement and surprise to any user interface. By adjusting the blink speed, opacity, and pulse effect, developers can customise the button to create a wide range of visual effects, making it a versatile UI component perfect for calls to action or important interactions.

---

### Radiate

The Radiate button introduces an engaging and visually dynamic hover effect that creates a sequence of expanding circles, each with decreasing opacity. Initially, the button has a light green background with black text. When the cursor enters the button, concentric circles begin to appear at the centre and expand outward, creating a radiating effect. The button background colour transitions to a darker green, enhancing the interactive feedback and further emphasising the effect.

#### How it works

- **Initialisation:** All ten circles are created once at initialisation using a `DocumentFragment` for a single batched DOM insertion. Each circle’s size (as a fraction of the button’s width) and background colour opacity are set at this point and never change. The circles remain in the DOM permanently at `opacity: 0`, eliminating any per-interaction DOM creation or removal.

- **Hover Interaction:** When the cursor enters the button (`mouseenter`), the animation starts. Before scheduling anything new, the implementation clears all existing timers and resets every circle to `opacity: 0`. A forced reflow (`void button.offsetHeight`) is then used to ensure the next fade-in reliably triggers the CSS opacity transition, even during rapid re-hover.

- **Fade-in Sequence:** Circles fade in sequentially using staggered `setTimeout` calls (`index * 30ms`). Each timeout sets the circle’s `opacity` to `1`, relying on the CSS transition (`opacity 0.6s ease`) to animate the change.

- **Fade-out Sequence:** Shortly after each circle fades in, a second staggered sequence begins (`index * 60 + 60ms`). Each circle’s opacity is stepped down by `0.1` every `30ms` via `setInterval`, starting from its initial per-circle opacity value, until it reaches `0`. This produces the characteristic stepped fade-out that gives the effect its feel.

- **Button Background Colour:** As the circles complete their fade-in, the button’s background colour shifts to a darker shade of green (`rgb(6, 224, 6)`) by adding the `active` class. This is timed with a `setTimeout` keyed to the last circle’s fade-in delay (`circles.length * 30ms`).

- **Rapid Hover Reliability:** A `runId` token is incremented each time the animation starts and when it cleans up. Every timeout and interval captures the current `runId` and exits early if it no longer matches, preventing stale callbacks from a previous hover from interfering with a new animation.

- **Mouse Leave Behaviour:** When the cursor leaves the button (`mouseleave`), `runId` is incremented to invalidate pending callbacks, all active timeouts/intervals are cleared, every circle’s opacity is immediately reset to `0`, and the button’s `active` class is removed.

#### Customisation

- **Circle Size & Opacity:** The size and opacity of each circle are defined in the `circlesData` array, where each object sets a `size` (as a fraction of the button’s width) and an `opacity` value used in the `rgba()` background colour. Edit values such as `{ size: 0.3, opacity: 0.4 }` to adjust the visual weight and reach of the effect.

- **Speed & Timing:** The fade-in stagger is controlled by `index * 30` in the fade-in `setTimeout`. The fade-out stagger and start point are controlled by `index * 60 + 60` in the second `setTimeout`, with the step rate set by the `setInterval` delay of `30ms` and a decrement of `0.1` per tick. Adjusting these values changes how fast or slow the animation feels.

- **Button Background Colour:** The initial background colour is set via `.radiate-button { background-color: #a7ffa9; }`, and the active colour is controlled by `.radiate-button.active { background-color: rgb(6, 224, 6); }`. Update both in the CSS to match a specific theme.

- **Circle Colour & Transition Style:** Each circle uses `background-color: rgba(0, 120, 0, opacity)` for its fill. The RGB values can be changed to adjust the colour hue, while the alpha is tied to the `opacity` field in `circlesData`. The fade-in behaviour is governed by `.circle { transition: opacity 0.6s ease; }`, which can be adjusted for different easing curves or durations.

Overall, this button adds a distinctive, fluid animation to any user interface, ideal for attention-grabbing calls to action. By adjusting the size, speed, and opacity of the circles, developers can tailor the effect to match their desired aesthetic, making it a versatile and engaging UI component.

---

### Pixels

The Pixels button introduces a playful and captivating pixelation animation that dynamically fills the button with vibrant pixel squares on hover. With a transparent background and a subtle grey border by default, the button maintains a clean, minimal appearance — allowing the interactive effect to take centre stage. On hover, the button surface is gradually populated by a wave of tiny coloured squares, creating a smooth filling animation reminiscent of pixel rendering or progressive data loading. When the cursor leaves, the pixels begin to dissolve, restoring the button to its original state.

#### How it works

- **Hover Animation & Grid Logic:** When the cursor enters the button area, a grid is calculated based on the button’s dimensions and a fixed square size (5px). A JavaScript function begins filling the button with pixel squares — each one placed at a random grid position and styled with a gradient teal colour (`radial-gradient(circle, rgb(175, 238, 238), rgba(64, 224, 208, 1))`). These pixels are absolutely positioned, giving the effect of individually coloured tiles emerging behind the button’s content.
- **Pixel Rendering:** Each frame of the animation adds a few more squares, using a `Set` to track which grid cells have already been filled, while each pixel element is tagged with row and column data attributes for reliable lookup and removal. This continues until the entire button is pixelated, creating a satisfying gradual fill that feels both energetic and controlled.
- **Mouse Leave Behaviour:** Once the cursor leaves the button, the animation reverses. The existing pixels are removed randomly over time, fading the button back to its empty state. This clean reversal maintains performance and prevents buildup in the DOM.
- **Styling & Overflow:** The core `.pixels-button` uses `overflow: hidden` to contain the pixel effect and prevent elements from spilling outside its bounds. The button also uses `position: relative` and appropriate `z-index` layering to ensure the animated pixels appear behind the text but within the button.

#### Customisation

- **Pixel Size:** The square size can be changed by adjusting the `squareSize` variable in the script. Larger sizes create a more blocky, retro feel; smaller sizes allow for smoother, more refined animations.
- **Colours & Gradient:** The fill colour of the squares is fully customisable. The radial gradient can be replaced with solid colours or alternative gradients to match a design palette.
- **Fill & Clear Speed:** The `setTimeout` intervals control how fast the filling and clearing animations run. Increasing the delay slows the effect for a more deliberate appearance; reducing it speeds up the transition.
- **Density Control:** The number of pixels added per cycle (currently four) can be adjusted for more or less dense filling. This provides fine control over the pacing and visual weight of the animation.

With its satisfying, low-resolution aesthetic and dynamic interaction, the Pixels button adds charm and energy to any interface. It’s ideal for applications that want to introduce motion, surprise, or even retro digital vibes — making even a simple button feel animated and alive.

---

### Converge

The Converge button introduces a dynamic and visually captivating hover effect where multiple yellow circles sweep inward across the button surface. Initially, the button has a clean black background with yellow borders and text. Upon hovering, four circular elements arc in from outside the button along quarter-circle paths, gradually increasing in opacity. This creates a sense of motion, as if the circles are sweeping in to recolour the button’s background.

#### How it works

- **Hover Interaction & Circle Movement:** When the user hovers over the button, four yellow circles rotate in along arc paths using CSS `transform: rotate()`. Each circle shares a common `transform-origin` set to the button’s centre point, so rotating from `±90deg` to `0deg` sweeps each circle inward along a quarter-circle arc. Two circles begin above the button’s visible area and two begin below, each sweeping to a distinct resting position distributed across the button. Their opacity transitions from 0 to 1 during the arc, adding to the effect’s dynamic feel.
- **Button Background Colour:** As the hover effect completes and the circles settle into position, the button’s background colour transitions to a vibrant yellow, while the text and border colours invert. This smooth transition suggests that the circles are dissolving to recolour the button’s background, providing a satisfying visual feedback for the user.
- **Mouse Leave Behaviour:** When the cursor leaves the button, the circles fade out and return to their rotated starting positions, reversing the arc. The background colour reverts to black, restoring the button to its initial state.

#### Customisation

- **Circle Size & Speed:** The size of the circles and the speed of their movement can be adjusted to achieve different effects. Larger circles or slower speeds create a more dramatic effect, while smaller circles or faster transitions create a quicker, more subtle feel.
- **Colour & Opacity:** The colour and background of the circles can be customised by changing the respective properties. This allows the button's visual appearance to be matched with a site’s colour scheme or branding.
- **Circle Transition Timing:** The timing of the transition for each circle is set to 0.3s, but this can be adjusted to control how fast or slow the circles move and change opacity. This gives full control over the animation's pacing.

The Converge button offers a visually engaging hover effect, where yellow circles appear to dissolve into the button's background, creating a captivating interactive experience. The combination of smooth transitions, fading circles, and background colour change makes this button a striking addition to any interface, perfect for drawing attention and providing intuitive feedback to users.

---

### Interlace

The Interlace button features a sophisticated hover effect where multiple diagonal lines appear to interlace over the button's surface, creating an engaging and dynamic visual. The button, which has a subtle light green background and dark text by default, showcases a series of animated lines that cross each other at varying angles upon hover. This effect mimics the motion of threads weaving together, creating a visually intricate and captivating interaction.

#### How it works

- **Hover Interaction & Line Animation:** When the user hovers over the button, four sets of lines (styled as "line" elements) appear and start to move diagonally across the button's surface. These lines are initially barely visible (with very low opacity) and are positioned at the edges of the button. As the hover effect takes place, the lines gradually become more opaque, and their positions shift as they rotate, creating the illusion of lines interlacing and weaving together. The lines move at different angles, with lines rotating at 45 degrees clockwise and counter-clockwise.
- **Line Paths & Rotation:** The lines are positioned absolutely relative to the button, and their movement is controlled by CSS transitions. There are four distinct sets of lines: one set starting from the bottom-left, another from the bottom-right, one from the top-left, and the last from the top-right. Each set of lines is animated to rotate towards the center of the button, overlapping in a criss-cross pattern, mimicking the motion of an interlacing design.
- **Button Background Colour:** The button's background remains static in its default state, but as the lines converge and rotate during the hover interaction, the visual complexity of the button increases. The green gradient effect of the lines adds a sense of depth and texture to the button, while the gradual increase in opacity ensures the effect is smooth and subtle.

#### Customisation

- **Line Size & Density:** The number of lines and their size can be adjusted. By modifying the `lineHeight` variable and `numberOfLines`, the density and thickness of the interlacing effect can be controlled. More lines create a denser pattern, while fewer lines result in a lighter effect.
- **Rotation Angles:** The rotation of the lines is defined by the `rotate` property in the hover effect, which can be modified to create different visual effects. The current setup rotates the lines by 45 degrees, but these angles can be adjusted to create more complex patterns or alternative directions.
- **Line Colour & Gradient:** The gradient applied to the lines (a mix of dark and light greens) can be easily customised to match the overall design of a website or application. Change the linear gradient or apply solid colours to the lines for a different look.
- **Timing & Speed:** The lines have a `transition` property that determines the speed of their opacity change and rotation. The timing and delay values can be adjusted to fine-tune how fast or slow the interlacing effect takes place. The current settings use a 0.3s transition duration, but this can be increased or decreased based on a desired pace.

The Interlace button adds an elegant, intricate hover effect to a user interface, where diagonal lines rotate and interlace, creating a sophisticated visual experience. Its smooth transitions, customisable parameters, and layered effects make it perfect for interactive designs where a polished and refined button is needed. This button is ideal for captivating users with subtle motion and sophisticated visual feedback, making it stand out as an interactive component.

---

### Fusion

The Fusion button introduces an engaging hover effect where four circles move in from the outside edges towards the button's centre. Initially, the button has a rich brown background with the word "Fusion" displayed in the middle. Upon hovering, the circles animate from the top, bottom, left, and right, converging towards the centre, creating the sensation of energy pulling together. As the circles meet in the centre, the button’s background changes to a gradient yellow, giving the impression that the circles have fused together to add energy to the button.

#### How it works

- **Hover Interaction & Circle Movement:** Upon hovering over the button, four circles, positioned at the outer edges, begin to move towards the centre. Each circle starts with zero opacity and increases as it moves inward. The top, bottom, left, and right circles converge at the centre of the button, creating a dynamic and energetic effect.
- **Circle Animation:** The circles are animated using CSS keyframes. They begin their journey from outside the button’s bounds, moving smoothly towards the centre. As they get closer, their opacity increases, which adds to the visual impact, making the circles feel like they are actively drawing energy towards the button’s core.
- **Background Colour Transition:** As the circles converge in the centre, the button’s background transitions from its initial rich brown to a vibrant gradient yellow. This colour change visually represents the fusion of the circles, symbolising the gathering of energy at the centre of the button.

#### Customisation

- **Circle Size & Speed:** The speed and size of the circles can be adjusted by modifying their `width`, `height`, and animation duration. The larger the circles, the more prominent the effect will be. The speed of their movement can be controlled by adjusting the `animation` timing and the `transition` properties, allowing the fine-tuning of the speed of the circles convergence.
- **Circle Position & Direction:** The four circles start from the top, bottom, left, and right of the button, but their initial positioning can be adjusted by tweaking the `left`, `right`, `top`, and `bottom` properties. Even more complex animations can be created by modifying the path or the amount of movement for each circle.
- **Background Styling:** The button's background gradient and its transition can be customised to fit design needs. The starting and ending colours, gradient spread, or even the gradient type can be ajusted to suit the overall theme of a project.

The Fusion button delivers a visually dynamic and engaging hover effect that makes use of four animated circles converging inward, creating an energetic fusion effect. The animation of the circles, along with the background colour transition, provides an eye-catching experience that draws attention to the button. With easy customisation options for circle size, opacity, direction, and background styling, the Fusion button can be adapted to fit a variety of styles, making it a versatile and energetic addition to any website.

---

### Weld

The Weld button introduces a dynamic hover effect where triangles appear to "weld" together as the user interacts with the button. Initially, the button has a dark grey background with a soft border, and the text "Weld" is displayed at the centre. Upon hovering, the triangles positioned at the top and bottom of the button move towards the centre and interlock like sharp teeth. As the triangles meet at the middle, the button's appearance transforms, transitioning from a semi-transparent light grey through a glowing orange/gold and back to a solid light grey, giving the sense that the triangles are being heated and welded together, solidifying the interaction. When the animation completes, the borders are removed, revealing a solid single-coloured background as if the triangles have fused together into a cohesive whole.

#### How it works

- **Hover Interaction & Triangle Movement:** On hover, two triangles positioned at the top and bottom edges of the button begin to converge towards the centre and interlock.
- **Background Colour & Border Transition:** The colour shift is driven by the `@keyframes weld` animation, which transitions the triangle `border-top-color` and `border-bottom-color` properties through three stages. This simulates the heating and cooling of the weld. Upon completion of the animation, the button's border disappears, leaving behind a unified, solid colour background.

#### Customisation

- **Triangle Position & Number:** Triangles are generated using the `arrowGroups` array. Adjust the number of triangles by modifying the inline position arrays passed to each group's `.map()` call. Triangle placement is calculated using `arrowUpPosition()` and `arrowDownPosition()` functions. These rely on `triangleBorderWidth` and spacing logic that can be modified to fine-tune layout and symmetry.
- **Triangle Speed & Transition:** The speed at which the triangles move toward the centre is controlled via CSS `transition` properties in the `.arrow-up` and `.arrow-down` classes. Adjusting the `transition: 0.3s` value modifies the movement duration. The visual “welding” colour animation is defined in the `@keyframes weld` block, with timing managed by the `animation: weld 0.6s linear 0.3s forwards` rule. Tweaking these durations allows for a faster or more gradual weld effect.
- **Colour & Styling:** Colours can be customised across multiple elements. The base button’s colour and border are defined in the `.weld-button` class, while text styling is handled in `.button-text`. Triangle colours are defined using `border-top` and `border-bottom` properties in the `.arrow-up` and `.arrow-down` styles. Intermediate and final colour transitions during the welding animation are managed within the `@keyframes weld` block. All of these can be modified to match the surrounding visual theme or create unique stylistic expressions.

The Weld button offers a striking hover effect that combines smooth animation with dynamic motion. The triangles converge at the centre, creating a "welding" effect that adds energy and interactivity to the button. With flexible customisation options for triangle positioning, colour transitions, and animation speed, this button is perfect for adding a unique touch to any web project.

---

### Stream

The Stream button offers a captivating hover effect that simulates an energetic flow of lines shooting upwards and downwards across the button. Initially, the button has a soft pink background with the word "Stream" at the centre. Upon hovering, animated lines burst from both the top and bottom of the button, moving in random directions with varying opacity, creating a dynamic and fluid effect. Simultaneously, a radial gradient of vibrant purple and pink hues gradually fades in over 0.6s, enhancing the visual impact. Each line naturally fades out and self-removes after completing its animation, leaving the background with the glowing radial gradient, giving the impression of energy flowing through the button.

#### How it works

- **Hover Interaction & Line Movement:** Upon entering the button (`mouseenter`), multiple lines are animated to move upwards and downwards, appearing at random horizontal positions across the button. These lines are dynamically created, with each line starting from either the top or bottom and moving vertically while fading out, mimicking the flow of energy or a stream. Each line self-removes from the DOM when its animation completes via the `animationend` event.
- **Line Animation:** The lines are animated using CSS keyframes. The downward-moving lines start from the top and fade out as they move downwards, while the upward-moving lines start from the bottom and fade as they rise. The random movement and fading of the lines simulate a flowing, energetic effect.
- **Radial Gradient Background Transition:** The background starts as a soft pink, and upon hovering, a vibrant radial gradient of purple and pink hues gradually fades in over 0.6s (`transition: opacity 0.6s ease`). On hover-out, the gradient fades out faster at 0.3s. This asymmetric transition enhances the flow of energy through the button, adding depth and dimension to the interaction.
- **Opacity & Random Positioning:** The lines have randomised opacity and positions, which adds a sense of dynamism to the effect. As the animation proceeds, the opacity of the lines decreases, creating the appearance of the energy dissipating. A 300ms cooldown prevents rapid re-triggering while still allowing responsive interaction.

#### Customisation

- **Line Count & Speed:** The number of lines generated is determined by how frequently the `lineInterval` creates new lines (every 4ms), and animation duration is set in the CSS keyframes `lineDown` and `lineUp` (`animation: lineUp 0.6s`). You can adjust these intervals and durations to increase or decrease the density and speed of the lines. Additionally, the animation duration for individual lines is defined in the CSS keyframes `lineDown` and `lineUp` (`animation: lineUp 0.6s`), which can be adjusted for faster or slower movement.
- **Opacity & Colour:** The opacity of each line is calculated dynamically using `Math.random() * maxOpacity`, where `maxOpacity` starts at 0.9 and gradually decreases. This starting value and its decrement rate (`opacityDecreaseRate`, `0.09`) are configurable to control the intensity and fading speed. Line colour is defined in `.line-upwards` and `.line-downwards` as `rgb(255, 0, 242)`, which can be replaced with any colour to suit project themes. The radial gradient applied on hover is defined in the `::before` pseudo-element and can also be modified for different colour schemes or effects.
- **Positioning & Direction:** Lines are created from the top and bottom of the button and move inward, using either the `"line-upwards"` or `"line-downwards"` class. Their initial horizontal (`xPosition`) and vertical (`positionValue`) positions are generated randomly. These can be fine-tuned or constrained to specific areas by adjusting the randomisation logic in `createLine()`. Directional control can be further expanded by changing the CSS `keyframes` to allow lateral or diagonal movement, if desired.

The Stream button provides an interactive and visually stimulating hover effect that creates a sense of energy flowing through the button. With its dynamic lines moving upwards and downwards, combined with a glowing radial gradient, it adds an exciting and modern touch to any web project. The customisation options ensure that it can be tailored to suit any design, making it a versatile addition to a UI.

---

### Shatter

The Shatter button delivers a dramatic hover effect that simulates shards of glass breaking away from the button’s surface. Initially, the button features a deep navy background with crisp white text and a subtle light blue border, giving it a polished appearance. Upon hovering, the illusion of a solid surface is shattered—literally—as small white fragments begin to crack and fall away like splintering glass.

The effect unfolds in three dynamic stages, where randomly chosen squares detach, spin, and cascade downwards with a subtle shimmer. Each fragment resembles a shard of broken glass, rotating gently as it falls and fades. Once the animation completes, the shattered pieces vanish entirely. The button reforms when the cursor leaves, ready to shatter anew.

#### How it works

- **Glass Grid Overlay:** At initialisation, a hidden grid of small square fragments is layered atop the button. These represent potential "glass shards" and are perfectly aligned to cover the entire surface, giving the button a unified, intact appearance until interacted with.
- **Hover Interaction & Shattering Effect:** When hovered, the button enters a staged animation sequence where fragments randomly begin to "crack" and fall. The illusion is enhanced by slight rotation and opacity shifts, giving the impression of delicate shards breaking off and drifting downwards. The fragments become increasingly sparse as the effect progresses, making it feel as though the surface is breaking apart under stress.
- **Staged Fragmentation & Reset:** The shatter occurs in multiple phases, with each stage increasing in intensity — more fragments break away with each step. Once the interaction ends (hovering off of the button for long enough), a timed reset gently restores all shards to their original positions, reconstructing the button’s glass-like facade.

#### Customisation

- **Shard Size:** The size of the glass shards (square fragments) is controlled by the `squareSize` variable, which determines the width and height of each fragment in pixels. Smaller shard sizes create a finer, more delicate shattering effect, whereas larger shards result in a more aggressive, broken-glass aesthetic. Adjusting this value will modify the grid density and fragment size across the button.
- **Stages & Timing:** The shattering process is divided into multiple stages, with the `removalStages` array specifying the percentage of the button that will break apart at each stage. The `removalDelays` array controls the timing between each stage. Modifying these arrays allows for customisation of how quickly and intensively the button "shatters". A larger number in `removalStages` results in more fragments breaking away at once, while adjusting the delays controls how quickly these stages occur after the initial hover.
- **Rotation, Opacity & Orientation:** The shards rotate during the shattering process. The rotation is applied randomly within the `removeRandomSquares()` function, using a random spin value (`randomSpin`). Adjusting the range of this spin will control how much each shard rotates as it falls. The opacity of the shards is managed with `square.style.opacity`, which starts at 0.6 and fades to 0 during the animation. This fading can be modified to create a stronger or subtler visual effect. The shards’ movement can also be varied, adjusting the distance they fall or their rotation speed for added dynamism.
- **Colour & Background:** The base colour of the button, the shard overlay, and the exposed surface can be customised to fit a project’s palette — whether it's a frosty glass break or a high-tech interface rupture.

The Shatter button adds a visceral, glass-breaking moment to a UI, capturing attention with tactile realism and visual drama. It’s perfect for calls to action or destructive-themed interactions, offering a unique blend of style, responsiveness, and interactivity. Whether used sparingly or boldly, it creates a striking first impression — like cracking open a moment of impact.

---

### Cascade

The Cascade button introduces a dynamic and immersive hover effect that simulates a ripple of light revealing the surface beneath. Initially appearing as a richly styled button with a vivid red background and soft pink text and border, it transforms into an interactive field of light as the user moves their cursor across it.

When the cursor enters the button, the surface appears to be covered with a tiled mask of small squares. These squares begin fading out from the point of contact, spreading outward in a wave-like pattern. This creates a visual effect resembling light cascading over the surface — much like a digital torch revealing details in the dark.

When the cursor leaves, the masked tiles gradually fade back in, restoring the button to its original state and preparing it for the next interaction.

#### How it works

- **Dynamic Grid Overlay:** A grid of square tiles is generated at initialisation using a `DocumentFragment` for a single efficient DOM insertion, then stored in a pre-indexed `HTMLDivElement[]` array for instant O(1) access throughout the animation. Each tile acts as a cover that hides the illuminated layer beneath. Shared tile styles (size, colour, transition) are defined in CSS; only the per-element `left` and `top` values are set inline.
- **Cursor-Driven BFS Wave:** On hover or movement, the cursor’s position is resolved to a grid cell via a single `getBoundingClientRect()` call. From that cell, a breadth-first wave propagates outward — but instead of each newly revealed cell scheduling its own individual `setTimeout`, a single shared `setInterval` processes the entire current wave frontier on each tick and builds the next. This keeps the number of active timers at one regardless of how many tiles are being revealed simultaneously.
- **Revealed State Tracking:** A flat `Uint8Array` indexed by `row × cols + col` tracks which tiles have been revealed. This gives O(1) lookup per cell with no string allocation, replacing the previous string-keyed `Set` (`"row,col"`) that allocated a new string for every revealed tile.
- **Automatic Reset:** When the cursor leaves, the single interval is cleared immediately and the frontier is discarded. All revealed tiles are restored to full opacity in a single loop over the typed array, and all revealed flags are reset for the next interaction.

#### Customisation

- **Tile Size (Grid Density):** Modify the `squareSize` variable in the script to increase or decrease the number of squares. Smaller sizes (e.g., 4–5px) yield a finer, smoother visual effect, while larger sizes create a blockier, pixelated reveal.
- **Fade & Wave Speed:** Each tile’s fade transition is controlled by `transition: opacity 0.5s ease` in the `.square` CSS rule. The speed at which the wave propagates outward is controlled by the `setInterval` delay (20ms per step) — reducing it makes the cascade spread faster; increasing it slows it to a more deliberate reveal.
- **Colour Styling:** The tile colour is set by `background-color` in the `.square` CSS rule (`rgb(165, 0, 0)` by default), while the base button style (background, border, and text colour) is managed in `.cascade-button` and its inner `<span>`. These can be easily customised for various visual themes without touching the TypeScript.

The Cascade button is ideal for interfaces that seek a balance of aesthetic intrigue and user engagement. Whether you're guiding attention or adding subtle interactivity, this effect delivers a high-impact experience with customisable depth and polish.

---

### Water

The Water button delivers a soothing and immersive hover effect that simulates the sensation of water rising and droplets falling — as though the button itself is being gently filled with liquid. Initially styled with a soft sky-blue background and black text, the button invites curiosity. When hovered over, a translucent wave of water begins to rise from the bottom, accompanied by falling droplets that mimic water trickling down a glass surface.

This fluid interaction makes the button feel alive and reactive, evoking the calm, organic quality of water in motion. Once the cursor leaves, the water gently recedes and the droplets cease, resetting the button for the next interaction.

#### How it works

- **Rising Water Fill:** A semi-transparent blue overlay, implemented using a `::after` pseudo-element, acts as the rising "water." When the user hovers, this overlay expands upward from the base of the button, creating a smooth fill effect that visually simulates the button being submerged. The height transition is purposefully slowed on hover (0.9s), giving the water time to rise, and sped up on exit (0.3s) to suggest quick drainage.
- **Droplet Animation:** A fixed pool of droplets is created once at initialisation using a `DocumentFragment` and kept in the DOM permanently. On each spawn tick, a droplet is acquired from the pool, repositioned, and set in motion — eliminating any per-interaction DOM creation. Droplets vary in size and fall speed, contributing to a natural, irregular flow. Each droplet rotates slightly and features rounded edges to reinforce the look of a water bead. Droplets are positioned relative to the button using `offsetWidth` and `offsetHeight`, keeping them contained within its bounds without any external coordinate queries. Each droplet stays fully visible for the majority of its fall, then fades out linearly over the final portion of its descent, reaching full transparency exactly as it hits the bottom. A single `transitionend` listener per droplet returns it to the pool for reuse rather than removing it from the DOM.
- **Spawn Cutoff:** Droplet spawning stops automatically once the water fill reaches approximately 75% of the button’s visible height. Rather than polling `getComputedStyle` to measure the pseudo-element height on every tick, a single `setTimeout` fires at the calculated cutoff point — accounting for the `ease` timing of the CSS fill transition — and clears the spawn interval cleanly with no ongoing style queries.

#### Customisation

- **Water Fill Colour & Speed:** The rising fill can be recoloured to match a brand or theme — from icy blue to glowing neon — by changing the `background-color` in .`water-button::after`. The transition speed of the fill effect can be adjusted using the `transition: transform` property in both `.water-button::after` (on hover) and `.water-button:not(:hover)::after` (on exit), depending on whether a serene soak or a sudden splash is to be established.
- **Droplet Frequency & Size:** The spawn interval is set by the `setInterval` delay in the `mouseenter` handler. Reducing it increases droplet density; increasing it produces a more sparse, sporadic drizzle. The droplet size range is controlled via `Math.random() * 5 + 10` — changing this affects whether droplets appear small like mist or large like heavy raindrops.
- **Spawn Cutoff:** The point at which droplets stop spawning is controlled by `STOP_DELAY`. The current value accounts for the `ease` timing of the 0.9s fill transition to target approximately 75% visual fill height. If the fill transition duration or easing is changed, `STOP_DELAY` should be recalculated accordingly.
- **Fade Timing:** Once a droplet reaches the bottom of the button, a fade-out transition begins. The fade duration is derived from `fallDuration` (currently 25%), so faster-falling droplets also fade more quickly. Increasing this multiplier produces a longer, more gradual fade; decreasing it makes droplets vanish more sharply on landing.
- **Droplet Style & Orientation:** Each droplet's visual character can be modified through CSS. Change the `background-color` in `.droplet` to affect tone, and adjust `opacity` for translucency. The `transform: rotate(45deg)` defines the droplet’s orientation — altering this can shift the feel from stylised to natural. Additionally, the droplet's `border-radius` (e.g. `border-bottom-left-radius`, `border-top-right-radius`) controls its shape and softness, allowing the movement from crisp droplets to smooth, organic rivulets.

The Water Button offers a visually calming and tactile experience that evokes the movement and tranquillity of water. With a gentle rising fill and falling droplets that dance across its surface, it brings organic motion to an interface. Ideal for nature-inspired designs, wellness brands, or anything that calls for a refreshing, immersive touch — and with robust customisation, it’s as adaptable as water itself.

---

### Static

The Static button delivers a jarring, electrified visual that evokes the look and feel of television static or analog signal interference. Styled with a bold blue background and crisp white text, it appears stable at first glance. But upon interaction, a burst of visual noise flashes across its surface — a chaotic storm of black-and-white interference that briefly disrupts its clean appearance before settling back into stillness. The effect captures a moment of glitch, making the button feel like it's caught in a fleeting transmission error. It's ideal for interfaces with retro, digital, or cyberpunk themes — or wherever a quick spark of visual disruption can enhance engagement.

#### How it works

- **Interference Overlay:** A complex combination of radial and conic gradients layered inside a `::before` pseudo-element replicates the random dot patterns of television static. These patterns shift continuously using a rapid `@keyframes` animation, simulating analog noise.
- **Triggered Flash:** On hover, the static overlay quickly fades in, reaches full opacity at 0.75, then fades out again — all within 300 milliseconds. This flash of noise acts like a brief visual glitch, giving the illusion of a corrupted signal or momentary disruption in the interface.
- **Background Flicker:** Simultaneously, the button’s background color transitions from its stable blue (`#007bff`) to a vivid purple hue (`#8000b0`), reinforcing the sense of a sudden jolt or interference.

#### Customisation

- **Static Density & Texture:** The fine-grain look of the static can be adjusted by modifying the stop distances in the `repeating-radial-gradient` and `repeating-conic-gradient`. Smaller percentages result in denser “snow,” while larger ones produce more sparse, lo-fi noise.
- **Flash Duration:** The length of the glitch can be changed by editing the `setTimeout()` in the `initializeStaticEffect` function.
- **Opacity & Intensity:** Change the value in `.static-flash::before { opacity: 0.75; }` to control how intense the static appears. Lower opacities make it subtle like a weak signal; higher values create more disruptive visual noise.
- **Animation Frequency:** Adjusting the `@keyframes static` timing and the `animation` speed enables the creation of either a frantic buzz or slow pulse.

The Static button introduces a momentary break in visual consistency — a controlled anomaly that grabs the user’s attention like an error in the matrix. Short-lived but unmistakable, it is a perfect fit for digital experiences that want to embrace retro-futurism, signal disruption, or interactive surprise.

---

### Rainbow

The Rainbow Button showcases a vibrant, spectrum-responsive hover effect that visually engages through dynamic colour shifts and responsive opacity. At rest, the button features a rainbow gradient spanning red to violet with reduced opacity, giving it a subdued, semi-transparent appearance. Upon hover, it springs to life, becoming fully opaque and reactive to cursor movement, creating a dynamic and interactive visual experience.

#### How it works

- **Cursor-Driven Gradient Shift:** As the user moves the cursor across the button, the horizontal position of the gradient background shifts in real time. This movement allows different segments of the rainbow to glide across the button, creating the sensation of navigating through a continuous colour spectrum.
- **Adaptive Text Contrast:** Depending on the cursor’s horizontal location, the text colour toggles between black (left half) and white (right half). This ensures optimal contrast and legibility over any section of the gradient, adapting intelligently to maintain readability across the full range of colours.
- **Persistent Gradient Lock:** When the cursor leaves the button, the gradient background remains locked in the position last hovered. This feature gives the button a memory of the interaction, enhancing the sense of responsiveness and visual feedback.

#### Customisation

- **Gradient Range & Responsiveness:** The background’s size and movement speed can be adjusted for subtle or bold rainbow shifts. Developers may customise the spectrum, introduce brand colours, or modify the gradient spread.
- **Visual Styling & Transitions:** While the current implementation uses full opacity, developers can introduce opacity changes or glass-like effects if desired. Additionally, the timing and easing of the background-position transition can be adjusted for a snappier or more fluid interactive feel.
- **Text & Contrast Behaviour:** The logic governing text colour contrast may be adapted for different thresholds, such as splitting the range into more zones or blending the colours instead of switching strictly between black and white.

The Rainbow button delivers a lively, user-responsive hover animation that feels both modern and engaging. The interaction is guided by subtlety and fluidity, using colour as the primary medium of feedback. Its intuitive response to cursor movement, along with its ability to retain the final colour state, creates a playful and expressive interaction ideal for vibrant, creative interfaces.

---

### Matrix

The Matrix button evokes the hypnotic, code-dripping aesthetic of cyberpunk cinema. Styled with a stark black background and bright green-yellow text, it channels the immersive visual language of encrypted systems and virtual networks. At rest, the button remains sleek and minimal — but on hover, cascading trails of katakana characters begin to fall, simulating the iconic digital rain effect seen in the Matrix films. These dynamically animated glyphs trickle down the button surface in staggered, glowing streams, giving the impression of an interface quietly decoding itself or tapping into a live data feed. The interaction is subtle yet visually arresting, conjuring the feel of a system awakening or slipping into a deeper layer of virtual space. It’s a fitting choice for experiences rooted in hacking, virtual reality, or glitchy, futuristic design.

#### How it works

- **Code Rain Generation:** When hovered, the button continuously spawns 1–3 falling trails of Japanese katakana characters (like ｱ, ﾂ, ﾅ, etc.) every 200ms, which animate downward in vertical streams. Each trail begins at a random x-position chosen from a grid of columns 5 pixels apart. Available columns are selected using a Fisher-Yates shuffle, ensuring no two simultaneous trails share the same column without relying on an unbounded retry loop. Each trail drops character by character with fading opacity to mimic the signature layered "digital rain" effect. The frequent, small spawns create an organic trickle rather than uniform bursts.
- **Cooldown Control:** To prevent overload or visual chaos during rapid hover-ins and outs, a cooldown timer limits how frequently new trails are generated. This ensures a controlled, consistent flow even with fast user interaction.
- **Character Fading & Cleanup:** Each stream fades gradually as characters fall further. Rather than creating and removing DOM elements on every interaction, all character spans are pre-allocated at initialisation into a fixed-size object pool. When a character's animation completes, it is released back into the pool — resetting its opacity and transition — and made available for the next trail. This eliminates continuous DOM churn and keeps memory usage stable.
- **Hover-Triggered Activation:** Rain begins on mouseenter, stops on mouseleave, and respects a brief delay before resuming if the user hovers again too quickly. On mouseleave, all pending timeouts are cancelled immediately and the entire pool is snapped back to its initial state, ensuring no ghost characters linger after the cursor leaves.
- **Text Elevation & Visual Clarity:** To ensure the animated characters don’t obscure or clash with the button’s label, the button text is positioned on a higher z-index and given breathing room with internal padding. Additionally, a subtle radial gradient is layered behind the label via a `::before` pseudo-element. This soft fade to black around the text improves contrast and creates the impression that the digital rain is falling in the background, while the button text remains crisp and legible in the foreground.

#### Customisation

- **Trail Limit:** Adjust the maximum number of concurrent falling trails by editing the `MAX_TRAILS` constant. A higher limit creates a denser rainfall effect, while a lower one results in a more minimal and performance-friendly animation.
- **Character Set:** Modify the `matrixChars` array to change the visual language of the effect. Use binary digits for a classic terminal look, emoji for playful interactions, or symbols from other writing systems to match a sci-fi or hacker theme.
- **Font Size:** Change the `fontSize` and `lineHeight` values to scale the characters. Smaller values produce tighter, more rapid streams, while larger ones give a bolder, more cinematic appearance.
- **Trail Length & Speed:** The number of characters in each trail (`TRAIL_LENGTH`) and the delay between them (`delayBetweenChars`, ranging from 50–350ms) determine the animation's pacing and reach. Adjust these values to create longer, slower trails or short, rapid-fire bursts. The wide speed range ensures noticeable variation between individual trails.
- **Spawn Rate:** Modify the interval between trail spawns by adjusting the delay in `setInterval(spawnTrails, 200)`. A shorter interval increases intensity and visual chaos; a longer one introduces more calm, sporadic movement. Each tick spawns 1–3 trails (controlled by the `numTrails` calculation), creating a steady, organic trickle rather than large synchronised bursts.
- **Cooldown Timing:** Set the pause duration after hover by changing the `cooldownTime`. Longer cooldowns prevent animation spam on rapid hover-exit events, while shorter ones make the effect feel more reactive and continuous.
- **Trail Spacing:** Update the horizontal positioning logic to increase or reduce the space between trails. The default 5-pixel multiplier determines the grid columns where trails fall — increase this for more breathing room, or decrease it for tighter clustering.
- **Pool Capacity:** The object pool is sized to `TRAIL_LENGTH × MAX_TRAILS` spans. If you increase either constant, the pool size scales automatically — no additional DOM management is needed.

The Matrix button captures the mystique and motion of an encrypted, ever-running digital system. It offers a stylised, interactive tribute to code itself — pulsing quietly in the background until touched, then revealing a cascading stream of characters that feel alive with encrypted purpose. Ideal for dev tools, terminal-style UIs, or any interface seeking a hint of the cybernetic unknown.

---

### Pulse

The Pulse button delivers an elegant two-stage hover effect that combines expanding sonar-like rings with a warm edge glow, creating the impression of energy radiating outward and charging the button's edges. Initially styled with a bright yellow background and black text, the button has a clean and vibrant appearance. Upon hovering, two concentric rings emerge from the button's centre and expand outward, fading to transparent just before they reach the button's edges. As the rings ripple outward, a warm orange glow begins to build along all four edges of the button, as if the energy from the rings has been absorbed into the button's perimeter. When the cursor leaves, the edge glow smoothly fades back to the original yellow, resetting the button for the next interaction.

The effect is designed to feel causal — the rings appear to trigger the glow, connecting the two stages into a single cohesive animation. Each hover creates fresh rings, so the full pulse sequence repeats naturally with every interaction.

#### How it works

- **Ring Expansion:** On `mouseenter`, two circular ring elements are dynamically created and appended to the button. Each ring starts at `scale(0)` in the centre and expands outward using a CSS keyframe animation (`pulseExpand`). The rings begin with an opacity of 0.5 and gradually fade, reaching full transparency at 85% of the animation — before the ring visually reaches the button's edge. This ensures the rings dissolve naturally rather than being abruptly clipped by `overflow: hidden`. The second ring is staggered with a 0.1s animation delay, creating a layered ripple effect.
- **Edge Glow Activation:** A `setTimeout` of 200ms triggers the glow effect while the rings are still mid-expansion, reinforcing the visual connection between the two stages. Four edge overlay elements (top, bottom, left, right) — each styled with a directional `linear-gradient` from orange to transparent — have their opacity transitioned to 1 via the addition of an `.active` class. The glow only activates if the cursor is still hovering (`isHovering` check), preventing orphaned glows from persisting after rapid hover-offs.
- **Hover State Tracking:** A boolean `isHovering` flag is set to `true` on `mouseenter` and `false` on `mouseleave`. This flag gates the glow activation, ensuring the edge glow is never triggered if the user has already moved their cursor away before the 200ms timeout fires. This prevents the glow from becoming permanently stuck in the active state.
- **Cleanup & Repeatability:** Once the last ring's animation completes (`animationend` event), all ring elements are removed from the DOM. The edge glow elements are created once at initialisation and reused on subsequent interactions by toggling the `.active` class. On `mouseleave`, the `.active` class is removed from all edge elements, causing them to smoothly fade back to transparent via the CSS `transition` property.

#### Customisation

- **Ring Count & Stagger:** The number of rings generated per hover is controlled by the loop in the TypeScript file (`for (let i = 1; i <= 2; ...)`). Additional rings can be added by increasing this value, with corresponding `.pulse-ring-N` CSS rules to define their animation delays. The delay between rings (currently 0.1s) can be adjusted for tighter or wider spacing between the ripples.
- **Ring Appearance:** The ring's initial size is set by the `width` and `height` properties (20px), and its border thickness is controlled by the `border` property (3px). The border colour (`rgb(255, 166, 0)`) defines the ring's orange hue and can be changed to match any colour scheme. The ring's starting opacity (0.5) and fade curve are defined in the `@keyframes pulseExpand` block — adjust the percentage stops and opacity values to control how quickly or gradually the rings fade.
- **Ring Scale & Fade Point:** The maximum expansion scale (currently `scale(9)` at 100%) determines how far the rings grow. The fade-to-zero point (currently at 85%, `scale(7)`) controls where the rings become fully transparent. These values should be tuned relative to the button's width to ensure the rings fade just before reaching the edges. Increasing the scale extends the rings further, while adjusting the 85% keyframe controls the visual cutoff point.
- **Glow Timing:** The delay before the glow activates is set by the `setTimeout` value (200ms). A shorter delay makes the glow appear while the rings are still small, creating a more immediate response. A longer delay makes the glow feel like a consequence of the rings reaching the edges. This value should be balanced with the ring animation duration (0.6s) to maintain the causal relationship.
- **Glow Colour & Intensity:** The edge glow colour is defined in the `linear-gradient` backgrounds of the `.pulse-top`, `.pulse-bottom`, `.pulse-left`, and `.pulse-right` classes. The gradient transitions from `rgb(255, 166, 0)` (orange) to `transparent`, and can be adjusted to any colour. The glow's maximum opacity is set by `.pulse-edge.active { opacity: 1; }` — reduce this for a subtler effect.
- **Glow Transition Speed:** The fade-in and fade-out speed of the glow is controlled by the `transition: opacity 0.6s ease` property on `.pulse-edge`. A shorter duration creates a snappier glow response, while a longer one produces a more gradual, ambient build-up. The same transition applies to both activation and deactivation, ensuring symmetry.
- **Animation Duration:** The overall speed of the ring expansion is set by the animation duration in `.pulse-ring.active` (0.6s). Increasing this value slows the entire effect, giving a more relaxed, ambient feel. Decreasing it makes the pulse feel sharper and more energetic. The `ease-out` timing function causes the rings to start fast and decelerate, which can be swapped for `linear`, `ease-in`, or a custom `cubic-bezier()` for different pacing.

The Pulse button combines motion and colour in a way that feels organic and intentional — the expanding rings create a visual cause, and the edge glow provides a satisfying effect. This two-stage interaction transforms a simple hover into a moment of energy and warmth, making it ideal for interfaces that value subtle animation, layered feedback, and a polished sense of interactivity.

---

### Vortex

The Vortex button conjures the visual pull of a spiralling tunnel collapsing inward. Styled with a deep navy background and crisp white text, the button sits quietly at rest — but on hover, a cascade of nested blue squares materialises from the outside in, each one rotated a fixed number of degrees further than the last. The cumulative twist across all layers produces the unmistakable impression of a vortex: a geometric whirlpool tightening toward an invisible centre. The innermost squares glow brightest, drawing the eye deeper into the spiral, while the staggered reveal gives the structure a sense of assembling itself in real time. The effect carries the aesthetic of signal interference, radar pings, and collapsing coordinate systems — precise yet slightly unsettling, elegant yet mechanical. It suits interfaces that want to project depth, technical authority, or a sense of something opening up beneath the surface.

#### How it works

- **Geometric Structure:** At initialisation, TypeScript calculates the number of nested squares needed to fill the depth of the vortex — from a 140px outermost square down to a ~4px centre — using an exponential decay formula: `Math.ceil(Math.log(4 / 140) / Math.log(0.96))`. This produces approximately 88 squares, each assigned a zero-based index (`--i`) as a CSS custom property. The total count minus one is stored as `--n`, used later to normalise the opacity gradient. All squares are created once at initialisation using a `DocumentFragment` for a single, efficient DOM insertion, and are never recreated.
- **Size & Rotation via CSS:** Every square's dimensions are computed entirely in CSS using `calc()` and the native `pow()` function: `width: calc(140px * pow(0.96, var(--i)))`. Each successive square is 4% smaller than the one before it, producing smooth exponential shrinkage from the outer edge to the centre. Alongside this, each square is rotated an additional 10 degrees relative to the previous one: `rotate(calc(var(--i) * 10deg))`. The accumulating rotation across all 88 layers is what creates the spiral illusion. `box-sizing: border-box` ensures the 2px border counts inward rather than outward, so the smallest squares become fully solid rather than invisible outlines.
- **Opacity Gradient:** On hover, each square fades in to an opacity calculated as `0.3 + (var(--i) / var(--n)) * 0.4`, interpolating linearly from 0.3 at the outermost square to 0.7 at the innermost. This makes the centre of the vortex visibly brighter, reinforcing the sense of depth and drawing the eye toward the point of convergence.
- **Staggered Reveal:** Each square's `transition-delay` is set to `var(--i) * 7ms`, meaning the outermost square begins fading in immediately while the innermost square waits approximately 616ms. The effect sweeps inward — the structure appears to tighten and converge rather than materialising all at once. On mouseleave, the delays are not reversed, so all squares fade out simultaneously via the base `transition: opacity 0.2s ease` rule.
- **Text Elevation:** The button label is wrapped in a `<span>` with `position: relative` and a higher `z-index`, ensuring it always sits above the square layers and remains fully legible regardless of how dense the vortex becomes near the centre.
- **Pure CSS Hover:** No JavaScript event listeners are attached after initialisation. The entire hover animation — fade-in, stagger, opacity gradient — is driven by the CSS `:hover` selector and `transition` properties. This keeps runtime overhead minimal; the browser handles all animation scheduling natively.

#### Customisation

- **Decay Rate:** The `0.96` decay factor in both the square count formula and the CSS `pow()` call controls how quickly the squares shrink with depth. A value closer to `1.0` (e.g. `0.98`) produces more squares with gentler size differences, creating a denser, more tightly wound spiral. A lower value (e.g. `0.92`) reduces the square count and makes the size drop-off more dramatic, giving a looser, bolder vortex.
- **Rotation Per Layer:** The `10deg` multiplier in `rotate(calc(var(--i) * 10deg))` determines how much each successive square is twisted. Increasing it (e.g. `15deg`) tightens the spiral more aggressively; decreasing it (e.g. `5deg`) gives a shallower, more layered-stack appearance with less apparent rotation.
- **Opacity Range:** The opacity formula `0.3 + (var(--i) / var(--n)) * 0.4` sets a floor of 0.3 and a ceiling of 0.7. Raising the floor makes the outer squares more visible; increasing the range (e.g. `0.1 + ... * 0.7`) creates a stronger contrast between the dim outer edge and the bright centre.
- **Stagger Speed:** The `7ms` per-square delay controls how long the inward sweep takes to complete (~616ms total). Reducing it produces a faster, more sudden materialisation. Increasing it makes the vortex assemble more slowly and deliberately, which can feel more cinematic.
- **Border Style & Colour:** The `border: 2px solid rgba(30, 160, 255, 1)` gives each square its bright blue outline. The colour, width, and alpha can all be changed — a thinner border with lower alpha creates a more ghost-like structure, while a thicker, fully opaque border makes the geometry feel heavier and more mechanical.
- **Outermost Size:** The `140px` starting width in the CSS `calc()` calls controls the maximum size of the vortex. This should generally be kept at or slightly above the button's own dimensions to ensure the squares span the full surface. Increasing it makes the outer layers overflow the button (which `overflow: hidden` clips), while decreasing it shrinks the vortex to fit within a smaller region.
- **Fade Duration:** The `transition: opacity 0.2s ease` on `.vortex-square` controls how quickly each square fades in or out as it follows its stagger delay. Increasing the duration softens the materialisation; decreasing it makes the squares snap into place more abruptly.

The Vortex button translates pure geometry into a sense of motion and depth, using nothing more than nested squares and accumulated rotation. Its entirely CSS-driven hover state means it runs with no JavaScript overhead after setup, making it as performant as it is visually striking. It is well-suited to interfaces that carry a technical, architectural, or otherworldly character — anywhere a sense of structure folding inward would feel at home.

---
