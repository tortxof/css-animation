
class: center, middle

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

# Transition Example

```css
.transition-example {
  background-color: #66d;
  transition: background-color 500ms;
}

.transition-example:hover {
  background-color: #5e5;
}
```

<div class="transition-example-container">
<a href="#" class="transition-example">Transition Example</a>
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
