const form = document.getElementById("form-agenda")

const criaNovaLinha = () => {
    let linha = document.createElement("tr")
    linha.innerHTML = `
    <td>${nome.value}</td>
    <td>${telefone.value}</td>
    `
    return linha
}

const atualizaTabela = (linha) => {
    const corpoTabela = document.querySelector("tbody")
    corpoTabela.appendChild(linha)
}

const resetaForm = (nome, telefone) => {
    nome.value = ""
    telefone.value = ""
}

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const nome = document.getElementById("nome")
    const telefone = document.getElementById("telefone")

    const linha = criaNovaLinha()

    atualizaTabela(linha)

    resetaForm(nome, telefone)
})