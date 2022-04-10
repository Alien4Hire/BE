import Topbar from '../src/components/Topbar';
import Hero from '../src/components/Hero';
import Navbar from '../src/components/Navbar';
import Collections from '../src/components/Collections';
import SectionTwo from '../src/components/SectionTwo';
import SectionThree from '../src/components/SectionThree';
import SectionFour from '../src/components/SectionFour';
import SectionFive from '../src/components/SectionFive';
import SectionSix from '../src/components/SectionSix';
import SectionSeven from '../src/components/SectionSeven';
import styles from '../styles/Home.module.css';
import TopbarStyles from '../styles/TopBar.module.css';
import NavbarStyles from '../styles/Navbar.module.css';
import HeroStyles from '../styles/Hero.module.css';
import CollectionsStyles from '../styles/Collections.module.css';
import SectionTwoStyles from '../styles/SectionTwo.module.css';
import SectionThreeStyles from '../styles/SectionThree.module.css';
import SectionFourStyles from '../styles/SectionFour.module.css';
import SectionFiveStyles from '../styles/SectionFive.module.css';
import SectionSixStyles from '../styles/SectionSix.module.css';
import SectionSevenStyles from '../styles/SectionSeven.module.css';
import CardStyles from '../styles/Card.module.css';

export default function Home() {
	return (
		<div className={styles.container}>
			<Topbar style={TopbarStyles}/>
			<Navbar style={NavbarStyles}/>
			<Hero style={HeroStyles}/>
			<Collections style={CollectionsStyles} CardStyles={CardStyles}/>
			<SectionTwo style={SectionTwoStyles}/>
			<SectionThree style={SectionThreeStyles}/>
			<SectionFour style={SectionFourStyles}/>
			<SectionFive style={SectionFiveStyles}/>
			<SectionSix style={SectionSixStyles}/>
			<SectionSeven style={SectionSevenStyles}/>
		</div>
	);
}
