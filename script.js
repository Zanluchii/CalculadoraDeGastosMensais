let total = 0;

document.getElementById('adicionar').addEventListener('click', () => {
    const descricao = document.getElementById('descricao').value;
    const valor = parseFloat(document.getElementById('valor').value);
    const categoria = document.getElementById('categoria').value;

    if (descricao && !isNaN(valor) && valor > 0) {
        // Atualiza o total
        total += valor;
        document.getElementById('total').textContent = total.toFixed(2);

        // Adiciona o gasto à tabela
        const tabela = document.getElementById('listaGastos');
        const linha = document.createElement('tr');

        linha.innerHTML = `
            <td>${descricao}</td>
            <td class="${valor > 100 ? 'valor-alto' : ''}">R$ ${valor.toFixed(2)}</td>
            <td>${categoria}</td>
            <td><button class="delete">Excluir</button></td>
        `;

// Botão de excluir
        linha.querySelector('.delete').addEventListener('click', () => {
            total -= valor;
            document.getElementById('total').textContent = total.toFixed(2);
            tabela.removeChild(linha);
        });

        tabela.appendChild(linha);

        // Limpa os campos
        document.getElementById('descricao').value = '';
        document.getElementById('valor').value = '';
        document.getElementById('categoria').value = 'Alimentação';
    } else {
        alert('Por favor, preencha todos os campos corretamente.');
    }
});