import './text-field.css'

const TextField = ({ label, placeholder, value, aoAlterado, obrigatorio = false }) => {
    return (<div className='text-field'>
        <label>{label}</label>
        <input value={value} onChange={evento => aoAlterado(evento.target.value)} required={obrigatorio} placeholder={placeholder}/> 
    </div>)
}

export default TextField