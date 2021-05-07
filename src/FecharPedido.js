export default function FecharPedido(props) {
  const {comboEscolhido} = props
  console.log(comboEscolhido)
    return (
      <div className="fechar-pedido">
        <div className="selecionar-fechar disable" onClick="avancarConfirmacao()">
          <buttom className="texto-fechamento">
            Selecione os 3 itens para fechar o pedido
          </buttom>
        </div>
      </div>
    );
}