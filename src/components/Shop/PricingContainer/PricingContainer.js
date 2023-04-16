import React from 'react'
import styles from './PricingContainer.module.css'
import PricingCard from './pricingCards/PricingCard'
import { ShopContext } from '../Shop'

const PricingContainer = () => {

  return (
    <>
      <div className={`${styles.container}`}>
        <div className={`${styles.filters}`}></div>
        <div className={`${styles.cardContainer}`}>
          {
            <ShopContext.Consumer>
              {value =>
                value.map(x => {
                  return <PricingCard
                    key={x.id}
                    {...x}
                  />
                })
              }
            </ShopContext.Consumer>
          }
        </div>
      </div>
    </>
  )
}

export default PricingContainer
