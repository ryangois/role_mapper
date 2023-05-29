import './Colaborator.css'

const Colaborator = ({ name, image, role, backgroundColor }) => {
    let userGitHub = "https://github.com/" + image
    return (
        <a className='card' href={userGitHub} target="_blank" rel="noopener noreferrer">
            <div className='colaborator'>
                <div className='header' style={{ backgroundColor: backgroundColor }}>

                    <img src={userGitHub + ".png"} alt='props.name' />
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