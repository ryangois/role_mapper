import { useState } from 'react'
import Button from '../Button'
import TextField from '../TextField'
import Select from '../Select'
import './form.css'

const Form = ({ onRegister, teams, registerTeam }) => {

    const [name, setName] = useState('')
    const [role, setRole] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')
    const [teamName, setTeamName] = useState('')
    const [teamColor, setTeamColor] = useState('')

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
                    onChanged={value => setRole(value)}
                />
                <TextField
                    required={true}
                    label='GitHub'
                    placeholder='Inform the username'
                    onChanged={value => setImage(value)}
                />
                <Select
                    required={true}
                    label='Team'
                    items={teams}
                    value={team}
                    onChanged={value => setTeam(value)}
                />
                <Button text='Create Card' />
            </form>
            <form className="form" onSubmit={(event) => {
                event.preventDefault()
                registerTeam({ name: teamName, color: teamColor })
                setTeamName("")
                setTeamColor("")
            }}>
                <h2>Fill out the form to create a new team</h2>
                <TextField
                    required
                    label='Name'
                    placeholder='Write the team name'
                    value={teamName}
                    onChanged={value => setTeamName(value)}
                />
                <TextField
                    required
                    label='Color'
                    placeholder='Inform the team color'
                    value={teamColor}
                    onChanged={value => setTeamColor(value)}
                />
                <Button text='Create a new team' />
            </form>
        </section>
    )
}

export default Form