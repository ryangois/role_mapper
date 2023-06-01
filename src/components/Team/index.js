import Colaborator from '../Colaborator'
import './team.css'

const Team = ({ team, colaborators, onDelete }) => {
    return (
        colaborators.length > 0 && <section className='team' style={{ backgroundImage: 'url(/images/fundo.png)', backgroundColor: team.primaryColor }}>
            <input value={team.secondaryColor} type='color' className='color-input' />
            <h3 style={{ borderColor: team.secondaryColor }}>{team.name}</h3>
            <div className='colaborators'>
                {colaborators.map((colaborator, indice) => <Colaborator key={indice} colaborator={colaborator} corDeFundo={team.secondaryColor} onDelete={onDelete} />)}
            </div>
        </section>
    )
}

export default Team