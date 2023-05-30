import { useState } from 'react'
import Button from '../Button'
import Select from '../Select'
import TextField from '../TextField'
import './Form.css'

const Form = ({onSubmited, teams}) => {

    const [name, setName] = useState('')
    const [role, setRole] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')

    const onSave = (e) => {
        e.preventDefault()
        onSubmited({
            name,
            role,
            image,
            team
        })
        setName("")
        setRole("")
        setImage("")
        setTeam("")
    }

    return (
        <section className='form'>
            <form onSubmit={onSave}>
                <h2>Fill in the data to create the collaborator's card.</h2>
                <TextField
                    label="Name"
                    placeholder="Write a Name"
                    value={name}
                    onChanged={value => setName(value)}
                />

                <TextField
                    label="Role"
                    placeholder="Write a Role"
                    value={role}
                    onChanged={value => setRole(value)}
                />
                <TextField
                    label="GitHub"
                    placeholder="GitHub username"
                    value={image}
                    onChanged={value => setImage(value)}
                />
                <Select
                    label="Team"
                    itens={teams}
                    value={team}
                    onChanged={value => setTeam(value)}
                />
                <Button>
                    Create Card
                </Button>
            </form>
        </section>
    )
}

export default Form