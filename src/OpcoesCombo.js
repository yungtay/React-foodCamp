import React from "react";
export default function OpcoesCombo(props) {
  const { opcao } = props;
  const [selecionado, setSelecionado] = React.useState(null);
  const [quantidade, setQuantidade] = React.useState(1);

  return (
    <div class="opcoes" id="opcoes1">
      {opcao.map((p, i) => {
        return (
          <div
            class={`opcao ${
              i === selecionado && quantidade !== 0 ? "borda" : ""
            }`}
            id={i}
            onClick={() =>
              elementoClicado(setSelecionado, selecionado, i, setQuantidade)
            }
          >
            <img src={`imagens/${p.imagem}`} alt={p.alt} />
            <p class="nome-item">{p.nome}</p>
            <p class="descricao-item">{p.descricao}</p>
            <div class="preco-quantidade">
              <p>
                R$ <span class="preco">{p.preco}</span>
              </p>
              <div class="quantidade">
                <span
                  class="vermelha"
                  onClick={() => subtracao(quantidade, setQuantidade, setSelecionado)}
                >
                  -
                </span>{" "}
                {quantidade}{" "}
                <span
                  class="verde"
                  onClick={() => soma(quantidade, setQuantidade)}
                >
                  +
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function elementoClicado(setSelecionado, selecionado, id, setQuantidade) {
  if(selecionado !== id){
    setSelecionado(id)
    setQuantidade(1)
  } 
}

function soma(quantidade,setQuantidade){
  setQuantidade(quantidade+1)

}

function subtracao(quantidade,setQuantidade,setSelecionado){
  quantidade === 0 ? setSelecionado(null) : setQuantidade(quantidade-1)
  
}

