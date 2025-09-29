import { useState } from "react";
import "./index.css";

function App() {
  const [input, setInput] = useState("");
  const [numbers, setNumbers] = useState([]);

  // Verificar si un número es primo
  function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  // Procesar la lista de números desde el input
  function handleSubmit(e) {
    e.preventDefault();
    const numList = input
      .split(",")
      .map((n) => parseInt(n.trim()))
      .filter((n) => !isNaN(n));
    setNumbers(numList);
  }

  return (
    <div className="container">
      <h1>Lista de Números</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          placeholder="Ej: 2, 3, 4, 5, 6"
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Mostrar</button>
      </form>

      <ul>
        {numbers.map((num, index) => {
          // Normalmente pares o impares
          let clase = num % 2 === 0 ? "par" : "impar";

          if (isPrime(num)) {
            // Si es primo par 
            if (num % 2 === 0) {
              return (
                <li key={index} className="primo">
                  <span className="negro">{num}</span>
                  <span className="par">/{num}</span>
                </li>
              );
            } else {
              // Primo impar
              return (
                <li key={index} className="primo">
                  <span className="negro">{num}</span>
                  <span className="impar">/{num}</span>
                </li>
              );
            }
          }

          return (
            <li key={index} className={clase}>
              {num}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
