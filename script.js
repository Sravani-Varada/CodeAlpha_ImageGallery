const gallery = document.getElementById("gallery");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

let currentImages = [];
let currentIndex = 0;

const albums = {
  nature: [
    "images/pic1.jpeg",
    "images/pic2.jpeg",
    "images/pic3.jpeg"
  ],
  city: [
    "images/pic4.jpeg",
    "images/pic5.jpeg",
	"images/pic6.jpeg"
  ]
};

function showAlbum(albumName) {
  gallery.innerHTML = "";
  currentImages = albums[albumName];

  currentImages.forEach((src, index) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = `${albumName} photo ${index + 1}`;
    img.onclick = () => openLightbox(index);
    gallery.appendChild(img);
  });
}

function openLightbox(index) {
  event.stopPropagation();
  lightbox.style.display = "flex";
  currentIndex = index;
  lightboxImg.src = currentImages[currentIndex];
}

function closeLightbox() {
  lightbox.style.display = "none";
}

function changeImage(step) {
  event.stopPropagation();
  currentIndex = (currentIndex + step + currentImages.length) % currentImages.length;
  lightboxImg.src = currentImages[currentIndex];
}

// Show nature album by default
showAlbum("nature");
