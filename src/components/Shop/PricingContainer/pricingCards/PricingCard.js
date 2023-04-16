import React, { version } from 'react'
import styles from './PricingCards.module.css'

import Ksiezyc from '../../../../assets/Pictures/Ksiezyc.jpg'
import Mars from '../../../../assets/Pictures/Mars.jpeg'
import Neptun from '../../../../assets/Pictures/Neptun.jpg'
import Pluton from '../../../../assets/Pictures/Pluton.jpg'
import Venus from '../../../../assets/Pictures/Venus.jpg'


const pricingCards = (props) => {
  let image;
  let price, days;

  switch (props.src) {
    case "venus":
      image = Venus
      price = 0.35
      days = 4
      break;
    case "mars":
      image = Mars
      price = 0.3
      days = 3
      break;
    case "neptun":
      image = Neptun
      price = 1.35
      days = 22
      break;
    case "pluton":
      image = Pluton
      price = 1.5
      days = 28
      break;
    case "ksiezyc":
      image = Ksiezyc
      price = 0.11
      days = 1
      break;
  }

  return (
    <div className={`${styles.card}`}>
      <div className={`${styles.cardInner}`}>
        <div className={`${styles.innerText}`}>
          <h1 style={{ color: '#DAA520' }}>{price + " BTC"}</h1>
          <h2 style={{ color: '#808080' }}>{"~ " + (price*14.5).toFixed(2) + " ETH"}</h2>
          <h4>- {days + " days"}</h4>
          <h4>Private Quarters</h4>
          <i><h2>BASIC</h2></i>
        </div>
        <div className={`${styles.cardExternal}`}>
          <img src={image} alt="" />
          <div className={`${styles.cardHeader}`}>
            <h3>{props.cardHeader}</h3>
          </div>
          <div className={`${styles.cardBody}`}>
            <p>{props.cardBody}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default pricingCards
