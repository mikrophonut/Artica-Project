// Expand-info

var item = document.getElementById("zh_item_1");

item.addEventListener("click", function () {
    var expand = document.getElementById("zh_exp");
    expand.classList.toggle("zh_active");
});

// Active item

var item = document.getElementById("zh_item_1");

item.addEventListener("click", function () {
    this.classList.add("zh_active_item");
});



// Expand x-button

var xclose = document.getElementById("zh_x");

xclose.addEventListener("click", function () {
    var expand = document.getElementById("zh_exp");
  	expand.classList.remove("zh_active");	
  	var item = document.getElementById("zh_item_1");
  	item.classList.remove("zh_active_item");
});


// Expand-info smaller device

var holder = document.getElementsByClassName("zh_holder");
var i;

for (i = 0; i < holder.length; i++) {
    holder[i].addEventListener("click", function () {
        this.classList.toggle("zh_active_small");
    });
}

   