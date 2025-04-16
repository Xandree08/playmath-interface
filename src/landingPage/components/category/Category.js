import "./Category.css"
import CategoryCard from '../../cards/CategoryCard'
import { FaArrowRight, FaDice } from 'react-icons/fa'
import { AiOutlineFunction } from "react-icons/ai"
import { MdOutlineDataArray } from "react-icons/md"
import { TbMathXDivideY2 } from "react-icons/tb"

const Category = () => {

    const categoria = [
        {
            svg: <AiOutlineFunction />,
            title: "Adição",
            description: "Pratique somas de números com diferentes níveis de dificuldade",
            backgroundColor: "#8B5CF6"
        },
        {
            svg: <MdOutlineDataArray />,
            title: "Matrizes",
            description: "Aprenda subtrair números de forma divertida e eficaz.",
            backgroundColor: "grey"
        },
        {
            svg: <TbMathXDivideY2 />,
            title: "Funções de Divisões",
            description: "Aprenda resolver divisões com estratégias inteligentes.",
            backgroundColor: "#f97316"
        },
        {
            svg: <FaDice />,
            title: "Probabilidade",
            description: "Domine a tabuada com jogos interativos e desafiadores",
            backgroundColor: "#0ea5e9"
        }
    ]
    
    return (
        <div className="category">
            <div className="category-container">
                <div className="category-title">
                    <h2>Categoria de Jogos</h2>
                    <a>Explorar categorias <FaArrowRight/></a>
                </div>
                <div className="category-cards">
                    {
                        categoria.map(map => (
                            <CategoryCard
                                svg={map.svg}
                                text={map.description}
                                title={map.title}
                                backgroundColor={map.backgroundColor}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Category