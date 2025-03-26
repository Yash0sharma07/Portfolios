<script src="https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js"></script>
    <script>


var typed = new Typed("#element", {
        strings: [
          "Web Developer .",
          "Frontend Developer .",
          "UI UX Designer.",
          "Web Designer.",
        ],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true,
      });


var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
  for(tablink of tablinks){
    tablink.classList.remove("active-link");
  }
  for(tabcontent of tabcontents){
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

var sidemeu = document.getElementById("sidemenu")
function openmenu(){
  sidemeu.style.right="0"
}
function closemenu(){
  sidemeu.style.right="-200px"
}







