function resize() {
  
  var tall = window.innerHeight;
  var wide = window.innerWidth;
  var frameh='';
  var framew='';
  
  if (tall > 800) {
      frameh = '540';
      } else if (tall > 600) {
      frameh = '480';
      } else if (tall > 400) {
      frameh = '320';
      } else {
      frameh = '280';
      }
  
    if (wide > 800) {
      framew = '540';
      } else if (wide > 600) {
      framew = '480';
      } else if (wide > 400) {
      framew = '320';
      } else {
      framew = '280';
      }

  
  document.getElementById("Corporation").innerHTML = '<div target="_top" class="fb-page" data-href="https://www.facebook.com/tiptonschools/" data-tabs="timeline" data-width="' + framew + '" data-height="' + frameh + '" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="false" data-lazy="true"><blockquote cite="https://www.facebook.com/TiptonElement/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/TiptonElement/">Tipton Elementary School</a></blockquote></div>';
  document.getElementById("Elementary").innerHTML = '<div target="_top" class="fb-page" data-href="https://www.facebook.com/tiptonschools/" data-tabs="timeline" data-width="'+framew+'" data-height="'+frameh+'" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="false" data-lazy="true"><blockquote cite="https://www.facebook.com/TiptonElement/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/TiptonElement/">Tipton Elementary School</a></blockquote></div>';
  document.getElementById("Middle").innerHTML = '<div target="_top" class="fb-page" data-href="https://www.facebook.com/tiptonschools/" data-tabs="timeline" data-width="'+framew+'" data-height="'+frameh+'" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="false" data-lazy="true"><blockquote cite="https://www.facebook.com/TiptonElement/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/TiptonElement/">Tipton Elementary School</a></blockquote></div>';
  document.getElementById("High").innerHTML = '<div target="_top" class="fb-page" data-href="https://www.facebook.com/tiptonschools/" data-tabs="timeline" data-width="'+framew+'" data-height="'+frameh+'" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="false" data-lazy="true"><blockquote cite="https://www.facebook.com/TiptonElement/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/TiptonElement/">Tipton Elementary School</a></blockquote></div>';
  
}

window.onload = resize;

