import './Colaborator.css'
import { AiFillCloseCircle } from 'react-icons/ai'

const Colaborator = ({ colaborator, backgroundColor, onDelete }) => {
    let userGitHub = "https://github.com/" + colaborator.image
    return (
        <div className='colaborator'>
            <AiFillCloseCircle size={42} className='delete' onClick={onDelete} />
            <div className='header' style={{ backgroundColor: backgroundColor }}>

                <a href={userGitHub} target="_blank" rel="noopener noreferrer"><img src={userGitHub + ".png"} alt={colaborator.name} /></a>
            </div>
            <div className='footer'>
                <h4>{colaborator.name}</h4>
                <h5>{colaborator.role}</h5>
            </div>
        </div>
    )
}

export default Colaborator