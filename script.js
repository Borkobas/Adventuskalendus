var btn = document.getElementById('knopf');
btn.addEventListener("click", function(){
  document.getElementById('feld').classList.toggle("offen-feld");
});

function toggleCLass() {
   var myfeldClasses = document.getElementsByClassName('feld').classList;
   if (myfeldClasses.contains("feld-scale")) {
       myfeldClasses.remove("feld-scale");
   } else {
       myfeldClasses.add("feld-scale");
   }
}
