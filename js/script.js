'use strict';
 
const btn = document.querySelector('#btn');

function myAnimation() {
  const car = document.querySelector('.car');
  let pos = 0;


  const timeId = setInterval(frame, 10);
  function frame() {
    if (pos === 700){
      clearInterval(timeId);
    }else{
      console.log(pos);
      pos++;
      car.style.left = pos + 'px';
    }
  }
}

btn.addEventListener('click', myAnimation);