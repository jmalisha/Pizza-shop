import React, {useState} from 'react'
import Image from "next/image";
import styles from "../../styles/Product.module.css";


const Product = () => {
const [size, setSize] = useState(0)
  const pizza ={
    id: 1,
    img: "/img/p7.jpg",
    name: "Hawaiaan",
    price: [1200, 1400, 1600],
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur assumenda error maiores maxime corporis accusamus"
  }
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={pizza.img} alt='' layout='fill' objectFit='contain'/>
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{pizza.name}</h1>
        <span className={styles.price}>$ {pizza.price[size]}</span>
        <p className={styles.desc}>{pizza.desc}</p>
        <h3 className={styles.choose}>Choose Your Size</h3>
        <div className={styles.sizes}>
           <div className={styles.size}>
             <Image src='/img/size.png' alt='' layout='fill'/>
              <span className={styles.number} onClick={()=>setSize(0)}>small</span>
           </div>
           <div className={styles.size}>
             <Image src='/img/size.png' alt='' layout='fill'/>
              <span className={styles.number}onClick={()=>setSize(1)}>medium</span>
           </div>
           <div className={styles.size}>
             <Image src='/img/size.png' alt='' layout='fill'/>
              <span className={styles.number} onClick={()=>setSize(2)}>Large</span>
           </div>
        </div>
        <h3 className={styles.choose}>Extra toppings</h3>
        <div className={styles.toppings}>
          <div className={styles.option}>
            <input type="checkbox" name="double" id="double" className={styles.checkbox}/>
            <label htmlFor="double">Feta Cheese</label>
          </div>
          <div className={styles.option}>
            <input type="checkbox" name="Green Pepper" id="greenPepper" className={styles.checkbox}/>
            <label htmlFor="greenPepper">Green Pepper</label>
          </div>
          <div className={styles.option}>
            <input type="checkbox" name="BBQ Steak" id="bbq" className={styles.checkbox}/>
            <label htmlFor="bbq">BBQ Steak</label>
          </div>
          <div className={styles.option}>
            <input type="checkbox" name="Pineapple" id="pineapple" className={styles.checkbox}/>
            <label htmlFor="pineapple">Pineapple</label>
          </div>
          <div className={styles.option}>
            <input type="checkbox" name="Mozzarella" id="mozzarella" className={styles.checkbox}/>
            <label htmlFor="mozzarella">Mozzarella</label>
          </div>
        </div>
        <div className={styles.add}>
          <input type="number" name="" id="" defaultValue={1} className={styles.quantity}/>
          <button className={styles.button}>Add to cart</button>
        </div>
      </div>
    </div>
  )
}

export default Product
