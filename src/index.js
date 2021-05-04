import ReactDOM from "react-dom"

 export default function App() {
    return (
      <div class="corpo-total">
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
        <div class="antes-confirmar">
          <div class="topo">
            <h1>FoodCamp</h1>
            <h3>Sua comida em 6 minutos</h3>
          </div>
          <div class="conteudo">
            <div class="prato-bebida-sobremesa">
              <div>
                <h2>Primeiro, seu prato</h2>
              </div>
              <div class="opcoes" id="opcoes1">
                <div class="opcao" onclick="ligaDesliga(this)">
                  <img src="imagens/bigMac.jfif" alt="Big Mac" />
                  <p class="nome-item">Big Mac</p>
                  <p class="descricao-item">
                    O sanduíche tem 494 quilocalorias
                  </p>
                  <p>
                    R$ <span class="preco">7,50</span>
                  </p>
                  <ion-icon name="checkmark-circle"></ion-icon>
                </div>
                <div class="opcao" onclick="ligaDesliga(this)">
                  <img src="imagens/yakisoba.jpeg" alt="Yakisoba" />
                  <p class="nome-item">Yakisoba</p>
                  <p class="descricao-item">Macarrão de sobá frito</p>
                  <p>
                    R$ <span class="preco">21,90</span>
                  </p>
                  <ion-icon name="checkmark-circle"></ion-icon>
                </div>
                <div class="opcao" onclick="ligaDesliga(this)">
                  <img src="imagens/pizza.jpeg" alt="Pizza" />
                  <p class="nome-item">Pizza</p>
                  <p class="descricao-item">Disco de massa fermentada</p>
                  <p>
                    R$ <span class="preco">25,75</span>
                  </p>
                  <ion-icon name="checkmark-circle"></ion-icon>
                </div>
              </div>
            </div>
            <div class="prato-bebida-sobremesa">
              <div>
                <h2>Agora, sua bebida</h2>
              </div>
              <div class="opcoes" id="opcoes2">
                <div class="opcao" onclick="ligaDesliga(this)">
                  <img src="imagens/guarana.jpeg" alt="Guaraná" />
                  <p class="nome-item">Guaraná Antarctica</p>
                  <p class="descricao-item">O sabor brasileiro</p>
                  <p>
                    R$ <span class="preco">3,50</span>
                  </p>
                  <ion-icon name="checkmark-circle"></ion-icon>
                </div>
                <div class="opcao" onclick="ligaDesliga(this)">
                  <img src="imagens/coca-cola.jpeg" alt="Coca-Cola" />
                  <p class="nome-item">Coca-Cola</p>
                  <p class="descricao-item">
                    Um refrigerante de fórmula duvidosa
                  </p>
                  <p>
                    R$ <span class="preco">4,60</span>
                  </p>
                  <ion-icon name="checkmark-circle"></ion-icon>
                </div>
                <div class="opcao" onclick="ligaDesliga(this)">
                  <img src="imagens/suco-laranja.jpeg" alt="Suco de Laranja" />
                  <p class="nome-item">Suco de Laranja</p>
                  <p class="descricao-item"> Sai suco da fruta verdadeira</p>
                  <p>
                    R$ <span class="preco">7,90</span>
                  </p>
                  <ion-icon name="checkmark-circle"></ion-icon>
                </div>
              </div>
            </div>
            <div class="prato-bebida-sobremesa">
              <div>
                <h2>Por fim, sua sobremesa</h2>
              </div>
              <div class="opcoes" id="opcoes3">
                <div class="opcao" onclick="ligaDesliga(this)">
                  <img
                    src="imagens/mousse-chocolate.jpeg"
                    alt="Mousse de Chocolate"
                  />
                  <p class="nome-item">Mousse</p>
                  <p class="descricao-item">Uma sobremesa da França</p>
                  <p>
                    R$ <span class="preco">7,30</span>
                  </p>
                  <ion-icon name="checkmark-circle"></ion-icon>
                </div>
                <div class="opcao" onclick="ligaDesliga(this)">
                  <img src="imagens/brownie.jpeg" alt="Brownie" />
                  <p class="nome-item">Brownie</p>
                  <p class="descricao-item">
                    Uma sobremesa da culinária dos EUA
                  </p>
                  <p>
                    R$ <span class="preco">21,20</span>
                  </p>
                  <ion-icon name="checkmark-circle"></ion-icon>
                </div>
                <div class="opcao" onclick="ligaDesliga(this)">
                  <img src="imagens/sorvete.jpeg" alt="Sorvete" />
                  <p class="nome-item">Sorvete</p>
                  <p class="descricao-item">Sorvete de todos os sabores</p>
                  <p>
                    R$ <span class="preco">11,10</span>
                  </p>
                  <ion-icon name="checkmark-circle"></ion-icon>
                </div>
              </div>
            </div>
            <div class="fechar-pedido">
              <div
                class="selecionar-fechar disable"
                onclick="avancarConfirmacao()"
              >
                <buttom class="texto-fechamento">
                  Selecione os 3 itens para fechar o pedido
                </buttom>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
    }

 ReactDOM.render(<App/>, document.querySelector(".root"))