import { useState } from 'react'
import Button from '../Button'
import TextField from '../TextField'
import Select from '../Select'
import './form.css'

const Form = ({ onRegister, teams }) => {

    const [name, setName] = useState('')
    const [role, setCargo] = useState('')
    const [image, setImagem] = useState('')
    const [team, setTime] = useState('')

    const onSumited = (event) => {
        event.preventDefault()
        onRegister({
            name,
            role,
            image,
            team
        })
        setName("")
    }

    return (
        <section className="form-container">
            <form className="form" onSubmit={onSumited}>
                <h2>Fill out the form to create the collaborator's card</h2>
                <TextField
                    required={true}
                    label='Name'
                    placeholder='Write a name'
                    value={name}
                    onChanged={value => setName(value)}
                />
                <TextField
                    required={true}
                    label='Role'
                    placeholder='Inform the role'
                    value={role}
                    onChanged={value => setCargo(value)}
                />
                <TextField
                    required={true}
                    label='GitHub'
                    placeholder='Inform the username'
                    onChanged={value => setImagem(value)}
                />
                <Select
                    required={true}
                    label='Team'
                    items={teams}
                    value={team}
                    onChanged={value => setTime(value)}
                />
                <Button text='Create Card' />
            </form>
        </section>
    )
}

export default Form