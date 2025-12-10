// Footer tahun otomatis
document.getElementById("year").innerText = new Date().getFullYear();

// Progress bar animasi
document.querySelectorAll(".progress-bar")
  .forEach(bar => bar.style.width = bar.dataset.value);

// Lightbox gambar
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");

document.addEventListener("click", e => {
  if (e.target.matches(".grid-gallery img")) {
    lightbox.style.display = "flex";
    lightboxImg.src = e.target.src;
  }
  if (e.target === lightbox) lightbox.style.display = "none";
});

// Menu mobile
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.onclick = () => navMenu.classList.toggle("show");