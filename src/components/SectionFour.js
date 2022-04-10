import React from 'react'
import Card from './Card'
import style from '../../styles/SectionFour.module.css'

const Items = [
    {
        name: 'BAMBOO SUNGLASSES',
        price: '$165',
        image: '/images/glasses-1.png',
        description: 'ECO FRIENDLY POLARIZED'
    },
    {
        name: 'BAMBOO SUNGLASSES',
        price: '$165',
        image: '/images/glasses-2.png',
        description: 'ECO FRIENDLY POLARIZED'
    },
    {
        name: 'BAMBOO SUNGLASSES',
        price: '$165',
        image: '/images/glasses-3.png',
        description: 'ECO FRIENDLY POLARIZED'
    },
]

const SectionFour = () => {
    return (
        <React.Fragment>
            <div className={style.container}>
                {Items.map((item) => {
                    return (
                        <div key={item}>
                            <Card image={item.image} isBlack={false} offset={true}>
                                <div className={style.products}>
                                    <p className={style.one}>{item.name}</p>
                                    <p className={style.two}>{item.description}</p>
                                    <p className={style.three}>{item.price}</p>
                                </div>
                            </Card>
                        </div>
                    )
                })}
            </div>
        </React.Fragment>
    )
}

export default SectionFour;