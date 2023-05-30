import Colaborator from '../Colaborator'
import './Team.css'

const Team = (team, colaborators, onDelete, colorChange) => {
    return (
        colaborators.length > 0 && <section className='team' style={{ backgroundImage: 'url(/images/fundo.png)', backgroundColor: team.secondaryColor }}>
            {/* <input onChange={evento => colorChange(evento.target.value, team.name)} value={team.secondaryColor} type='color' className='color-input' /> */}
            <h3 style={{ borderColor: team.primaryColor }}>{team.name}</h3>
            <div className='colaborators'>
                {colaborators.map((colaborator, index) => {
                    return <Colaborator key={index} colaborator={colaborator} backgroundColor={team.primaryColor} onDelete={onDelete} />
                })}
            </div>
        </section>
    )
}

export default Team