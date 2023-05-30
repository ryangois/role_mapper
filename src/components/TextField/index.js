import './campo-texto.css'

const TextField = ({ label, placeholder, value, aoAlterado, obrigatorio = false }) => {
    return (<div className='campo-texto'>
        <label>{label}</label>
        <input value={value} onChange={evento => aoAlterado(evento.target.value)} required={obrigatorio} placeholder={placeholder}/> 
    </div>)
}

export default TextField