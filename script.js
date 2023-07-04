function getAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("advice-id").innerHTML = data.slip.id;
      document.querySelector(".advice-text").innerHTML = data.slip.advice;
    });
}

let element = document.querySelector(".dice");
element.onclick = showAdvice;

function showAdvice() {
  getAdvice();
}
