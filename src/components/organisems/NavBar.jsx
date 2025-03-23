
import Logo from '../../assets/images/Logo-videobelajar.svg';
import Avatar from '../../assets/images/Avatar-profile.svg';
import styles from '../../styles/Login.module.css'

export default function NavBar() {
    return (
        <>
            <div className={styles.navbar}>
            <img src={Logo}/>
                <ul>
                    <p>Kategori</p>
                </ul>
            </div>
            <div className={styles.avatar}>
                <img src={Avatar}/>
            </div>
            {/* <div className="menu-icon">
                <i className="ph ph-list"></i>
            </div> */}
        </>
    )
}