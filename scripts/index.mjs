const slider = document.querySelectorAll('.slider');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');


let currentSlide = 0;

function hideSlide(){
    slider.forEach(item => item.classList.remove('on'));    
}

function showSlide(){
    slider[currentSlide].classList.add('on');
}

function nextSlide(){
    hideSlide();
    currentSlide = slider.length - 1 === currentSlide ? 0 : currentSlide + 1;
    showSlide();
}

function prevSlide(){
    hideSlide();
    currentSlide = currentSlide === 0 ? slider.length - 1 : currentSlide - 1;
    showSlide();
}

nextBtn.addEventListener('click', nextSlide)

prevBtn.addEventListener('click', prevSlide)