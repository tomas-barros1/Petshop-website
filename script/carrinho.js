function formatarPreco(preco) {
  return preco.toLocaleString('pt-BR', {minimumFractionDigits: 2});
}

function adicionarPreco(id, preco) {
  let elementoPreco = document.getElementById(id);
  let valorAtual = parseFloat(elementoPreco.textContent.replace('R$', '').replace(',', '.'));
  let novoValor = valorAtual + preco;
  let quantidade = parseInt(elementoPreco.dataset.quantidade) + 1;
  elementoPreco.textContent = "R$" + formatarPreco(novoValor) + " (Quantidade: " + quantidade + ")";
  elementoPreco.dataset.quantidade = quantidade;
}

function removerPreco(id, preco) {
  let elementoPreco = document.getElementById(id);
  let valorAtual = parseFloat(elementoPreco.textContent.replace('R$', '').replace(',', '.'));
  let novoValor = valorAtual - preco;
  if (novoValor < 0) novoValor = 0;
  let quantidade = parseInt(elementoPreco.dataset.quantidade) - 1;
  if (quantidade < 0) quantidade = 0;
  elementoPreco.textContent = "R$" + formatarPreco(novoValor) + " (Quantidade: " + quantidade + ")";
  elementoPreco.dataset.quantidade = quantidade;
}
