import { useState } from "react";
import styles from "../styles/Featured.module.css";
import Image from "next/image";


const Featured = () => {
  const [index, setIndex] = useState(0);
  const images = [
    "/img/p8.jpg",
    "/img/p7.jpg",
    "/img/p7.jpg",
  ];

  const handleArrow = (direction) =>{
      if(direction==="l"){
          setIndex(index !== 0 ? index-1 : 1)
      }
      if(direction==="r"){
          setIndex(index !== 2 ? index+1 : 1)
      }
      
  }

  return (
    <div className={styles.container}>
      <div className={styles.arrowContainer} style={{ left: 0 }} onClick={()=>handleArrow("l")}>
        <Image src="/img/arrowl.png" alt="" layout="fill" objectFit="contain"/>
      </div>
      <div className={styles.wrapper} style={{transform:`translateX(${-100*index}vw)`}}>
        {images.map((img, i) => (
          <div className={styles.imgContainer} key={i}>
            <Image src={img} alt="" layout="fill" objectFit="contain" />
          </div>
        ))}
      </div>
      <div className={styles.arrowContainer} style={{ right: 0 }} onClick={()=>handleArrow("r")}>
        <Image src="/img/arrowr.png" layout="fill" alt="" objectFit="contain"/>
      </div>
    </div>
  );
};

export default Featured;