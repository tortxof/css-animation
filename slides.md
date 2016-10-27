
---

class: center, middle
name: title

# CSS Animation

---

# What should we animate?

- `transform: translate()`
- `transform: rotate()`
- `transform: scale()`
- `opacity:`

---

# Different ways to animate.

The **transition** property is used to transition a css property from one value
to another. For example, animating a hover effect.

The **animation** property is used to animate css properties based on keyframes.
Used for looping animations, or automatic animations.

---

# Transition Property

```css
nav a {
  transition: background-color 1s
}
```

```css
nav a {
  transition: background-color 1s 0.5s
}
```

```css
nav a {
  transition: background-color 1s ease-in-out 0.5s
}
```

```css
nav a {
  transition: all 1s ease-in-out 0.5s
}
```

---

name: transition-example-0

# Transition Example

```css
.button {
  background-color: hsl(240, 40%, 60%);
}

.button:hover {
  background-color: hsl(120, 100%, 70%);
}
```

<div class="button-container">
  <button class="button">Transition Example</button>
</div>

---

name: transition-example-1

# Transition Example

```css
.button {
  background-color: hsl(240, 40%, 60%);
  transition: background-color 500ms;
}

.button:hover {
  background-color: hsl(120, 100%, 70%);
}
```

<div class="button-container">
  <button class="button">Transition Example</button>
</div>

---

name: transition-example-2

# Transition Example

```css
.button {
  background-color: hsl(240, 40%, 60%);
  color: white;
  transition: all 1s;
}

.button.success {
  background-color: hsl(120, 100%, 70%);
  color: black;
}
```

<div class="button-container">
  <button id="transition-example-2-button" class="button">Submit</button>
</div>

---

# Animation Property

```css
.pulse {
  animation: 2s pulse
}
```

```css
.spinner {
  animation: 2s linear 0s infinite spin;
}
```

```css
.loader {
  animation: 10s ease-in-out 2s forwards slide;
}
```

---

# @keyframes

Used to build a time line of css properties over time.

```css
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
```

---

name: animation-example-1

# Animation Example

```css
.spinner {
  animation: 600ms linear 0s infinite spin;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
```

<div class="spinner-container">
  <div class="spinner"></div>
</div>

---

name: animation-example-2

# Animation Example

```css
.pulse {
  animation: 3s linear 0s infinite pulse;
}

@keyframes pulse {
  0% {transform: scale(0.5); opacity: 0;}
  50% {opacity: 1;}
  100% {transform: scale(1.5); opacity: 0;}
}
```

<div class="pulse-container">
  <div class="pulse"></div>
</div>

---

name: timing-examples

# Timimg Functions

<div class="container">
  <div class="linear">linear</div>
  <div class="ease">ease</div>
  <div class="ease-in">ease-in</div>
  <div class="ease-out">ease-out</div>
  <div class="ease-in-out">ease-in-out</div>
</div>

---

# Perspective

When an element has the **perspective** property set, it's children will be
rendered from a 3D perspective view.

The perspective property sets the distance from the screen to the user.

When set to a value other than `0` or `none`, it creates a 3D space for child
elements.

---

name: perspective-axis-translate

# Translate with Perspective

<div class="translate-container">
  <div class="x">translateX</div>
  <div class="y">translateY</div>
  <div class="z">translateZ</div>
</div>

---

name: perspective-axis-rotate

# Rotate with Perspective

<div class="rotate-container">
  <div class="x">rotateX</div>
  <div class="y">rotateY</div>
  <div class="z">rotateZ</div>
</div>

---

name: perspective-example-1

# Perspective Example

```css
.container {perspective: 100vh; perspective-origin: center -30%;}
.text {transform-origin: center top; animation: 30s linear 0s infinite crawl;}
@keyframes crawl {
  0% {transform: translate3d(0, 10em, 0) rotateX(90deg)}
  100% {transform: translate3d(0, 10em, -160em) rotateX(90deg)}
}
```

<div class="container">
  <div class="text">
    <p>

      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consequat ex
      tellus. In consectetur, turpis nec luctus fringilla, lorem ligula
      venenatis justo, ut elementum tortor leo eu massa. In hac habitasse platea
      dictumst. Mauris pulvinar tortor placerat odio faucibus, ut pharetra lacus
      pharetra. Sed lobortis, nisl eget convallis maximus, est nisl commodo
      orci, vel placerat erat nisi et ipsum. Cras dictum fermentum libero, eu
      accumsan lorem efficitur nec. In ornare volutpat erat, vitae ullamcorper
      leo eleifend sit amet. Vestibulum bibendum et risus sed eleifend. Donec
      hendrerit pretium nibh, eget ultricies eros pellentesque in. Pellentesque
      pretium ultrices vulputate. Nulla semper orci dui, vel mattis arcu
      facilisis quis.

    </p>
    <p>

      Curabitur nec dignissim dolor. Morbi imperdiet sed mi vel molestie. Ut
      congue sodales malesuada. Nulla vel lacus lectus. In hac habitasse platea
      dictumst. Donec sollicitudin malesuada dolor, a iaculis lorem pretium id.
      Nulla ut justo nisl. Nam in blandit tortor, eget suscipit augue.
      Pellentesque condimentum laoreet elementum. Morbi commodo, ligula eget
      congue cursus, ante augue cursus mauris, et fringilla nisl nisi eget orci.
      Sed vulputate, odio non tristique auctor, lectus lectus sollicitudin odio,
      non sodales est eros ut neque. Cum sociis natoque penatibus et magnis dis
      parturient montes, nascetur ridiculus mus. Mauris eu ultricies dui, eget
      tempor magna. Maecenas nisi diam, fermentum vitae faucibus at, ornare in
      diam.

    </p>
    <p>

      Aenean vel augue ac velit cursus fermentum. Aliquam pretium tellus et
      facilisis elementum. Pellentesque sodales ut enim at volutpat. Duis
      imperdiet mi ac auctor placerat. Curabitur eleifend a odio ut tempor.
      Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc
      fermentum elit lacus, et efficitur felis gravida quis. Nunc vitae orci at
      massa bibendum posuere. Aliquam sagittis nulla in nunc tempus, sit amet
      sagittis mi porttitor. In eget nisl vel magna porttitor convallis. Cras
      efficitur massa quis erat aliquam, sit amet blandit velit malesuada.
      Suspendisse imperdiet elit ac mauris vehicula, sit amet condimentum arcu
      faucibus. Donec vestibulum fermentum ligula euismod eleifend. Nam quis
      porttitor magna. Vestibulum massa sapien, luctus non suscipit ut, dictum
      ac diam.

    </p>
    <p>

      In hac habitasse platea dictumst. Aliquam libero magna, fringilla non
      sapien sed, venenatis mollis velit. Morbi pharetra pharetra lacinia.
      Curabitur sit amet lacus cursus, viverra mi ac, accumsan dui. Pellentesque
      purus diam, malesuada quis semper eu, mattis eget lacus. Nulla facilisi.
      Curabitur ultrices bibendum vulputate. Donec lacus ante, faucibus at magna
      venenatis, laoreet dignissim arcu. Fusce eget dolor imperdiet, suscipit
      tortor quis, sagittis leo. Aliquam erat volutpat. Integer suscipit, libero
      eu auctor interdum, est justo mollis risus, id sollicitudin nunc tellus
      sed purus. Quisque vestibulum tincidunt velit vel hendrerit. Donec maximus
      odio ut gravida sollicitudin. Nam posuere et urna nec mattis.

    </p>
    <p>

      Morbi non tincidunt leo. Donec feugiat semper elementum. Integer aliquam
      erat purus, scelerisque aliquam felis venenatis ut. Cras quis urna lectus.
      Nulla neque nisl, consectetur eget nibh at, accumsan pellentesque tortor.
      Cras sed placerat elit. Vivamus rutrum quis justo non maximus. Vivamus ut
      convallis neque. Quisque eu nunc quis arcu aliquam sodales.

    </p>
  </div>
  <div class="overlay"></div>
</div>

---

name: perspective-example-2

# Perspective Example

```css
.container {position: relative; perspective: 100vh;}
.popup {
  opacity: 0;
  transform-origin: 12em 0;
  animation: 500ms ease-out 2s forwards popup;
}
@keyframes popup {
  0% {transform: rotateY(-90deg); opacity: 0;}
  100% {transform: rotateY(0deg); opacity: 1;}
}
```

<div class="container">
  <div class="popup">Hello</div>
  <div class="text">
    <p>

    Aenean vel augue ac velit cursus fermentum. Aliquam pretium tellus et
    facilisis elementum. Pellentesque sodales ut enim at volutpat. Duis
    imperdiet mi ac auctor placerat. Curabitur eleifend a odio ut tempor.
    Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc fermentum
    elit lacus, et efficitur felis gravida quis. Nunc vitae orci at massa
    bibendum posuere. Aliquam sagittis nulla in nunc tempus, sit amet sagittis
    mi porttitor. In eget nisl vel magna porttitor convallis. Cras efficitur
    massa quis erat aliquam, sit amet blandit velit malesuada. Suspendisse
    imperdiet elit ac mauris vehicula, sit amet condimentum arcu faucibus. Donec
    vestibulum fermentum ligula euismod eleifend.

    </p>
  </div>
</div>

---

I'm on GitHub: https://github.com/tortxof

These slides are on GitHub: <https://github.com/tortxof/css-animation>

## Resources

Using CSS transitions  
<https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions>

Using CSS animations  
<https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations>

Can I use...  
<http://caniuse.com/>

DevTips YouTube channel  
<https://www.youtube.com/user/DevTipsForDesigners>
