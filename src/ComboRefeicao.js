export default function ComboRefeicao(props) {
  const {texto, item} = props
    return (
      <div class="prato-bebida-sobremesa">
        <div>
          <h2>{texto}</h2>
        </div>
      {item}
      </div>
    );
}

