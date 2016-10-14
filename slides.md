
class: center, middle

# CSS Animation

---

# What should we animate?

- transform: translate()
- transform: rotate()
- transform: scale()
- opacity:

---

# Different ways to animate.

The transition property is used to transition a css property from one value to
another. For example, animating a hover effect.

The animation property is used to animate css properties based on keyframes.
Used for looping animations, or automatic animations.

---

# Transition Property

- property | duration
- property | duration | delay
- property | duration | timing function | delay

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

# Animation Property

- duration | name
- duration | timing function | delay | name
- duration | timing function | delay | iteration count | direction | fill mode | play state | name

```css
.spinner {
  animation: 2s linear 0s infinite spin;
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
