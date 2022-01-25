const heightOutput = document.querySelector('#height');
const widthOutput = document.querySelector('#width');

function resize() {
  heightOutput.textContent = window.innerHeight;
  widthOutput.textContent = window.innerWidth;
}

window.addEventListener('resize', function(event){
    var newWidth = window.innerWidth;
    var newHeight = window.innerHeight; 
});

