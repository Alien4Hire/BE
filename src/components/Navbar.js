import React from "react"
import Image from 'next/image'
import Search from './icons/search.js'
import Account from './icons/account.js'
import Shop from './icons/shop.js'

const Menu = [
	'ABOUT',
	'SHOP',
	'CUSTOMER SUPPORT',
	'BLOG',
]

const Navbar = ({style}) => {
    return (
        <React.Fragment>
            <div className={style.topContainer}>
                <div className={style.innerContainer}>
                    <div className={style.align}>
                        <span className={style.region}>
                            REGION
                        </span>
                        <Image 
                            alt='america'
                            src="/images/america.png"
                            height="19px"
                            width="19px"
                        />
                    </div>
                    <div className={style.align}>
                        <span className={style.light}>CURRENCY</span>
                        <span className={style.bold}>USD</span>
                    </div>
                </div>
            </div>
            <div className={style.container}>
                <div className={style.logo}>
                    <Image 
                        alt='logo'
                        src="/images/belogo.png" 
                        quality={100}
                        height={'42px'}
                        width={'100px'}
                    />
                </div>
                <div className={style.menuItems}>
                    {Menu.map((item, index) => {
                        return (
                            <p key={index + item} className={style.Item}>{item}</p>
                        )
                    })}
                </div>
                <div className={style.icons}>
                    <Search />
                    <Account />
                    <Shop />
                </div>
            </div>
        </React.Fragment>
    )
}

export default Navbar;