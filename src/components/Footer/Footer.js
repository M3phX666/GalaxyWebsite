import React from 'react'
import styles from './Footer.module.css'
import { FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className={`${styles.container}`}>
            <div className={`${styles.containerItem}`}>
                <div className={`${styles.contactFlex}`}>
                    <div>
                        <FaSearchLocation
                            size={15}
                            style={{ color: '#ffffff', marginRight: '1rem' }} />
                    </div>
                    <div>
                        <h4>123 Acme St.</h4>
                        <h4>Houston, Tx</h4>
                    </div>
                </div>
                <div className={`${styles.contactFlex}`}>
                    <div>
                        <FaPhone
                            size={15}
                            style={{ color: '#ffffff', marginRight: '1rem' }} />
                    </div>
                    <div>
                        <h4>1-800-123-1234</h4>
                    </div>
                </div>
                <div className={`${styles.contactFlex}`}>
                    <div>
                        <FaMailBulk
                            size={15}
                            style={{ color: '#ffffff', marginRight: '1rem' }} />
                    </div>
                    <div>
                        <h4>trips@galaxy.com</h4>
                    </div>
                </div>
            </div>
            <div className={`${styles.containerItem}`}>
                <div>
                    <h4>About the company</h4>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, neque!</p>
                </div>
                <div>
                    <FaFacebook
                        size={15}
                        style={{ color: '#ffffff', marginRight: '1rem' }} />
                    <FaTwitter
                        size={15}
                        style={{ color: '#ffffff', marginRight: '1rem' }} />
                    <FaLinkedin
                        size={15}
                        style={{ color: '#ffffff', marginRight: '1rem' }} />
                </div>
            </div>
        </div>
    )
}

export default Footer
