import Image from 'next/image';
import React from 'react'
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src='/img/bg1.jpg' alt='' layout='fill' objectFit='contain'/>
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exer</h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>74595 Fedha Road
          <br />Embakasi
          <br />+254 723 609 415
          </p>
          <p className={styles.text}>74595 Fedha Road
          <br />Embakasi
          <br />+254 723 609 415
          </p>
          <p className={styles.text}>74595 Fedha Road
          <br />Embakasi
          <br />+254 723 609 415
          </p>
          <p className={styles.text}>74595 Fedha Road
          <br />Embakasi
          <br />+254 723 609 415
          </p>
        </div>
        <div className={styles.card}>
            <h1 className={styles.title}>WORKING HOURS</h1>
            <p className={styles.text}>Monday - Friday
          <br />8am - 8pm
          </p>
            <p className={styles.text}>Saturday - Sunday
          <br />8am - 6pm
          
          </p>
        </div>
      </div>
    </div>
    
  )
}

export default Footer
