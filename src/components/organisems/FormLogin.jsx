import FormField from "../molecules/FormField"
import Button from "../atoms/Button"
import OtherAction from "../atoms/OtherAction"
import Divider from "../atoms/Divider"
import FormButton from "../molecules/FormButton"
import styles from "../../styles/Login.module.css"
export default function FormLogin() {
    return (
        <>
            <fieldset className={styles.formGroup}>
                <FormField label="Email" type="email" placeholder="babymonster@yg.co.id" name="email" id="email" />
                <FormField label="Password" type="password" placeholder="********" name="password" id="password" />
            </fieldset>
            <OtherAction />
            <div className={styles.formButton}>
                <Button />
            </div>
            <div className={styles.divider}>
                <Divider />
            </div>
            <div className={styles.formButton}>
                <FormButton />
            </div>
        </>
    )
}