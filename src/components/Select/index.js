import './Select.css'

const Select = ({ label, items, value, onChanged, required = false }) => {
    return (
        <div className='select'>
            <label>{label}</label>
            <select required={required} onChange={event => onChanged(event.target.value)} value={value}>
                <option value=""></option>
                {items.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default Select