import styles from '../../styles/Login.module.css'
export default function Input(props) {
    const {type, placeholder, name, id} = props;
    return (
        <>
            <input type={type} id={id} name={name} placeholder={placeholder} className={styles.formInput} required/>
        </>
    )
}