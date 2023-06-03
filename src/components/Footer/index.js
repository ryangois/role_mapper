
import './footer.css'
import { AiFillGithub, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'

const Footer = () => {

    const socialLinks = {
        size: 42,
        fill: '#FFFFFF'
    }

    return (
        <footer className="page-footer">
            <section>
                <ul>
                    <li>
                        <a href="twitter.com" target="_blank">
                            <AiOutlineTwitter {...socialLinks} />
                        </a>
                    </li>
                    <li>
                        <a href="https://instagram.com/ryan.gois" target="_blank">
                            <AiOutlineInstagram {...socialLinks} />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/ryangois" target="_blank">
                            <AiFillGithub {...socialLinks} />
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <img src="/images/logo.png" alt="" />
            </section>
            <section>
                <p>
                    Developed by Ryan Gois.
                </p>
            </section>
        </footer>)
}

export default Footer