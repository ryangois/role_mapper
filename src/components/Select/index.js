import './Select.css'

const Select = (props) => {
    return (
        <div className='select'>
            <label>{props.label}</label>
            <select onChange={event => props.onChanged(event.target.value)} value={props.value}>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default Select