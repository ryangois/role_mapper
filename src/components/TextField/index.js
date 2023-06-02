import './text-field.css'

const TextField = ({ type = 'text', label, placeholder, value, onChanged, required = false }) => {
    return (
        <div className={`text-field text-field-${type}`}>
            <label>{label}</label>
            <input
                type={type}
                value={value}
                onChange={event => onChanged(event.target.value)}
                required={required}
                placeholder={placeholder}
            />
        </div>
    )
}

export default TextField