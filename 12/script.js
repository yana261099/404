const slider = document.querySelector(".slider > img");
const slider_photos = ["images\\1.jpg", "images\\2.jpg", "images\\3.jpg"];
const slider_controls = [document.querySelector(".control"), document.querySelector(".control2")];
let now_image = 0;

slider_controls[0].addEventListener("click", function() {
    set_image("left");
});

slider_controls[1].addEventListener("click", function() {
    set_image("right");
});

function set_image(rot) {
    if (rot == "left") {
        if (now_image == 0) {
            now_image = slider_photos.length-1;
        } else {
            now_image -= 1;
        }
    }
    if (rot == "right") {
        if (now_image == slider_photos.length-1){
            now_image = 0;
        } else {
            now_image += 1;
        }
    }
    slider.src = slider_photos[now_image];
};