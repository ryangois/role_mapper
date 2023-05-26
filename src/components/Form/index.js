import { useState } from 'react'
import Button from '../Button'
import Select from '../Select'
import TextField from '../TextField'
import './Form.css'

const Form = (props) => {

    const [name, setName] = useState('')
    const [role, setRole] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')

    const onSave = (e) => {
        e.preventDefault()
        props.onSubmited({
            name,
            role,
            image,
            team
        })
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
                    label="Image"
                    placeholder="http://"
                    value={image}
                    onChanged={value => setImage(value)}
                />
                <Select
                    label="Team"
                    itens={props.teams}
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