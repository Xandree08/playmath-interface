import CommentsCard from "../../cards/CommentsCard"
import "./Comments.css"

const Comments = () => {

    const comments = [
        {
            name: "Ana Silva",
            profession: "Mãe de aluno" ,
            message: " '' Meu filho melhorou significativamente nas aulas de matemática depois de começar a usar este site. Os jogos são divertidos e educativos!'' "
        },
        {
            name: "Carlos Oliveira",
            profession: "Professor de matemática" ,
            message: '"Como professor, recomendo estes jogos para todos os meus alunos. É uma maneira excelente de praticar conceitos matemáticos."'
        },
        {
            name: "Júlia Santos",
            profession: "Estudante, 12 anos" ,
            message: '"Finalmente encontrei uma maneira divertida de praticar matemática! Os jogos são viciantes e me ajudaram muito."'
        },
    ]

    return (
        <div className="comments">
            <div className="comments-container">
                <div className="comments-title">
                    <h2> O que nossos usuários dizem</h2>
                </div>
                <div className="comments-cards">
                    {
                        comments.map(map => (
                            <CommentsCard
                                message={map.message}
                                profession={map.profession}
                                name={map.name}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Comments