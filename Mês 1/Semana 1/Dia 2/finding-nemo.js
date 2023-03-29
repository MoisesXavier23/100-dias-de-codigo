const btn = document.querySelector("#submit");
const h2 = document.querySelector("h2");
const nemo = document.querySelector(".nemo");

function encontrarNemo() {
    const inputFrase = document.querySelector("#frase").value;
    const achado = inputFrase.toLowerCase().indexOf("nemo");
    const audio = new Audio("./assets/sucess.mp3");
    if (achado >= 0) {
        h2.innerText = `Achei o Nemo a partir da ${achado + 1} letra!`;
        nemo.classList.add("ativo");
        audio.play();
    } else {
        h2.innerText = "Não achei o Nemo :(";
        nemo.classList.remove("ativo");
    }
}

btn.addEventListener("click", encontrarNemo);
