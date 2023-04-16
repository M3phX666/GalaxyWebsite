import React, { useState } from 'react'
import './Shop.module.css'
import { createContext, useEffect } from 'react'

import PricingMenu from './PricingMenu/PricingMenu'
import PricingContainer from './PricingContainer/PricingContainer'

export const ShopContext = createContext();

const Shop = () => {

    const dataCards = [
        {
            id: 1,
            type: "basic",
            src: "venus",
            cardHeader: "karta Basic",
            cardBody: "test "
        },
        {
            id: 2,
            type: "premium",
            src: "mars",
            cardHeader: "karta Premium",
            cardBody: "test test test"
        },
        {
            id: 3,
            type: "premium",
            src: "neptun",
            cardHeader: "karta Premium",
            cardBody: "test test test"
        },
        {
            id: 4,
            type: "premium",
            src: "pluton",
            cardHeader: "karta Premium",
            cardBody: "test test test"
        },
        {
            id: 5,
            type: "premium",
            src: "ksiezyc",
            cardHeader: "karta Premium",
            cardBody: "test test test"
        }
    ]

    const [data, setData] = useState(dataCards);

    const text = (planet) => {
        let newData = dataCards.filter(x => {
            if (x.src === planet) return x;
        })
        setData(newData);
    }

    return (
        <ShopContext.Provider value={data}>
            <PricingMenu dataFunc={text} />
            <PricingContainer />
        </ShopContext.Provider>
    )
}

export default Shop
