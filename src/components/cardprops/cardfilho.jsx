import "./card.css";

function CardFilho({ titulo, texto}) {
  return (
    <div className="card-container">
      <div className="card">
        <h3 className="card-title">{titulo}</h3>
        <p className="card-content">{texto}</p>
      </div>
    </div>
  );
}
export default CardFilho;
