import './colaborador.css'
import { AiFillCloseCircle } from 'react-icons/ai';

const Colaborador = ({ colaborador, corDeFundo, aoDeletar }) => {
    let userGitHub = "https://github.com/" + colaborador.imagem
    return (
        <div className="colaborador">
            <AiFillCloseCircle size={42} className="deletar" onClick={aoDeletar} />
            <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
                <a href={userGitHub} target="_blank" rel="noopener noreferrer"><img src={userGitHub + ".png"} alt={colaborador.nome} /></a>
            </div>
            <div className="rodape">
                <h4>{colaborador.nome}</h4>
                <h5>{colaborador.cargo}</h5>
            </div>
        </div>)
}

export default Colaborador