import React from "react";
import style from '../../styles/SectionThree.module.css'
import Image from "next/image";

const SectionThree = () => {
    return (
        <React.Fragment>
            <div className={style.background}>
                <Image alt='mens' src={"/images/guyGlasses.png"} height={"388px"} width={"648px"} />
                <div className={style.right}>
                    <div className={style.section}>
                        <h1 className={style.title}>Exceptional Pieces</h1>
                        <p className={style.width}>Discover our curated selection of extraordinary pieces. <br/> Unique touches and high quality materials combined in <br/> shades that will make you stand out.</p>
                        <button className={style.button}>For Men</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default SectionThree;