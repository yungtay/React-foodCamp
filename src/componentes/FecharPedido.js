export default function FecharPedido(props) {
  const { comboEscolhido } = props;
  const numeroCategoriasEscolhidasInferior3 =
    comboEscolhido.map((p) => p.data).filter((i) => i.length > 0).length < 3;
  return (
    <div className="fechar-pedido">
      <div
        className={`selecionar-fechar ${
          numeroCategoriasEscolhidasInferior3 ? "desativado" : ""
        }`}
        onClick={() => nomeEnderecoPedir(comboEscolhido)}
      >
        <buttom className="texto-fechamento">
          {numeroCategoriasEscolhidasInferior3
            ? "Selecione os 3 itens para fechar o pedido"
            : "Fechar pedido"}
        </buttom>
      </div>
    </div>
  );
}

function nomeEnderecoPedir(comboEscolhido) {
  const nome = prompt("Olá, qual o seu nome ?");
  const endereco = prompt("Qual o endereço de entrega ?");
  let total = 0;
  comboEscolhido.map((i) =>
    i.data.map((p) => (total += p.preco.replace(",", ".") * p.quantidade))
  );

  const url = encodeURIComponent(`Olá, gostaria de fazer o pedido:
  - Prato: ${comboEscolhido[0].data.map((p) => `${p.nome} (${p.quantidade}x)`)}
  - Bebida: ${comboEscolhido[1].data.map((p) => `${p.nome} (${p.quantidade}x)`)}
  - Sobremesa: ${comboEscolhido[2].data.map(
    (p) => `${p.nome} (${p.quantidade}x)`
  )}
  Total: R$ ${total.toFixed(2).replace(".", ",")}

  Nome: ${nome}
  Endereço: ${endereco}`);

  console.log(decodeURIComponent(url));

  //window.location.replace(`https://wa.me/5521988563381?text=${url}`);
}
