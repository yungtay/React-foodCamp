import React from "react"
export default function RenderizarOpcoes(props) {
  const { selecionado, setSelecionado, i, p, combo, id } = props;
  const [comboEscolhido, setComboEscolhido] = combo
  const [quantidade, setQuantidade] = React.useState(1);

  return (
    <div
      className={`opcao ${selecionado.map((p) => p.key).includes(i) ? "borda" : ""}`}
      key={i}
      onClick={() => elementoClicado(setSelecionado, selecionado, i, p.nome, p.preco, quantidade,comboEscolhido, id,setComboEscolhido)}
    >
      <img src={`imagens/${p.imagem}`} alt={p.alt} />
      <p className="nome-item">{p.nome}</p>
      <p className="descricao-item">{p.descricao}</p>
      <div className="preco-quantidade">
        <p>
          R$ <span className="preco">{p.preco}</span>
        </p>
        <div className="quantidade">
          <span
            className="vermelha"
            onClick={() => subtracao(quantidade, setQuantidade, selecionado,setSelecionado, i, comboEscolhido,setComboEscolhido,id)}
          >
            -
          </span>{" "}
          {quantidade}{" "}
          <span className="verde" onClick={() => soma(quantidade, setQuantidade, selecionado,setSelecionado, i, comboEscolhido,setComboEscolhido,id)}>
            +
          </span>
        </div>
      </div>
    </div>
  );
}

function elementoClicado(setSelecionado, selecionado, key, nome, preco, quantidade,comboEscolhido, id, setComboEscolhido) {
    if(!selecionado.map((p) => p.key).includes(key)){
      setSelecionado([...selecionado,{key: key, nome: nome, preco: preco, quantidade: quantidade}])
      selecionado = [...selecionado,{key: key, nome: nome, preco: preco, quantidade: quantidade}]
      comboEscolhido[id].data = selecionado
      setComboEscolhido([...comboEscolhido])

    }
  }
  
  function soma(quantidade, setQuantidade, selecionado,setSelecionado, key, comboEscolhido,setComboEscolhido,id){
    operacao(quantidade, setQuantidade, selecionado,setSelecionado, key,"soma",comboEscolhido,setComboEscolhido,id)

  
  }
  
  function subtracao(quantidade, setQuantidade, selecionado,setSelecionado, key, comboEscolhido,setComboEscolhido,id){
    if(quantidade === 1){
      setSelecionado(selecionado.filter((p) => p.key !== key))
    }else{
      operacao(quantidade, setQuantidade, selecionado,setSelecionado, key,"subtracao",comboEscolhido,setComboEscolhido,id)
    }  
  }

  function operacao(quantidade, setQuantidade, selecionado,setSelecionado, key, operador, comboEscolhido,setComboEscolhido,id ) {

    if(operador === "soma"){
      setQuantidade(quantidade + 1)
      selecionado.filter((t) => (t.key === key))[0].quantidade++
      

    } else {
      setQuantidade(quantidade-1)
      selecionado.filter((t) => (t.key === key))[0].quantidade--
    }
    setSelecionado = [...selecionado]
    comboEscolhido[id].data = selecionado
    setComboEscolhido([...comboEscolhido])
  }