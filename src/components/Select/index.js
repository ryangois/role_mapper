import './select.css'

const Select = ({ label, items, value, onChanged, required = false }) => {
    return (
        <div className="select">
            <label>{label}</label>
            <select required={required} value={value} onChange={event => onChanged(event.target.value)}>
                <option />
                {items.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>)
}

export default Select