import "./CategoryCard.css"

function CategoryCard ({svg,title,text,backgroundColor}){
    return (
        <div className="category-card">
            <span style={{backgroundColor:`${backgroundColor}`}}>{svg}</span>
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    )
}

export default CategoryCard