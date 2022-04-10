import React from 'react'
import Image from 'next/image';
import style from '../../styles/SectionTwo.module.css'

const SectionTwo = () => {
    return (
        <React.Fragment>
            <div className={style.background}>
                <Image alt='hands' src={"/images/hands.png"} width={"663px"} height={"443px"} />
                <div className={style.contents}>
                    <p className={style.headone}>a portion of every sale goes toward</p>
                    <h2 className={style.headtwo}>mental health awareness</h2>
                    <div className={style.headthree}>
                        <p className={style.headfour}>Ut sapien leo malesuada sed mattis. Et euismod libero in tellus in ut. Nec aliquam amet arcu egestas lacus. Auctor varius sem consectetur vitae, vitae porta pretium nibh. Dui velit mattis arcu enim posuere commodo quam mauris risus. Molestie euismod risus lorem venenatis. Nunc suspendisse tellus aliquet massa amet cursus. Tortor turpis aliquam id nunc imperdiet lorem quis. Erat at odio nibh felis ut aliquet nunc,</p>
                    </div>
                    <button className={style.button}>how we give back</button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default SectionTwo;