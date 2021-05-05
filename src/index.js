import ReactDOM from "react-dom"
import Topo from "./Topo"
import Cardapio from "./Cardapio"
import ConfirmarPedido from "./ConfirmarPedido"

 export default function App() {
    return (
      <div class="corpo-total">
        <ConfirmarPedido />
        <div class="antes-confirmar">
          <Topo />
          <Cardapio />
        </div>
      </div>
    );
    }

 ReactDOM.render(<App/>, document.querySelector(".root"))