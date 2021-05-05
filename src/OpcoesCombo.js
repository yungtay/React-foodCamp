export default function OpcoesCombo(props) {
  const {opcao} = props
  return (
    <div class="opcoes" id="opcoes1">
      {opcao.map((p) => {
        return (
          <div class="opcao" onclick="ligaDesliga(this)">
            <img src={`imagens/${p.imagem}`} alt={p.alt} />
            <p class="nome-item">{p.nome}</p>
            <p class="descricao-item">{p.descricao}</p>
            <p>
              R$ <span class="preco">{p.preco}</span>
            </p>
            <ion-icon name="checkmark-circle"></ion-icon>
          </div>
        );
      })}
    </div>
  );
}
