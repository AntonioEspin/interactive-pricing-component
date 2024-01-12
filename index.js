const slider = document.querySelector('.slider');
const numberViews = document.querySelector('.pageviews span');

slider.addEventListener('input', getValueInput)
slider.addEventListener('mousemove', getValueMouse)

function getValueInput () {
  let value = this.value

  // Cambiar dinamicamente color del slider
  let color = `linear-gradient(90deg, var(--Strong-Cyan) ${value}%, var(--Light-Grayish-Blue) ${value}%)`
  slider.style.background = color

  // cambiar valor del texto
  numberViews.textContent = value
}

function getValueMouse () {
  console.log('MouseMove',slider.value)
}