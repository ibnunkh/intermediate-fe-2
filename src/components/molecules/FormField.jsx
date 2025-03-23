import Label from '../atoms/Label'
import Input from '../atoms/Input'
import styles from '../../styles/Login.module.css'

export default function FormField(props) {
    const {label, name, type, placeholder, id} = props;
    return (
        <div className={styles.formField}>
            <Label htmlFor={name}>{label}</Label>
            <Input name={name} type={type} placeholder={placeholder} id={id} className={styles.formInput} />
        </div>
    )
}