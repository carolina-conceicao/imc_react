import { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Tabela from "./components/Tabela";
import styles from "./global.css";

function App() {
  const [imc, setIMC] = useState('');
  const [classificacao, setClassificacao] = useState('');

  useEffect(() => {
    if (imc === '') {
      setClassificacao('');
      return;
    }

    if (imc < 18.5) {
      setClassificacao('Abaixo do peso');
    } else if (imc < 25) {
      setClassificacao('Peso normal');
    } else if (imc < 30) {
      setClassificacao('Sobrepeso');
    } else if (imc < 35) {
      setClassificacao('Obesidade Grau I');
    } else if (imc < 40) {
      setClassificacao('Obesidade Grau II');
    } else {
      setClassificacao('Obesidade Grau III');
    }
  }, [imc]);

  const calcularIMC = (altura, peso) => {
    const imcCalculado = peso / (altura * altura);
    setIMC(imcCalculado.toFixed(2));
  };

  return (
    <>
      <h1>Calculando o IMC</h1>
      <Formulario calcularIMC={calcularIMC} />
      {imc && classificacao && (
        <Tabela imc={imc} classificacao={classificacao} />
      )}
    </>
  )
}

export default App
