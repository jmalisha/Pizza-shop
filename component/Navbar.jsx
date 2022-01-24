import React from 'react'
import styles from '../styles/Navbar.module.css'
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
    <div className={styles.callButton}>
      <Image src="/img/telephone.jpg" alt='' width='32' height='32'/>
    </div>
    <div className={styles.texts}>
      <div className={styles.texts}>Order Now</div>
      <div className={styles.texts}>+254 721 741 566</div>
    </div>
    </div>
    <div className={styles.item}>
      <ul className={styles.list}>
        <li className={styles.listItem}>Homepage</li>
        <li className={styles.listItem}>Product</li>
        <li className={styles.listItem}>Menu</li>
        <Image src="/img/logo1.png" alt='' width='80' height='50'/>
        <li className={styles.listItem}>Events</li>
        <li className={styles.listItem}>Blog</li>
        <li className={styles.listItem}>Contact</li>
      </ul>
    </div>
    <div className={styles.item}>
      <div className={styles.cart}>
         <Image src="/img/cart.png" alt='' width='32' height='32'/>
         <div className={styles.counter}>2</div>
      </div>
    </div>
    </div>
  )
}

export default Navbar
