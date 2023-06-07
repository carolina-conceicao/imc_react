import { useState } from "react";
import styles from './Formulario.module.css';

const Formulario = ({ calcularIMC }) => {
    const [altura, setAltura] = useState('')
    const [peso, setPeso] = useState('')

    const enviarFormulario = (e) => {
        e.preventDefault();
        calcularIMC(altura, peso);
};

    return (
        <form onSubmit={enviarFormulario} className="styles.form">
            <label>
                Altura (em metros):
                <input type="text" placeholder="Ex: 1.73" onChange={evento => setAltura(parseFloat(evento.target.value))} ></input>
            </label>
            <br />
            <label>
                Peso (em kg):
                <input type="text" placeholder="Ex: 65" onChange={evento => setPeso(parseFloat(evento.target.value))} ></input>
            </label>
            <br />
            <button type="submit">Calcular IMC</button>
        </form>
    )
}

export default Formulario;