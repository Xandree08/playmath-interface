import { FaHamburger } from "react-icons/fa"
import "./Navbar.css"
import { IoCalculatorOutline, IoMenu } from 'react-icons/io5'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <IoCalculatorOutline />
                    <span> MathGames </span>
                </div>
                <div className="navbar-list">
                    <li><a>Início</a></li>
                    <li><a>Jogos</a></li>
                    <li><a>Desafios</a></li>
                    <li><a>Sobre</a></li>
                    <a className="navbar-button"> Começar </a>
                </div>
                <div className="navbar-menu">
                    <IoMenu/>
                </div>
            </div>
        </div>
    )
}

export default Navbar