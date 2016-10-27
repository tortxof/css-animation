
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
  background-color: #66d;
}

.button:hover {
  background-color: #5e5;
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
  background-color: #66d;
  transition: background-color 500ms;
}

.button:hover {
  background-color: #5e5;
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

name: animation-example

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

# Perspective
