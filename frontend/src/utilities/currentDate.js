async function carregarData() {
    let hoje = new Date().toISOString().substr(0, 10);
    document.querySelector("#calendario").max = hoje;
}