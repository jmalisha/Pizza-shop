import React from 'react'
import styles from '../styles/pizzaCard.module.css'
import Image from "next/image";

const PizzaCard = () => {
  return (
    <div className={styles.container}>
      <Image src='/img/p7.jpg' alt='' width='500px' height='500px' />
       <h1 className={styles.title}>HAWAAIAN</h1>
       <span className={styles.price}>KSH 1200</span>
      <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quod porro excepturi unde magni</p>
    </div>
  )
}

export default PizzaCard
