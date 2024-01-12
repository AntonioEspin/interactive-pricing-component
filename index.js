const slider = document.querySelector('.slider')

slider.addEventListener('input', getValueInput)
slider.addEventListener('mousemove', getValueMouse)

function getValueInput () {
  console.log('input',this.value)
  let value = this.value
  let color = `linear-gradient(90deg, var(--Strong-Cyan) ${value}%, var(--Light-Grayish-Blue) ${value}%)`
  slider.style.background = color
}
function getValueMouse () {
  console.log('MouseMove',slider.value)
}