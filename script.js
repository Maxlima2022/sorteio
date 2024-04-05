function sortearNomes() {
    var nomesDisponiveis = ["João", "Maria", "Radja", "Ana", "Pedro", "Mariana", "Carlos", "Laura", "Fernando", "Paula", "Rafael", "Camila"];
    var grupo = [];
    
    // Garantir que haja pelo menos 5 nomes disponíveis
    if (nomesDisponiveis.length < 5) {
        alert("Não há nomes suficientes para sortear!");
        return;
    }
    
    // Sortear 5 nomes aleatórios sem repetição
    while (grupo.length < 5) {
        var indice = Math.floor(Math.random() * nomesDisponiveis.length);
        var nomeSorteado = nomesDisponiveis.splice(indice, 1)[0]; // Remover e obter o nome sorteado
        grupo.push(nomeSorteado);
    }
    
    exibirGrupo(grupo);
}

function exibirGrupo(grupo) {
    var listaNomes = document.getElementById("nomes-lista");
    listaNomes.innerHTML = ""; // Limpar a lista
    
    grupo.forEach(function(nome) {
        var li = document.createElement("li");
        li.textContent = nome;
        listaNomes.appendChild(li);
    });
}
