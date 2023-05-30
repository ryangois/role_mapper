import Colaborator from '../Colaborator'
import './Team.css'

const Team = (props, onDelete) => {
    return (
        props.colaborators.length > 0 && <section className='team' style={{ backgroundColor: props.secondaryColor }}>
            <input value={props.primaryColor} type='color' className='color-input' />
            <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
            <div className='colaborators'>
                {props.colaborators.map(colaborator => {
                    return <Colaborator backgroundColor={props.primaryColor} key={colaborator.name} name={colaborator.name} role={colaborator.role} image={colaborator.image} onDelete={onDelete} />
                })}
            </div>
        </section>
    )
}

export default Team