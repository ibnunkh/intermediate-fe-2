import FormField from "../molecules/FormField"
import Button from "../atoms/Button"
import OtherAction from "../atoms/OtherAction"
import Divider from "../atoms/Divider"
import FormButton from "../molecules/FormButton"
import NumberPhone from "../molecules/NumberPhone"

export default function FormRegister() {
    return (
        <>
            <fieldset className="formGroup">
                <FormField label="Nama Lengkap" type="text" placeholder="Nadin Amizah" name="fullname" />
                <FormField label="E-Mail" type="email" placeholder="babymonster@yg.co.id" name="email" />
                <NumberPhone />
                <FormField label="Kata Sandi" type="password" placeholder="********" name="password" />
                <FormField label="Konfirmasi Kata Sandi" type="password" placeholder="********" name="confirmPassword" />
            </fieldset>
            <OtherAction />
            <div className="formButton">
                <Button type="submit" className="btn-masuk" children="Masuk" />
                <Button type="submit" className="btn-daftar" children="Daftar" />
            </div>
            <div className="divider">
                <Divider />
            </div>
            <div className="formButton">
                <FormButton />
            </div>
        </>
    )
}