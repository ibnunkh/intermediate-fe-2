import Region from '../molecules/Region'

export default function NumberPhone() {
    return (
        <>
            <div class="numberPhone">
                <Region />
                <input type="tel" id="numberPhone" name="numberPhone" className="inputNumber" required/>
            </div>
        </>
    )
}