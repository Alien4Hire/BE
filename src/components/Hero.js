import React from 'react';
import Image from 'next/image'
import style from '../../styles/Hero.module.css'

const Hero = () => {
    return (
        <div className={style.heroContainer}>
            <div className={style.heroImg}>
                <Image alt='hero' src='/images/Hero-1.png' width={1700} height={700}/>
            </div>
            <div className={style.heroFloat}>
                <div className={style.textAlign}>
                    <p className={style.text}>be brave enough to start a <br/> conversation that matters</p>
                    <h2>We empower you to <br/> own your stigma</h2>
                </div>
                <div>
                    <button className={style.shop}>SHOP NOW</button>
                    <button className={style.impact}>OUR IMPACT</button>
                </div>
            </div>
        </div>
    )
}

export default Hero;