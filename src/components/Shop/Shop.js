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
            cardHeader: "Venus",
            cardBody: "Basic"
        },
        {
            id: 2,
            type: "premium",
            src: "mars",
            cardHeader: "Mars",
            cardBody: "Premium"
        },
        {
            id: 3,
            type: "premium",
            src: "neptun",
            cardHeader: "Neptun",
            cardBody: "Premium"
        },
        {
            id: 4,
            type: "premium",
            src: "pluton",
            cardHeader: "Pluton",
            cardBody: "Premium"
        },
        {
            id: 5,
            type: "premium",
            src: "ksiezyc",
            cardHeader: "Księżyc",
            cardBody: "Premium"
        },
        {
            id: 6,
            type: "basic",
            src: "mars",
            cardHeader: "Mars",
            cardBody: "Basic"
        },
    ]

    const [data, setData] = useState(dataCards);

    const text = (planet) => {
        let newData = dataCards.filter(x => {
            if (x.src === planet) return x;
        })
        setData(newData);
    }

    return (
        <div style={{ height: '100vmax' }}>
            <ShopContext.Provider value={data}>
                <PricingMenu dataFunc={text} />
                <PricingContainer />
            </ShopContext.Provider>
        </div>
    )
}

export default Shop
