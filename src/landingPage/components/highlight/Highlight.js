import { FaArrowRight } from "react-icons/fa"
import HighlightCard from "../../cards/HighlightCard"
import "./Highlight.css"

const Highlight = () => {

    const destaque = [
        {
            image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyMDY5ODg3OA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300",
            title: "Soma Rápida",
            description: "Teste sua velocidade com adição simples em um jogo contra o tempo",
            category: "Soma",
            level: "Fácil"

        },
        {
            image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyMDY5ODg3OA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300",
            title: "Multiplicação Mágica",
            description: "Aprenda tabuada de forma iterativa e divertida.",
            category: "Multiplicação",
            level: "Médio"
        },
        {
            image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyMDY5ODg3OA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300",
            title: "Divisão Desafiadora",
            description: "Resolva problemas de divisão em diferentes níveis de dificuldade.",
            category: "Divisão",
            level: "Difícil"
        }
    ]
    
    return (
        <div className="destaque">
            <div className="destaque-container">
                <div className="destaque-title">
                    <h2>Jogos em Destaque</h2>
                    <a href=""> Ver Todos <FaArrowRight /></a>
                </div>
                <section className="destaque-card">
                    {
                        destaque.map(map => (
                            <HighlightCard
                                title={map.title}
                                category={map.category}
                                description={map.description}
                                image={map.image}
                                level={map.level} />
                        ))
                    }
                </section>
            </div>
        </div>
    )
}

export default Highlight