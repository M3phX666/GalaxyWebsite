import React from 'react'
import Video from '../../assets/Videos/Background.mp4'
import styles from './BackgroundVideo.module.css'
import { Link } from 'react-router-dom'

const BackgroundVideo = () => {
    return (
        <div className={`${styles.container}`}>
            <video autoPlay loop muted id={`${styles.video}`}>
                <source src={Video} type='video/mp4' />
            </video>
            <div className={`${styles.videoText}`}>
                <h1>Galaxy Travel</h1>
                <p>WORLD'S FIRST SCIVILIAN SPACE TRAVEL</p>
                <div className={`${styles.videoButtons}`}>
                    <Link to='/Training'>TRAINING</Link> 
                    <Link to='/Pricing'>LAUNCH</Link>
                </div>
            </div>
        </div>

    )
}

export default BackgroundVideo
