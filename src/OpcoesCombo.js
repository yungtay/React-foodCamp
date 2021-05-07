import React from "react";
import RenderizarOpcoes from "./RenderizarOpcoes";
export default function OpcoesCombo(props) {
  const { opcao, combo, id} = props;
  const [selecionado, setSelecionado] = React.useState([]);
  

  return (
    <div className="opcoes" id={id}>
      {opcao.map((p, i) => (
        <RenderizarOpcoes
          selecionado={selecionado}
          setSelecionado={setSelecionado}
          p={p}
          i={i}
          id={id}
          combo = {combo}
        />
      ))}
    </div>
  );
}

