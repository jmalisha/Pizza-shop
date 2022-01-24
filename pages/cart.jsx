import React from 'react';
import Image from "next/image";
import styles from "../styles/Cart.module.css";

const cart = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <tr className={styles.tr}>
            <th>Product</th>
            <th>Name</th>
            <th>Extras</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
          <tr>
            <td>
              <div className={styles.imgContainer}>
                <Image src='/img/p7.jpg' alt='' objectFit='cover' layout='fill'/>
              </div>
            </td>
            <td>
              <span className={styles.name}>JOYCE</span>
            </td>
            <td>
              <span className={styles.extras}>
                double ingredient, spicy sauce
              </span>
            </td>

            <td><span className={styles.price}>1200</span></td>
            <td><span className={styles.quantity}>2</span></td>
            <td><span className={styles.total}>2200</span></td>
          </tr>
        </table>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b> 4500
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b> 0
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b> 4500
          </div>
          <button className={styles.button}>CHECKOUT NOW!</button>
        </div>
      </div>
    </div>
  )
}

export default cart;
