// make variable called id equal to null 
// make pos variable equal to 0 
// make a variable for the element whose id is animate
function myMove (){
  let id = null; 
let pos = 0;
let element = document.getElementById("animate"); 
 clearInterval(id);
 id = setInterval(frame, 1);
 function frame () {
   if (pos == 350) {
     clearInterval(id);
   } else{
     pos++;
     element.style.top = pos + "px";
     element.style.left = pos + "px";
   }
 }
}
