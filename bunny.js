// Trending Now Section 

const gap = 16;

const slidesSection = document.getElementById("flexSection"),
  songCard = document.getElementsByClassName("songCard"),
  next = document.getElementById("next"),
  prev = document.getElementById("prev");

next.addEventListener("click", e => {
  slidesSection.scrollBy(width + gap, 0);
  if (slidesSection.scrollWidth !== 0) {
    prev.style.display = "flex";
  }
  if (songCard.scrollWidth - width - gap <= slidesSection.scrollLeft + width) {
    next.style.display = "none";
  }
});
prev.addEventListener("click", e => {
  slidesSection.scrollBy(-(width + gap), 0);
  if (slidesSection.scrollLeft - width - gap <= 0) {
    prev.style.display = "flex";
  }
  if (!songCard.scrollWidth - width - gap <= slidesSection.scrollLeft + width) {
    next.style.display = "flex";
  }
});

let width = slidesSection.offsetWidth;
window.addEventListener("resize", e => (width = slidesSection.offsetWidth));