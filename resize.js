const heightOutput = document.querySelector('#height');
const widthOutput = document.querySelector('#width');

function resize() {
  heightOutput.textContent = window.innerHeight;
  widthOutput.textContent = window.innerWidth;
  
  
  var tall = window.innerHeight;
  var wide = window.innerWidth;
  

  
  document.getElementByClassName("tabcontent").innerHTML = "Paragraph changed!" + tall;
  
  
  
  
}

window.onresize = resize;

