import React from 'react'
import Card from './Card'
import style from '../../styles/Collections.module.css'

const Items = [
    {
        name: 'COLLECTION ONE',
        image: '/images/collectionone.png'
    },
    {
        name: 'COLLECTION TWO',
        image: '/images/collectiontwo.png'
    },
    {
        name: 'COLLECTION THREE',
        image: '/images/collectionthree.png'
    },
]

const Collections = () => {
    return (
        <React.Fragment>
            <div className={style.Collection}>
                <span className={style.text}>Discover our collections</span>
                <div className={style.cards}>
                    {Items.map((item) => {
                        return (
                            <Card image={item.image} isBlack={true} key={item}>
                                <span>{item.name}</span>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </React.Fragment>
    )
}

export default Collections;