import React from 'react'
import styles from './PricingContainer.module.css'
import PricingCard from './pricingCards/PricingCard'
import { ShopContext } from '../Shop'
import { FaConnectdevelop, FaWpforms } from "react-icons/fa"

const PricingContainer = () => {

  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.filtersContainer}`}>
        <div className={`${styles.filters}`}>
          <ul style={{ color: 'white' }}>
            <li> <FaConnectdevelop size={17}/><b> About GLX</b></li>
            <li>What is GLX?</li>
            <li>Why Us?</li>
            <li>Roadmap</li>
            <li>Security and Governance</li>
          </ul>
          <ul style={{ color: 'white' }}>
            <li> < FaWpforms size={17}/> <b> Guides</b></li>
            <li>Create an <mark>Account</mark></li>
            <li>Stake GLX tokens</li>
          </ul>
        </div>
      </div>
      <div className={`${styles.cardContainer}`}>
        {
          <ShopContext.Consumer>
            {value =>
              value.map((x, index) => {
                return <PricingCard
                  key={index}
                  {...x}
                />
              })
            }
          </ShopContext.Consumer>
        }
      </div>
    </div >
  )
}

export default PricingContainer
