import React, { useState } from 'react'
import styles from './PricingMenu.module.css'

import BtcEth from './BtcEth/BtcEth'
import MenuItems from './MenuItems/MenuItems'

const PricingMenu = (props) => {


    return (
        <>
            <div className={`${styles.containerMenu}`}>
                <BtcEth />
                <MenuItems />
            </div>
            <div className={`${styles.containerPrices}`}>

            </div>
        </>
    )
}

export default PricingMenu
