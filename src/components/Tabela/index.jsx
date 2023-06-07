import styles from './Tabela.modules.css'

const Tabela = ({ imc, classificacao }) => {

    return (
        <table>
            <thead>
                <tr>
                    <th>IMC</th>
                    <th>Classificação</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{imc}</td>
                    <td>{classificacao}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Tabela;