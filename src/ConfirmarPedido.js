export default function ConfirmarPedido() {
    return (
      <div class="tela-confirmar-pedido escondido">
        <div class="confirmar-pedido">
          <div class="container-texto">
            <span>Confirme o seu pedido</span>
            <div class="item">
              <span class="item1"></span>
              <span class="preco1"></span>
            </div>
            <div class="item">
              <span class="item2"></span>
              <span class="preco2"></span>
            </div>
            <div class="item">
              <span class="item3"></span>
              <span class="preco3"></span>
            </div>
            <div class="total">
              <span>TOTAL</span>
              <span class="precoTotal"></span>
            </div>
            <div class="pedir" onclick="nomeEnderecoPedir()">
              <buttom>Tudo certo, pode pedir!</buttom>
            </div>
            <buttom class="cancelar" onclick="cancelar()">
              Cancelar
            </buttom>
          </div>
        </div>
      </div>
    );
}