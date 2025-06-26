import { useState } from "react";
import "./semafaro.css";

function Semaforo() {
  const [cor, setCor] = useState("");
  console.log(cor);
  return (
    <>
      <h1>Semaforo</h1>
      <div className="semaforo">
        <div className={`luz ${cor}`}> </div>
        <div className={`luz ${cor}`}> </div>
        <div className={`luz ${cor}`}> </div>
      </div>
      <button onClick={() => setCor("vermelho")}>Vermelho</button>
      <button onClick={() => setCor("amarelo")}>Vermelho</button>
      <button onClick={() => setCor("verde")}>Vermelho</button>
    </>
  );
}
export default Semaforo;

