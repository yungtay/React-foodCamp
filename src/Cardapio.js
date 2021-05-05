import ComboRefeicao from "./ComboRefeicao";
import OpcoesCombo from "./OpcoesCombo";
import FecharPedido from "./FecharPedido"

export default function Cardapio() {
    return (
      <div class="conteudo">
        {refeicao.map(p => (
          <ComboRefeicao texto={p.texto} item={p.item}/>
        ))}
        <FecharPedido/>
      </div>
    );
}


const opcaoPratos = [
  {
    imagem: "bigMac.jfif",
    alt: "Big Mac",
    nome: "Big Mac",
    descricao: "O sanduíche tem 494 quilocalorias",
    preco: "7,50",
  },
  {
    imagem: "yakisoba.jpeg",
    alt: "Yakisoba",
    nome: "Yakisoba",
    descricao: "Macarrão de sobá frito",
    preco: "21,90",
  },
  {
    imagem: "pizza.jpeg",
    alt: "Pizza",
    nome: "Pizza",
    descricao: "Disco de massa fermentada",
    preco: "25,75",
  },
];

const opcaoBebidas = [
  {
    imagem: "guarana.jpeg",
    alt: "Guaraná",
    nome: "Guaraná Antarctica",
    descricao: "O sabor brasileiro",
    preco: "3,50",
  },
  {
    imagem: "coca-cola.jpeg",
    alt: "Coca-Cola",
    nome: "Coca-Cola",
    descricao: "Um refrigerante de fórmula duvidosa",
    preco: "4,60",
  },
  {
    imagem: "suco-laranja.jpeg",
    alt: "Suco de Laranja",
    nome: "Suco de Laranja",
    descricao: "Sai suco da fruta verdadeira",
    preco: "7,90",
  },
];

const opcaoSobremesas = [
  {
    imagem: "mousse-chocolate.jpeg",
    alt: "Mousse de Chocolate",
    nome: "Mousse",
    descricao: "Uma sobremesa da França",
    preco: "7,30",
  },
  {
    imagem: "brownie.jpeg",
    alt: "Brownie",
    nome: "Brownie",
    descricao: "Uma sobremesa da culinária dos EUA",
    preco: "21,20",
  },
  {
    imagem: "sorvete.jpeg",
    alt: "Sorvete",
    nome: "Sorvete",
    descricao: "Sorvete de todos os sabores",
    preco: "11,10",
  },
];


const refeicao = [
  { texto: "Primeiro, seu prato", item: <OpcoesCombo opcao={opcaoPratos}/> },
  { texto: "Agora, sua bebida", item: <OpcoesCombo opcao={opcaoBebidas}/> },
  { texto: "Por fim, sua sobremesa", item: <OpcoesCombo opcao={opcaoSobremesas}/>}
];
