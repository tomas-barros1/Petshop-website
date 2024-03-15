function buscarEndereco() {
  event.preventDefault()
  let cep = document.getElementById('cepInput').value;
  let url = `https://viacep.com.br/ws/${cep}/json/`;
  let endereco = document.getElementById('endereco');

  fetch(url)
  .then(response => response.json())
  .then(data => {
      if(data.erro) {
          endereco.innerText = "CEP não encontrado.";
      } else {
          let endereco = `CEP: ${data.cep}, ${data.logradouro}, ${data.bairro}, ${data.localidade}, ${data.uf}`;
          document.getElementById('endereco').innerText = endereco;
      }
  })
  .catch(error => console.error('Erro:', error));
}