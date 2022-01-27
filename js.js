// Get the element with id="defaultOpen" and click on it and append active class
document.getElementById("defaultOpen").click();


function openSchool(evt, schoolName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(schoolName).style.display = "block";
  evt.currentTarget.className += " active";
}