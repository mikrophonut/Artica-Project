// Expand-info

var at_emp = document.getElementById("emp1");

at_emp.addEventListener("click", function () {
    var shell = document.getElementById("problem");
    shell.classList.toggle("at_active");
});




// Expand x-button

var x_end = document.getElementById("x_js");

x_end.addEventListener("click", function () {
    var shell = document.getElementById("problem");
  	shell.classList.remove("at_active");	
  	
});


