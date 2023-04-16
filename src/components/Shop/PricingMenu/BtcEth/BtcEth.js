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
    )
}

export default BtcEth
