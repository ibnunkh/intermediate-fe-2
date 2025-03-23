import btnGoogle from '../../assets/images/google-icon.svg'
import styles from '../../styles/Login.module.css'

export default function FormButton() {
    return (
        <>
            <button type="button" className={styles.btnGoogle}>
                <img className={styles.googleIcon} src={btnGoogle} alt="google-icon" />
                <span>Masuk dengan Google</span>
            </button> 
        </>
    )
}