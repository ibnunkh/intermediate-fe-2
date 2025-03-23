import Flag from '../../assets/images/Indonesia (ID).svg'
 
export default function Region() {
    return (
        <>
            <div className="region">
                <label for="flag" className="flag">
                    <img className="indonesiaFlag" src={Flag} alt="IndonesiaFlag"/>
                </label>
                <select name="code" id="code">
                    <option value="+62">+62</option>
                </select>
            </div>
        </>
    )
}