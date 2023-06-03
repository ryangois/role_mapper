import Colaborator from '../Colaborator'
import './team.css'
import hexToRgba from 'hex-to-rgba';

const Team = ({ team, colaborators, onDelete, changeColor, onFavorite }) => {
    return (
        colaborators.length > 0 && <section className='team' style={{ backgroundImage: 'url(/images/background.png)', backgroundColor: hexToRgba(team.color, '0.6') }}>
            <input onChange={event => changeColor(event.target.value, team.id)} value={team.color} type='color' className='color-input' />
            <h3 style={{ borderColor: team.color }}>{team.name}</h3>
            <div className='colaborators'>
                {colaborators.map((colaborator, indice) => {
                    return (
                        <Colaborator
                            key={indice}
                            colaborator={colaborator}
                            bgColor={team.color}
                            onDelete={onDelete}
                            onFavorite={onFavorite}
                        />
                    )
                })}
            </div>
        </section>
    )
}

export default Team