
  //Menu Hamburger
  const hamburger = document.querySelector('.hamburger');
  const menu = document.querySelector('.menu');
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
  });

//Animação do nome
document.addEventListener('DOMContentLoaded', () => {
  new TypeIt(
    '.span_animated',{
      speed: 200,
      strings: "Andressa Souza",
      loop: true
    }) .go ();
    });

//scroll---INACABADO
const scroll = document.querySelector('.scroll [href^="#"]');
menuItens.array.forEach(element => {
  item.addEventListener('click', scrollToOnClick)
  
});

function scrollToOnClick(event) {
  event.preventDefault();
  const element = event.target;
  const id = element.getAttribute('href');
  const to = document.querySelector(id).offsetTop;

  window.scroll({
    top: to - 50,
    behavior: 'smooth',
  })
}



    
    
  


  
  