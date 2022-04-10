import React from "react";
import style from '../../styles/Card.module.css'
import Image from "next/image";

const Card = ({image, children, isBlack, offset}) => {
    return (
        <React.Fragment>
        <div className={!isBlack ? style.cardtwo : style.card}>
            <Image alt='offset' className={offset ? style.offsetImage : style.image} src={image} width={"350px"} height={"350px"} />
            <div className={isBlack ? style.bottomCard : style.bottomCardTwo}>
                <span className={style.children}>{children}</span>
            </div>
        </div>
        </React.Fragment>
    )
}

export default Card;