import './text-field.css'

const TextField = ({ label, placeholder, value, onChanged, required = false }) => {
    return (
        <div className='text-field'>
            <label>{label}</label>
            <input value={value} onChange={event => onChanged(event.target.value)} required={required} placeholder={placeholder} />
        </div>)
}

export default TextField