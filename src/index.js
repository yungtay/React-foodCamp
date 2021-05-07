import ReactDOM from "react-dom"
import React from "react"
import Topo from "./Topo"
import Cardapio from "./Cardapio"
import ConfirmarPedido from "./ConfirmarPedido"

 export default function App() {
    const [comboEscolhido, setComboEscolhido] = React.useState([{id: 0, data:[]},{id: 1, data:[]},{id: 2, data:[]}]);
    return (
      <div className="corpo-total">
        <ConfirmarPedido />
        <div className="antes-confirmar">
          <Topo />
          <Cardapio comboEscolhido={comboEscolhido} setComboEscolhido={setComboEscolhido}/>
        </div>
      </div>
    );
    }

 ReactDOM.render(<App/>, document.querySelector(".root"))