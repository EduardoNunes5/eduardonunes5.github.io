const listOfCardElements = document.querySelectorAll('.card');
const cardContainer = document.querySelector('.carousel');

listOfCardElements.forEach((cardElement, index) => {
  cardElement.addEventListener('click', () => {
    const scrollLeft = index * listOfCardElements[0].offsetWidth;
    cardContainer.scrollTo({ left: scrollLeft, behavior: 'smooth' });
  });
});