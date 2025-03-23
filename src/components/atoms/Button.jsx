import styles from '../../styles/Login.module.css'
export default function Button() {
    return (
        <>
            <button type="submit" className={styles.btnMasuk} >Masuk</button>
            <button type="submit" className={styles.btnDaftar} >Daftar</button>
        </>
    )
}