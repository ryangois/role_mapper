import { useState } from 'react'
import Button from '../Button'
import TextField from '../TextField'
import ListaSuspensa from '../ListaSuspensa'
import './formulario.css'

const Formulario = ({ aoCadastrar, teams }) => {

    const [name, setName] = useState('')
    const [role, setRole] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')

    const aoSubmeter = (evento) => {
        evento.preventDefault()
        console.log('form enviado', name, role, image, team)
        aoCadastrar({
            name,
            role,
            image,
            team
        })
    }

    return (
        <section className="formulario-container">
            <form className="formulario" onSubmit={aoSubmeter}>
                <h2>Preencha os dados para criar o card do colaborator.</h2>
                <TextField
                    obrigatorio={true}
                    label='name'
                    placeholder='Digite seu name '
                    value={name}
                    aoAlterado={value => setName(value)} />
                <TextField
                    obrigatorio={true}
                    label='role'
                    placeholder='Digite seu role '
                    value={role}
                    aoAlterado={value => setRole(value)} />
                <TextField
                    label='image'
                    placeholder='Informe o endereço da image '
                    aoAlterado={value => setImage(value)} />
                <ListaSuspensa
                    obrigatorio={true}
                    label='teams'
                    items={teams}
                    value={team}
                    aoAlterado={value => setTeam(value)} />
                <Button text='Criar card' />
            </form>
        </section>
    )
}

export default Formulario