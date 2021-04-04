// Expand-info smaller device

var holder = document.getElementsByClassName("zh_holder");
var i;

for (i = 0; i < holder.length; i++) {
  holder[i].addEventListener("click", function() {
    this.classList.toggle("zh_active_small");
  });
}


// Expand x-button

var xclose = document.getElementById("zh_x");

  xclose.addEventListener("click", function() {
    
	var content = document.getElementById("zh_exp");
      content.style.display = "none";
  });

