import './colaborador.css'
import { AiFillCloseCircle } from 'react-icons/ai';

const Colaborador = ({ colaborador, corDeFundo, aoDeletar }) => {
    let userGitHub = "https://github.com/" + colaborador.image
    return (
        <div className="colaborador">
            <AiFillCloseCircle size={42} className="deletar" onClick={aoDeletar} />
            <div className="header" style={{ backgroundColor: corDeFundo }}>
                <a href={userGitHub} target="_blank" rel="noopener noreferrer"><img src={userGitHub + ".png"} alt={colaborador.name} /></a>
            </div>
            <div className="rodape">
                <h4>{colaborador.name}</h4>
                <h5>{colaborador.role}</h5>
            </div>
        </div>)
}

export default Colaborador