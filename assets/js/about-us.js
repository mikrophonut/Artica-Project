// Selectors
var aboutUsPicJd = "jd-pic";
var aboutUsPreview = "hidden-inf";
var aboutUsPreviewCloseBtn ="close-btn";

//Elements
var picJdElement = document.getElementsByClassName(aboutUsPicJd);
var previewElement = document.getElementById(aboutUsPreview);
var previewCloseBtnElement = document.getElementById(aboutUsPreviewCloseBtn);


//Function

for (var i = 0; i < picJdElement.length; i++) {
    picJdElement[i].addEventListener("click", function () {
        previewElement.classList.toggle("call-hidden");
    });
}

previewCloseBtnElement.addEventListener("click", function () {
  	previewElement.classList.remove("call-hidden");	
 });








