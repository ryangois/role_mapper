import Colaborator from '../Colaborator'
import './time.css'

const Time = ({ time, colaboradores, aoDeletar }) => {
    return (

        colaboradores.length > 0 && <section className='time' style={{ backgroundImage: 'url(/images/fundo.png)', backgroundColor: time.corPrimaria }}>
            <h3 style={{ borderColor: time.corSecundaria }}>{time.name}</h3>
            <div className='colaboradores'>
                {colaboradores.map((colaborator, indice) => <Colaborator key={indice} colaborator={colaborator} corDeFundo={time.corSecundaria} aoDeletar={aoDeletar} />)}
            </div>
        </section>

    )
}

export default Time