// Selectors
var galleryPreviewId = "gallery-preview";
var galleryImageHolderClass = "gallery-img-holder";
var galleryPreviewCloseBtnId = "close-icon";

// Elements
var galleryPreview = document.getElementById(galleryPreviewId);
var galleryImageHolders = document.getElementsByClassName(galleryImageHolderClass);
var galleryPreviewCloseBtn = document.getElementById(galleryPreviewCloseBtnId);

// Callbacks
function toggleGalleryPreview(event) {
    galleryPreview.classList.toggle("gallery-preview-active");
    this.classList.toggle("gallery-img-holder-active");
}

function closeGalleryPreview(event) {
    galleryPreview.classList.remove("gallery-preview-active");

    for (var i = 0; i < galleryImageHolders.length; i++) {
        galleryImageHolders[i].classList.remove("gallery-img-holder-active");
    }
}

// Events
for (var i = 0; i < galleryImageHolders.length; i++) {
    galleryImageHolders[i].addEventListener("click", toggleGalleryPreview);
}

galleryPreviewCloseBtn.addEventListener("click", closeGalleryPreview);