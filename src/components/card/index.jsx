import CardFilho from "../cardprops/cardfilho";



const Card = () => {

const ArrayCad = [
  { titulo: "Título do Card",
    texto: "Este é o conteúdo do card. Aqui você pode colocar qualquer informação que desejar." },
  { titulo: "Título do Card 2",
    texto: "Este é o conteúdo do card 2. Aqui você pode colocar qualquer informação que desejar." },
  { titulo: "Título do Card 3",
    texto: "Este é o conteúdo do card 3. Aqui você pode colocar qualquer informação que desejar." }
];
  
  return (
<>
    {ArrayCad.map((item) => (
      <CardFilho  texto={item.texto} titulo={item.titulo} />
     
    ))}

</>
     
    );
}
 
export default Card;