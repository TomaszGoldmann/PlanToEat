document.addEventListener("DOMContentLoaded", () => {
  const arrows = document.querySelectorAll(".fa-circle-chevron");
  const dots = document.querySelectorAll(".fa-circle");
  const image = document.querySelector(".carusel__img");
  const text = document.querySelector(".carusel__text");

  const imgSrc = [
    "https://images.pexels.com/photos/5618068/pexels-photo-5618068.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/4262010/pexels-photo-4262010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/7315174/pexels-photo-7315174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  ];

  const textContent = [
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    "Lorem ipsum",
    "Omnis dolorem est delectus labore ab itaque et magnam similique",
  ];

  let counter = 0;

  arrows.forEach((arrow) =>
    arrow.addEventListener("click", () => {
      dots.forEach((dot) => (dot.style.color = "#4a4a49"));
      if (arrow === arrows[1]) {
        counter++;
        if (counter === 3) {
          counter = 0;
        }
        dots[counter].style.color = "white";
        image.src = imgSrc[counter];
        text.innerText = textContent[counter];
      } else {
        counter--;
        if (counter === -1) {
          counter = 2;
        }
        dots[counter].style.color = "white";
        image.src = imgSrc[counter];
        text.innerText = textContent[counter];
      }
    })
  );

  dots.forEach((dot) =>
    dot.addEventListener("click", () => {
      dots.forEach((dot) => (dot.style.color = "#4a4a49"));
      if (dot === dots[0]) {
        counter = 0;
        image.src = imgSrc[counter];
        text.innerText = textContent[counter];
        dot.style.color = "white";
      } else if (dot === dots[1]) {
        counter = 1;
        image.src = imgSrc[counter];
        text.innerText = textContent[counter];
        dot.style.color = "white";
      } else {
        counter = 2;
        image.src = imgSrc[counter];
        text.innerText = textContent[counter];
        dot.style.color = "white";
      }
    })
  );
});
