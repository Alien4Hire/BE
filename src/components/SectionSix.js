import React, {useState} from "react";
import Image from "next/image";
import LeftArrow from "./icons/leftArrow";
import RightArrow from "./icons/rightArrow";

const SectionSix = ({style}) => {
    const [name, setName] = useState('HAVANA HALF-FRAME');
    const [cost, setCost] = useState('$165');

    const Items = [
        {
            name: 'help',
            image: '/images/glasses-1.png'
        },
        {
            name: 'help',
            image: '/images/glasses-1.png'
        },
        {
            name: 'help',
            image: '/images/glasses-1.png'
        },
    ]

    return (
        <React.Fragment>
            <div className={style.section}>
                <h1>{name}</h1>
                <p className={style.subheader}>Style number #23657M</p>
                <div className={style.sunglasses}>
                    <div className={style.arrows}>
                        <LeftArrow />
                        <p className={style.left}>Last</p>
                    </div>
                    <Image alt='glasses' src={"/images/glassesfloat.png"} height={"647px"} width={"1407px"} />
                    <div className={style.arrows}>
                        <p className={style.right}>Next</p>
                        <RightArrow />
                    </div>
                </div>
                <h1 className={style.noMargin}>{cost}</h1>
                <p className={style.belowtext}>AS SHOWN</p>
                <div className={style.wideButton}>
                    <button className={style.button}>ADD TO CART</button>
                </div>
                <div className={style.belowslider}>
                    <div className={style.titleSlider}>
                        <p className={style.titlepoint}>Color options</p>
                    </div>
                    <div className={style.slider}>
                        <LeftArrow />
                        <div className={style.box}>
                            {Items.map((item) => {
                                return (
                                    <div className={style.indCard} key={item}>
                                        <Image alt='womens' className={style.image} src={item.image} width={"60px"} height={"60px"} />
                                        <p className={style.sub}>{item.name}</p>
                                    </div>
                                )
                            })}
                        </div>
                        <RightArrow />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default SectionSix;