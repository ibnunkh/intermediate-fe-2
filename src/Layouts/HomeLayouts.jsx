import NavBar from "../components/organisems/NavBar";
import Footer from "../components/organisems/Footer";

export default function HomeLayouts(props) {
    const {children} = props;
    return (
        <>
            <header>
                <nav>
                    <NavBar />
                </nav>
            </header>

            <main>
                <div className="container">
                    {children}
                </div>
            </main>

            <footer>
                <Footer />
            </footer>
        </>
    )
}