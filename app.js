const fiterContainer = document.querySelector(".gallery-filter");
const galleryItems = document.querySelectorAll(".gallery-item");
const images = document.querySelectorAll(".images");
const imagePreview = document.getElementById("image-preview");
const previewCard = document.querySelector(".preview");
const close = document.getElementById("close");
const gallery = document.querySelector(".gallery");

close.addEventListener("click", function() {
    previewCard.style.display = "none";
    gallery.classList.remove("gallery-blur");
});

images.forEach(image => {
    image.addEventListener("click", function() {
        previewCard.style.display = "block";
        var imageName = this.src;
        imagePreview.src = imageName;
        gallery.classList.add("gallery-blur");
    });
});

fiterContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("filter-item")) {
        fiterContainer.querySelector(".active").classList.remove("active");
        event.target.classList.add("active");
        const filterValue = event.target.getAttribute("data-filter");
        galleryItems.forEach((item) => {
            if (item.classList.contains(filterValue) || filterValue === 'all') {
                item.classList.add("show");
                item.classList.remove("hide");
            } else {
                item.classList.add("hide");
                item.classList.remove("show");
            }
        });
    }
});

// fiterContainer.addEventListener("click", (event) => {
//     if (event.target.classList.contains("filter-item")) {
//         fiterContainer.querySelector(".active").classList.remove("active");
//         event.target.classList.add("active");
//         const filterValue = event.target.getAttribute("data-filter");
//         galleryItems.forEach((item) => {
//             if (item.classList.contains(filterValue) || filterValue === 'all') {
//                 item.classList.add("show");
//                 item.classList.remove("hide");
//             } else {
//                 item.classList.add("hide");
//                 item.classList.remove("show");
//             }
//         });
//     }
// }); }
// });