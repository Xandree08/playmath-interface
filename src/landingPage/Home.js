import "./Home.css"
import Highlight from "./components/highlight/Highlight";
import Category from "./components/category/Category";
import Comments from "./components/comments/Comments";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import { useEffect, useState } from "react";


function Home() {

    const [isSticky, setIsSticky] = useState(false)

    useEffect(() => {
        const RolandoAbaixo = () => {
            setIsSticky(window.scrollY > 50)
        }
        window.addEventListener("scroll", RolandoAbaixo);
        return () => window.removeEventListener("scroll", RolandoAbaixo);
    }, [])

    return (
        <div className="home">
            <header className={isSticky ? "sticky" : ""}>
                <Navbar />
            </header>
            <Header />
            <Highlight />
            <Category />
            <Comments />
            <Footer />
        </div>
    )
}

export default Home