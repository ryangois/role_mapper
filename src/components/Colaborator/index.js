import { AiFillCloseCircle } from 'react-icons/ai'
import './Colaborator.css'

const Colaborator = ({ name, image, role, backgroundColor, onDelete }) => {
    let userGitHub = "https://github.com/" + image
    return (
        <div className='colaborator'>
            <AiFillCloseCircle size={42} className='delete' onClick={onDelete} />
            <div className='header' style={{ backgroundColor: backgroundColor }}>

                <a href={userGitHub} target="_blank" rel="noopener noreferrer"><img src={userGitHub + ".png"} alt='name' /></a>
            </div>
            <div className='footer'>
                <h4>{name}</h4>
                <h5>{role}</h5>
            </div>
        </div>
    )
}

export default Colaborator