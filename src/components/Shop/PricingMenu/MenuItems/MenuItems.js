import React from 'react'
import styles from './MenuItems.module.css'

import Venus from '../../../../assets/Pictures/Venus.jpg'
import Mars from '../../../../assets/Pictures/Mars.jpeg'
import Neptun from '../../../../assets/Pictures/Neptun.jpg'
import Pluton from '../../../../assets/Pictures/Pluton.jpg'
import Ksiezyc from '../../../../assets/Pictures/Ksiezyc.jpg'


const MenuItems = (props) => {
    return (
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
    )
}

export default MenuItems
