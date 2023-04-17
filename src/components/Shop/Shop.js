import React, { useState } from 'react'
import './Shop.module.css'
import { createContext, useEffect } from 'react'

import PricingMenu from './PricingMenu/PricingMenu'
import PricingContainer from './PricingContainer/PricingContainer'

export const ShopContext = createContext();

const Shop = () => {

    const dataCards = [
        {
            type: "basic",
            src: "venus",
            cardHeader: "Venus",
            cardBody: "Basic"
        },
        {
            type: "standard",
            src: "venus",
            cardHeader: "Venus",
            cardBody: "Standard"
        },
        {
            type: "premium",
            src: "venus",
            cardHeader: "Venus",
            cardBody: "Premium"
        },
        {
            type: "basic",
            src: "mars",
            cardHeader: "Mars",
            cardBody: "Basic"
        },
        {
            type: "standard",
            src: "mars",
            cardHeader: "Mars",
            cardBody: "Standard"
        },
        {
            type: "premium",
            src: "mars",
            cardHeader: "Mars",
            cardBody: "Premium"
        },
        {
            type: "basic",
            src: "neptun",
            cardHeader: "Neptun",
            cardBody: "Basic"
        },
        {
            type: "standard",
            src: "neptun",
            cardHeader: "Neptun",
            cardBody: "Standard"
        },
        {
            type: "basic",
            src: "pluton",
            cardHeader: "Pluton",
            cardBody: "Basic"
        },
        {
            type: "basic",
            src: "ksiezyc",
            cardHeader: "Księżyc",
            cardBody: "Basic"
        },
        {
            type: "standard",
            src: "ksiezyc",
            cardHeader: "Księżyc",
            cardBody: "Standard"
        },
        {
            type: "premium",
            src: "ksiezyc",
            cardHeader: "Księżyc",
            cardBody: "Premium"
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
        <div>
            <ShopContext.Provider value={data}>
                <PricingMenu dataFunc={text} />
                <PricingContainer />
            </ShopContext.Provider>
        </div>
    )
}

export default Shop
