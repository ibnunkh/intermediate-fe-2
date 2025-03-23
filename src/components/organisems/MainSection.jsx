import HeroImage from '../molecules/HeroImage'
import TitleSection from '../molecules/TitleSection'
import Tabs from '../molecules/Tabs'
import CardFrame from '../organisems/CardFrame'
import Banner from '../molecules/Banner'
export default function MainSection() {
    return (
        <>
            <div className="heroImage">
                <HeroImage />
            </div>
            <section className="card-section">
                <TitleSection />
                <Tabs />
                <CardFrame />
            </section>
            <div className="banner">
                <Banner />
            </div>
        </>
    )
}