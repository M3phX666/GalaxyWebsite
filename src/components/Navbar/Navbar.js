import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
    const [active, setActive] = useState(false);

    const clickHamburger = () => { setActive(!active); };

    return (
        <div className={`${styles.container}`}>
            <Link to='/'>GLX TRVL</Link>
            <ul className={active
                ? ` ${styles.navMenu} ${styles.navMenuShow}`
                : `${styles.navMenu}`} >
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/Pricing'>Pricing</Link>
                </li>
                <li>
                    <Link to='/Training'>Training</Link>
                </li>
                <li>
                    <Link to='/Contact'>Contact</Link>
                </li>
            </ul>
            <div className={`${styles.hamburger}`} onClick={clickHamburger}>
                {active
                    ? <FaTimes
                        size={20}
                        style={{ color: '#fff' }} />
                    : <FaBars
                        size={20}
                        style={{ color: '#fff' }} />
                }
            </div>
        </div>
    )
}

export default Navbar
