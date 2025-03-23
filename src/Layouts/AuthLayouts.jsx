import NavBar from "../components/organisems/NavBar";
import Heading from "../components/molecules/Heading";
import styles from "../styles/Login.module.css"

export default function AuthLayouts(props) {
    const {children} = props;
    return (
        <>
            <header>
                <nav>
                    <NavBar />
                </nav>
            </header>
            
            <main>
                <div className={styles.loginContainer}>
                    <div className={styles.heading}>
                        <Heading title="Masuk ke Akun" description="Yuk, lanjutin belajarmu di videobelajar." />
                    </div>
                    <form action="" className={styles.form}>
                        {children}
                    </form>
                </div>
            </main>
        </>
    )
}