import './TextField.css'

const TextField = ({ label, placeholder, value, onChanged, required = false }) => {

    const onTyped = (event) => {
        onChanged(event.target.value)
    }

    return (
        <div className="text-field">
            <label>{label}</label>
            <input value={value} onChange={onTyped} required={required} placeholder={placeholder} />
        </div>
    )
}

export default TextField