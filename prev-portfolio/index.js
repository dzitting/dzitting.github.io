// pub key -- B_innLF_jKi5201BP
// service id -- service_juyxkif
//email temp id -- template_5upqt5p

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList.remove("hide");

  emailjs
    .sendForm(
      "service_juyxkif",
      "template_5upqt5p",
      event.target,
      "B_innLF_jKi5201BP"
    )
    .then(() => {
      loading.classList += " hide";
      success.classList.remove("hide");
    })
    .catch(() => {
      loading.classList += "hide";
      alert(
        "The email service is temporarily unavailable. Please send your message directly to zittingcodes@gmail.com"
      );
    });
}

let isModalOpen = false;
function toggleModal() {
  if(isModalOpen) {
    isModalOpen = !isModalOpen;
    return document.body.classList.remove("modal__open");
  }

  isModalOpen = true;
  document.body.classList += ' modal__open';
}

let contrastToggle = false;
function toggleContrast() {
  contrastToggle = !contrastToggle
  if(contrastToggle){
  document.body.classList += " dark-theme"
  }
  else {
    document.body.classList.remove("dark-theme")
  }
}

const scaleFactor = 1/25;

function moveBackground() {
  const shapes = document.querySelectorAll(".shape");
  const x = event.clientX * scaleFactor;
  const y = event.clientY * scaleFactor;

    for (let i = 0; i < shapes.length; i++) {
    const isOdd = i % 2 !== 0;
    const boolInt = isOdd ? -1 : 1;
    shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`
  }
}


if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  window.location.href = "mobile.html";
}

