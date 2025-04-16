import { MdOutlineKeyboardArrowRight } from "react-icons/md"
import "./Header.css"
import { LuBrain } from "react-icons/lu"

const Header = () => {
    return (
        <div className="header">
            <div className="header-container">
                <div className="header-content">
                    <h1>Aprenda Matemática com <strong>Diversão!</strong></h1>
                    <p>Jogos interativos para desenvolver habilidades matemáticas de forma divertida e engajadora para todas as idades.</p>
                    <div className="header-content-button">
                        <a className="header-content-button-1"> Começar a Jogar <MdOutlineKeyboardArrowRight />  </a>
                        <a className="header-content-button-2"> <LuBrain/> Desafio Diários </a>
                    </div>
                </div>
                <div className="header-content-2">
                    <div className="header-content-2-container">
                        <p className="header-content-sub-1"> 1+1</p>
                        <p className="header-content-sub-2"> 5x2</p>
                        <p className="header-content-sub-3" >9/3</p>
                        <p className="header-content-sub-4"> 7-2</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header