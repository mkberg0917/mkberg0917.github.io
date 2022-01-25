const heightOutput = document.querySelector('#height');
const widthOutput = document.querySelector('#width');

function resize() {
  heightOutput.textContent = window.innerHeight;
  widthOutput.textContent = window.innerWidth;
  
  
  var tall = window.innerHeight;
  var wide = window.innerWidth;
  

  
  document.getElementById("Corporation").innerHTML = "Paragraph changed!";
  
  
  
  
}

window.onresize = resize;

