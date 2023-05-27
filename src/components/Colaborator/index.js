import './Colaborator.css'

const Colaborator = ({ name, image, role }) => {
    return (
        <a className='card' href={image} target="_blank" rel="noopener noreferrer">
            <div className='colaborator'>
                <div className='header'>

                    <img src={"https://github.com/" + image + ".png"} alt='props.name' />
                </div>
                <div className='footer'>
                    <h4>{name}</h4>
                    <h5>{role}</h5>
                </div>
            </div>
        </a>
    )
}

export default Colaborator