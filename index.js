const slider = document.querySelector('.slider');
const numberViews = document.querySelector('.pageviews span');
const amount = document.querySelector('.amount strong');

const circle = document.querySelector('.toggle-button div');
const button = document.querySelector('.toggle-button');
button.addEventListener('click', toggleButton);

slider.addEventListener('input', updatePrice);

function updatePrice() {
  const value = slider.value;

  // Cambiar dinámicamente el color del slider
  const color = `linear-gradient(90deg, var(--Strong-Cyan) ${value}%, var(--Light-Grayish-Blue) ${value}%)`;
  slider.style.background = color;

  // Cambiar el valor del texto y monto
  const pricing = calculatePricing(value);
  numberViews.textContent = pricing.pageviews;
  amount.textContent = `$${pricing.amount}.00`;
}

function calculatePricing (value) {
  let pageviews, amount;

  switch (value) {
    case '0':
      pageviews = '10k';
      amount = 8;
      break;
    case '25':
      pageviews = '50k';
      amount = 12;
      break;
    case '75':
      pageviews = '500k';
      amount = 24;
      break;
    case '100':
      pageviews = '1M';
      amount = 36;
      break;
    default:
      pageviews = '100K';
      amount = 16;
      break;
  }

  // Aplicar descuento si está activo
  if (circle.classList.contains('active-toggle')) {
    const discount = amount * 0.25;
    amount -= discount;
  }

  return { pageviews, amount };
};

function toggleButton () {
  // Cambiar estilos
  button.classList.toggle('background-toggle');
  circle.classList.toggle('active-toggle');

  // cambiar el valor dependiendo el descuento
  updatePrice()
};