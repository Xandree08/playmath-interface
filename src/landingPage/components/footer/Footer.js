import { IoCalculatorOutline } from "react-icons/io5"
import "./Footer.css"
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa"

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="footer-logo">
                    <div className="footer-logo-title">
                        <IoCalculatorOutline />
                        <span> MathGames </span>
                    </div>
                    <p>Aprenda matemática de forma divertida e interativa com nossos jogos educativos.</p>
                    <div className="footer-logo-icons">
                        <FaFacebook />
                        <FaTwitter />
                        <FaInstagram />
                        <FaYoutube />
                    </div>
                </div>
                <div className="footer-list">
                    <ul>
                        <h3>Jogos</h3>
                        <li><a>Adição</a></li>
                        <li><a>Subtração</a></li>
                        <li><a>Multiplicação</a></li>
                    </ul>
                    <ul>
                        <h3>Recursos</h3>
                        <li><a>Para professores</a></li>
                        <li><a>Para Pais</a></li>
                        <li><a>Planos de Aulas</a></li>
                    </ul>
                    <ul>
                        <h3>Grupo</h3>
                        <li><a>Sobre-nós</a></li>
                        <li><a>Contato</a></li>
                        <li><a>Termos de Uso</a></li>
                        <li><a>Política de Privacidade</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-copyright">
                <p>© 2025 MathGames. Todos os direitos reservados.</p>
            </div>
        </div>
    )
}

export default Footer