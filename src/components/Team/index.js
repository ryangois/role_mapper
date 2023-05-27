import Colaborator from '../Colaborator'
import './Team.css'

const Team = (props) => {
    return (
        <section className='team' style={{ backgroundColor: props.secondaryColor }}>
            <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
            <Colaborator />
        </section>
    )
}

export default Team