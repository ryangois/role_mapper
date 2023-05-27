import Colaborator from '../Colaborator'
import './Team.css'

const Team = (props) => {
    return (
        props.colaborators.length > 0 && <section className='team' style={{ backgroundColor: props.secondaryColor }}>
            <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
            <div className='colaborators'>
                {props.colaborators.map(colaborator => <Colaborator name={colaborator.name} role={colaborator.role} image={colaborator.image} />)}
            </div>
        </section>
    )
}

export default Team