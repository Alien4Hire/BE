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

export default function Home() {
	return (
		<div className={styles.container}>
			<Topbar />
			<Navbar />
			<Hero />
			<Collections />
			<SectionTwo />
			<SectionThree />
			<SectionFour />
			<SectionFive />
			<SectionSix />
			<SectionSeven />
		</div>
	);
}
