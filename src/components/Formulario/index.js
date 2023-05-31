import { useState } from 'react'
import Button from '../Button'
import TextField from '../TextField'
import ListaSuspensa from '../ListaSuspensa'
import './formulario.css'

const Formulario = ({ aoCadastrar, teams }) => {

    const [name, setName] = useState('')
    const [role, setCargo] = useState('')
    const [image, setImagem] = useState('')
    const [team, setTime] = useState('')

    const aoSubmeter = (evento) => {
        evento.preventDefault()
        console.log('form enviado', name, role, image, team)
        aoCadastrar({
            name,
            role,
            image,
            team
        })
        setName("")
    }

    return (
        <section className="formulario-container">
            <form className="formulario" onSubmit={aoSubmeter}>
                <h2>Preencha os dados para criar o card do colaborator.</h2>
                <TextField
                    obrigatorio={true}
                    label='Name'
                    placeholder='Write a name'
                    value={name}
                    aoAlterado={value => setName(value)} />
                <TextField
                    obrigatorio={true}
                    label='Role'
                    placeholder='Inform the role'
                    value={role}
                    aoAlterado={value => setCargo(value)} />
                <TextField
                    obrigatorio={true}
                    label='GitHub'
                    placeholder='Inform the username'
                    aoAlterado={value => setImagem(value)} />
                <ListaSuspensa
                    obrigatorio={true}
                    label='Team'
                    items={teams}
                    value={team}
                    aoAlterado={value => setTime(value)} />
                <Button text='Create Card' />
            </form>
        </section>
    )
}

export default Formulario