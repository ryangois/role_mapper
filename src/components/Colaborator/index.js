import './Colaborator.css'

const Colaborator = ({ name, image, role}) => {
    return (
        <div className='colaborator'>
            <div className='header'>
                
                <a href={image} target="_blank" rel="noopener noreferrer"> <img src={image + ".png"} alt='props.name' /></a>
            </div>
            <div className='footer'>
                <h4>{name}</h4>
                <h5>{role}</h5>
            </div>
        </div>
    )
}

export default Colaborator