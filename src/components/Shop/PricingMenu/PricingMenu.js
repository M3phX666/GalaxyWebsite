import React, { useState } from 'react'
import styles from './PricingMenu.module.css'

import Venus from '../../../assets/Pictures/Venus.jpg'
import Mars from '../../../assets/Pictures/Mars.jpeg'
import Neptun from '../../../assets/Pictures/Neptun.jpg'
import Pluton from '../../../assets/Pictures/Pluton.jpg'
import Ksiezyc from '../../../assets/Pictures/Ksiezyc.jpg'
import Btc from '../../../assets/Icons/btc.png'

const PricingMenu = (props) => {
    const [build, setBuild] = useState(true);

    return (
        <>
            <div className={`${styles.containerMenu}`}>
                <div className={`${styles.buildItem}`}>
                    <div className={`${styles.build}`} onClick={() => setBuild(!build)}>Buy BTC / ETH
                        {build
                            ? <div className={`${styles.buildBody}`}>
                                <div
                                    style={{ color: 'black' }}
                                    className={`${styles.binance}`}>
                                    <b>Binance</b>
                                    <img src={Btc} />
                                </div>
                                <div
                                    style={{ color: 'black' }}
                                    className={`${styles.BTCETH}`}>
                                    <a href="https://www.binance.com/pl/trade/BTC_USDT?theme=dark&type=spot">BTC</a>
                                    <a href="https://www.binance.com/pl/trade/ETH_USDT?theme=dark&type=spot">ETH</a>
                                </div>
                            </div>
                            : ''

                        }

                    </div>
                </div>
                <div className={`${styles.menuItems}`}>
                    <div className={`${styles.menuItem}`} onClick={() => props.dataFunc("venus")}>
                        <img src={Venus} style={{ width: '100%' }} alt="" />
                        <p>Venus</p>
                    </div>
                    <div className={`${styles.menuItem}`} onClick={() => props.dataFunc("mars")}>
                        <img src={Mars} style={{ width: '100%' }} alt="" />
                        <p>Mars</p>
                    </div>
                    <div className={`${styles.menuItem}`} onClick={() => props.dataFunc("neptun")}>
                        <img src={Neptun} style={{ width: '100%' }} alt="" />
                        <p>Neptun</p>
                    </div>
                    <div className={`${styles.menuItem}`} onClick={() => props.dataFunc("pluton")}>
                        <img src={Pluton} style={{ width: '100%' }} alt="" />
                        <p>Pluton</p>
                    </div>
                    <div className={`${styles.menuItem}`} onClick={() => props.dataFunc("ksiezyc")}>
                        <img src={Ksiezyc} style={{ width: '100%' }} alt="" />
                        <p>Księżyc</p>
                    </div>
                </div>

            </div>
            <div className={`${styles.containerPrices}`}>

            </div>
        </>
    )
}

export default PricingMenu
