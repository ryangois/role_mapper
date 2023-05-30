import './lista-suspensa.css'

const ListaSuspensa = ({ label, items, value, aoAlterado, obrigatorio = false }) => {
    return (<div className="lista-suspensa">
        <label>{label}</label>
        <select required={obrigatorio} value={value} onChange={evento => aoAlterado(evento.target.value)}>
            <option />
            {items.map(item => <option key={item}>{item}</option>)}
        </select>
    </div>)
}

export default ListaSuspensa