export default function FecharPedido() {
    return (
      <div class="fechar-pedido">
        <div class="selecionar-fechar disable" onclick="avancarConfirmacao()">
          <buttom class="texto-fechamento">
            Selecione os 3 itens para fechar o pedido
          </buttom>
        </div>
      </div>
    );
}