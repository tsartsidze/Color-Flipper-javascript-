'use strict';

const colors = [
  'green',
  'red',
  'rgba(133, 122, 200)',
  '#f15025',
  'yellow',
  'pink',
  'orange',
  'blue',
  'hsl(210, 22%, 49%)',
];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function () {
  const randomNumber = getRandomNumber();

  document.body.style.backgroundColor = colors[randomNumber];
  color.innerHTML = colors[randomNumber];
});

const getRandomNumber = function () {
  return Math.floor(Math.random() * colors.length);
};
