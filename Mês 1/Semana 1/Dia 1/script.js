const btn = document.querySelector("button");
const h2 = document.querySelector("h2");
const div = document.querySelector(".historico");
const h3 = document.querySelector("h3");
const inputAge = document.querySelector("#idade");

btn.addEventListener("click", () => {
    // Evento que coleta o valor inserido no input e retorna um função
    const age = Number(inputAge.value);
    return ageToDays(age);
});

// Função que verifica/coverte a idade em dias e adiciona na tela e histórico
function ageToDays(age) {
    let historyAge = document.createElement("p"); // Cria um novo elemento P
    let days = 0;
    if (Number.isInteger(age) && age > 0) {
        // Verifica se o dado inserido é inteiro e positivo
        days = age * 365;
        h2.innerText = days;
        h2.style.color = "#537FE7";
        historyAge.innerText = `${age} anos e ${days} dias`; // Adiciona o contéudo para o elemento P criado
        const existingElement = Array.from(div.children).find(
            // Verifica se o conteúdo que vai ser adicionado é igual ao que ja foi adicionado
            (child) => child.textContent === historyAge.textContent
        );
        if (existingElement) {
            // Se o conteúdo já existir ele é removido para que seja adicionado novamente
            div.removeChild(existingElement);
        }
        div.insertBefore(historyAge, h3.nextSibling); // Conteúdo é adicionado depois do h3 mais sempre antes do historyAge já existente
    } else {
        h2.innerText = "Erro dado errado";
        h2.style.color = "red";
    }
    return saveValue(historyAge);
}

function saveValue(historyAge) {
    // Função que salva o contéudo do histórico no localStorage
    localStorage.setItem(historyAge.innerText, historyAge.innerText);
}

function setValue() {
    // Função que pega os valores do localStorage e adiciona a div de histórico
    const properties = Object.keys(localStorage);
    properties.forEach((propertie) => {
        let historyAge = document.createElement("p"); // reseta váriavel toda vez que repete
        historyAge.innerText = propertie;
        div.insertBefore(historyAge, h3.nextSibling); // adiciona a váriavel depois do h3 da div
    });
}

setValue();

const btnReset = document.querySelector(".reset");

btnReset.addEventListener("click", () => {
    localStorage.clear();
    div.innerHTML = "\n        <h3>Histórico</h3>\n    "
    h2.innerText = 'Resultado'
    h2.style.color = "#537FE7";
    inputAge.value = ''
});
