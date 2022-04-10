import React from "react";
import Image from "next/image";
import style from '../../styles/SectionSeven.module.css'

const SectionSeven = () => {
    return (
        <React.Fragment>
            <div className={style.section}>
                <div className={style.left}>
                    <h1>2022 CORE CASES</h1>
                    <p className={style.paragraph}>Discover our curated selection of extraordinary pieces. <br/> Unique touches and high quality materials combined in <br/> shades that will make you stand out.</p>
                    <button className={style.button}>SHOP NOW</button>
                </div>
                <Image alt='shop' src={"/images/sectionSeven.png"} height={"518px"} width={"864px"} />
            </div>
        </React.Fragment>
    )
}

export default SectionSeven;