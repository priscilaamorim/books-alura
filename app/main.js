let livros = [];
const endpointAPI =
  "https://guilhermeonrails.github.io/casadocodigo/livros.json";

getBuscarLivrosAPI();

async function getBuscarLivrosAPI() {
  const res = await fetch(endpointAPI); //A função fetch é usada para buscar dados de um servidor O endpointAPI é o endereço (URL)
  livros = await res.json(); //A palavra await faz o código esperar até que a busca seja concluída. O método json() é usado para converter os dados da resposta em um objeto JavaScript.
  let livrosComDesconto = aplicarDesconto(livros);
  exibirLivrosNaTela(livrosComDesconto);


}
 



