console.log ("connected");

// mouse enter color animation
// Objective: when mouse enters the headingGroup, h2's become #b1d8b9, spans become #d7ccff
// Nothing happens with this function at all.
// I also tried causing this flip to change using CSS, 
// but the spans would only change color when specifically hovered over, 
// as opposed to when the whole line was hovered over.

let headingGroup = document.getElementById("headingGroup")
let h2 = document.querySelectorAll("h2")

headingGroup.addEventListener("mouseenter" , function (event){
    h2.event.style.color = "#green";
    span.event.style.color = "#d7ccff";
})
