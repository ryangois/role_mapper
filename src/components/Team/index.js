import Colaborator from '../Colaborator'
import './team.css'

const Team = ({ team, colaboradores, aoDeletar }) => {
    return (

        colaboradores.length > 0 && <section className='team' style={{ backgroundImage: 'url(/images/fundo.png)', backgroundColor: team.corPrimaria }}>
            <h3 style={{ borderColor: team.corSecundaria }}>{team.name}</h3>
            <div className='colaboradores'>
                {colaboradores.map((colaborator, indice) => <Colaborator key={indice} colaborator={colaborator} corDeFundo={team.corSecundaria} aoDeletar={aoDeletar} />)}
            </div>
        </section>

    )
}

export default Team