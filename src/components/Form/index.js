import Button from '../Button'
import Select from '../Select'
import TextField from '../TextField'
import './Form.css'

const Form = () => {

    const times = [
        'Fullstack',
        'Front-End',
        'Back-End',
        'Ux & Design',
        'Mobile',
        'QA',
        'Data Science'
    ]

    return (
        <section className='form'>
            <form>
                <h2>Fill in the data to create the collaborator's card.
                </h2>
                <TextField label="Name" placeholder="Write a Name" />
                <TextField label="Role" placeholder="Write a Role" />
                <TextField label="Image" placeholder="http://" />
                <Select label="Team" itens={times} />
                <Button>
                    Create Card
                </Button>
            </form>
        </section>
    )
}

export default Form