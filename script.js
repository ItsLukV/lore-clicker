document.getElementById("btn").onclick = function() {click()};

var clicks = 0;
function click() {
    console.log("test")
    clicks = clicks +  1;
   document.getElementById("text").innerHTML = clicks
   if (clicks === 10) {
       alert("You have clicked 10 times")
   } else if (clicks === 15) {
       alert("You have clicked 15 times")
   }
}