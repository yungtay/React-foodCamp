export default function ConfirmarPedido() {
    return (
      <div className="tela-confirmar-pedido escondido">
        <div className="confirmar-pedido">
          <div className="container-texto">
            <span>Confirme o seu pedido</span>
            <div className="item">
              <span className="item1"></span>
              <span className="preco1"></span>
            </div>
            <div className="item">
              <span className="item2"></span>
              <span className="preco2"></span>
            </div>
            <div className="item">
              <span className="item3"></span>
              <span className="preco3"></span>
            </div>
            <div className="total">
              <span>TOTAL</span>
              <span className="precoTotal"></span>
            </div>
            <div className="pedir" onClick="nomeEnderecoPedir()">
              <buttom>Tudo certo, pode pedir!</buttom>
            </div>
            <buttom className="cancelar" onClick="cancelar()">
              Cancelar
            </buttom>
          </div>
        </div>
      </div>
    );
}