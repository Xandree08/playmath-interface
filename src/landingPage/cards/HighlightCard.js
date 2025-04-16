import "./HighlightCard.css"
import { FaArrowRight } from "react-icons/fa"

function HighlightCard ({image,title,description,level,category}){
    return (
        <div className="highlight-card">
            <img src={image}/>
            <div className="highlight-card-content">
                <div className="highlight-card-content-title">
                <h3>{title}</h3>
                <span> {level} </span>
                </div>
                <p>{description}</p>
                <div className="highlight-card-content-categoty" >
                    <span>{category}</span>
                    <a href=""> Jogar Agora <FaArrowRight/> </a>
                </div>
            </div>
        </div>
    )
}

export default HighlightCard