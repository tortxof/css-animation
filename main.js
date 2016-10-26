var slideshow = remark.create({
  ratio: '3:2',
  sourceUrl: 'slides.md',
  highlightStyle: 'tomorrow-night-eighties'
});

slideshow.on('afterShowSlide', (slide) => {
  if (slide.properties.name === 'transition-example-2') {
    document.getElementById('transition-example-2-button')
    .addEventListener('click', (event) => {
      setTimeout(() => {
        event.target.classList.add('success')
        setTimeout(() => {
          event.target.classList.remove('success')
        }, 5000)
      }, 2000)
    })
  }
})
