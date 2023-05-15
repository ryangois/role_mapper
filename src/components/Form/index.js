import TextField from '../TextField'
import './Form.css'

const Form = () => {
    return (
        <section className='form'>
            <form>
                <h2>Fill in the data to create the collaborator's card.
                </h2>
                <TextField label="Name" placeholder="Write a Name" />
                <TextField label="Role" placeholder="Write a Role" />
                <TextField label="Image" placeholder="Write the image adress" />
            </form>
        </section>
    )
}

export default Form