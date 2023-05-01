import React, { useState } from 'react';

const ImcCalculator = () => {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState('');
  const [classificacao, setClassificacao] = useState('');

  const handlePesoChange = (event) => {
    setPeso(event.target.value);
  }

  const handleAlturaChange = (event) => {
    setAltura(event.target.value);
  }

  const calcularImc = () => {
    const imcCalculado = peso / (altura * altura);
    setImc(imcCalculado.toFixed(2));

    if (imcCalculado < 18.5) {
      setClassificacao('Magreza');
    } else if (imcCalculado >= 18.5 && imcCalculado < 25) {
      setClassificacao('Normal');
    } else if (imcCalculado >= 25 && imcCalculado < 30) {
      setClassificacao('Sobrepeso');
    } else {
      setClassificacao('Obesidade');
    }
  }

  return (
    <div>
      <h1>Calculadora de IMC</h1>
      <div>
        <label htmlFor="peso">Peso (kg):</label>
        <input type="number" id="peso" name="peso" value={peso} onChange={handlePesoChange} />
      </div>
      <div>
        <label htmlFor="altura">Altura (m):</label>
        <input type="number" id="altura" name="altura" value={altura} onChange={handleAlturaChange} />
      </div>
      <div>
        <button onClick={calcularImc}>Calcular IMC</button>
      </div>
      {imc && classificacao &&
        <div>
          <p>Seu IMC é {imc} e sua classificação é {classificacao}</p>
        </div>
      }
    </div>
  );
};

export default ImcCalculator;