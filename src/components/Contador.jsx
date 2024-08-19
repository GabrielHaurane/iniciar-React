import { useState } from "react";

export const Contador = () => {
  // aqui va la mayor parte de logica
  const [numero, setNumero] = useState(0);
  const [frase, setFrase] = useState('');

 
//   const sumar = () => {
//     // numero++;
//     setNumero(numero + 1)
//     
//   };
  const restar = () => {
    
    setNumero(numero - 1)
    
  };

  return (
    <section className="container text-center">
      <h2>Practicas de Contador</h2>
      <p>{numero}</p>
      <button className="btn btn-primary" onClick={()=>setNumero(numero + 1)}>
        +1
      </button>
      <button className="btn btn-danger" onClick={restar}>
        -1
      </button>
    </section>
  );
};

export default Contador;
