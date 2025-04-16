import "./CommentsCard.css"

function CommentsCard ({name , profession , message}){
    return (
        <div className="comments-card">
            <div className="comments-card-user">
                <span>
                    {name.charAt(0).toUpperCase()}
                </span>
                <div className="comments-card-names">
                    <h4>{name}</h4>
                    <p>{profession}</p>
                </div>
            </div>
            <p>
                {message}
            </p>
        </div>
    )
}

export default CommentsCard