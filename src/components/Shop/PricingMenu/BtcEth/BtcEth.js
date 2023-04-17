import React from 'react'
import styles from './BtcEth.module.css'
import { useState } from 'react'

import Btc from '../../../../assets/Icons/btc.png'

const BtcEth = () => {
    const [build, setBuild] = useState(true);

    return (
        <div className={`${styles.buildItem}`}>
            <div className={`${styles.build}`} onClick={() => setBuild(!build)}>Buy BTC / ETH
                {build
                    ? <div className={`${styles.buildBody}`}>
                        <div
                            style={{ color: 'black' }}
                            className={`${styles.binance}`}>
                            <img src={Btc} />
                            <b>Binance</b>
                        </div>
                        <div
                            style={{ color: 'black' }}
                            className={`${styles.BTCETH}`}>
                            <a style={{transform: 'scale(1.1)'}} href="https://www.binance.com/pl/trade/BTC_USDT?theme=dark&type=spot">BTC</a>
                            <a style={{transform: 'scale(1.1)'}} href="https://www.binance.com/pl/trade/ETH_USDT?theme=dark&type=spot">ETH</a>
                        </div>
                    </div>
                    : ''

                }

            </div>
        </div>
    )
}

export default BtcEth
