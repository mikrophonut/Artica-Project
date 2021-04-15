// Selectors
var aboutUsPicJd = "jd-pic";
var aboutUsPreview = "hidden-inf";
var aboutUsPreviewCloseBtn ="close-btn";

//Elements
var picJdElement = document.getElementsByClassName(aboutUsPicJd);
var previewElement = document.getElementById(aboutUsPreview);
var previewCloseBtnElement = document.getElementById(aboutUsPreviewCloseBtn);

//Function
function callInfoSection() {
    previewElement.classList.toggle("call-hidden");
}
function hideInfoSection() {
    previewElement.classList.remove("call-hidden"); 
}

// Events
for (var i = 0; i < picJdElement.length; i++) {
    picJdElement[i].addEventListener("click", callInfoSection);
};
previewCloseBtnElement.addEventListener("click",hideInfoSection);