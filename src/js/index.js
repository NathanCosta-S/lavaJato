const btn = document.getElementById("menu");
const addRadius = document.getElementById("round-onclick");
btn.addEventListener("click", function(){
    addRadius.classList.toggle("radius-50");
})

const carousel = document.getElementById('slides');
let currentIndex = 0;

function showSlide(index) {
  currentIndex = index;
  const translateValue = -index * 100 + '%';
  carousel.style.transform = 'translateX(' + translateValue + ')';
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % carousel.children.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + carousel.children.length) % carousel.children.length;
  showSlide(currentIndex);
}


setInterval(nextSlide, 3000);