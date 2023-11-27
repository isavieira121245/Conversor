import React, { useState } from 'react';
import './conversor.css';
 
const Conversor = () => {
  const [valor, setValor] = useState('');
  const [valorConvertido, setValorConvertido] = useState('');
 
  const converterMoeda = () => {
 
    // Exemplo simples: Converter de Real para Dólar (1 Real = 0.18 Dólar)
    const taxaConversao = 0.18;
    const valorResultado = parseFloat(valor) * taxaConversao;
 
    setValor(valorResultado.toFixed(2)); 
  };
 
  return (
    <div className="conversor">
      <input
        type="number"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
      />
      <button onClick={converterMoeda}>Converter</button>
      <p>Valor convertido: {valorConvertido}</p>
    </div>
  );
};
 
export default Conversor