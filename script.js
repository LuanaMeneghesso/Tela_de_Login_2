const botao = document.querySelector(".btn-login");

const form = document.querySelector("form");

const titulo = document.querySelector("h1");

const loading = document.querySelector(".loading")


botao.addEventListener("click", (event) => {
    event.preventDefault();
    form.classList.add("esconder-form");
    titulo.innerHTML = "Login realizado com sucesso!";
    loading.classList.add("aparecer-loading");
})

