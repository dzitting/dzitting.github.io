const bgImage = document.getElementById('two');
const newUrl = './assets/snowy-tab2.png';
const oldUrl = './assets/snowy-tab1.png';
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#mtn-one').addEventListener('click', (e) => {
      e.preventDefault();
      const link1 = document.querySelector('#mtn-one');
      const link2 = document.querySelector('#mtn-two');
      const pgOne = document.querySelector('#mountain-one');
      const pgTwo = document.querySelector('#mountain-two');
      link1.classList.toggle('active');
      pgOne.classList.toggle('visible');
      pgOne.classList.toggle('not-visible');
      pgTwo.classList.toggle('visible');
      pgTwo.classList.toggle('not-visible');
      link2.classList.remove('active'); // Ensure #mtn-two is not active when #mtn-one is clicked
      if(pgOne.classList.contains('visible')){
        bgImage.style.background = `url(${oldUrl})`;
      } else {
        bgImage.style.background = `url(${newUrl})`;
      }
    });
    
    document.querySelector('#mtn-two').addEventListener('click', (e) => {
        e.preventDefault();
        const link1 = document.querySelector('#mtn-one');
        const link2 = document.querySelector('#mtn-two');
        const pgOne = document.querySelector('#mountain-one');
        const pgTwo = document.querySelector('#mountain-two');
        link2.classList.toggle('active');
        pgOne.classList.toggle('visible');
      pgOne.classList.toggle('not-visible');
      pgTwo.classList.toggle('visible');
      pgTwo.classList.toggle('not-visible')
      link1.classList.remove('active'); // Ensure #mtn-one is not active when #mtn-two is clicked
      if(pgOne.classList.contains('visible')){
          bgImage.style.background = `url(${oldUrl})`;
        } else {
          bgImage.style.background = `url(${newUrl})`;
        }
    });
  });
