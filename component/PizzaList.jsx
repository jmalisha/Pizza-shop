import React from 'react'
import PizzaCard from './PizzaCard'
import styles from '../styles/pizzaList.module.css';

const PizzaList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>The Best Pizza Shop in Fedha</h1>
      <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quod porro excepturi unde magni minima provident, corrupti possimus consequatur molestias tempora fuga laborum nisi nostrum quam! Ea eius nobis dicta?</p>
      <div className={styles.wrapper}>
        <PizzaCard/>
        <PizzaCard/>
        <PizzaCard/>
        <PizzaCard/>
        <PizzaCard/>
        <PizzaCard/>
        <PizzaCard/>
        <PizzaCard/>
      </div>
    </div>
  )
}

export default PizzaList
