import React from "react";
import Image from "next/image";

const SectionFive = ({style}) => {
    return (
        <React.Fragment>
            <div className={style.section}>
                <Image alt='img' src={"/images/sectionfour.png"} width={"1729px"} height={"653px"}/>
                <div className={style.overlay}>
                    <h2 className={style.title}>Exceptional Pieces</h2>
                    <p className={style.content}>Discover our curated selection of extraordinary pieces. <br/> Unique touches and high quality materials combined in <br/> shades that will make you stand out.</p>
                    <button className={style.button}>For Women</button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default SectionFive;