import styles from "./Card.module.scss";
import { useState } from "react";

export const Card = ({ name, img, options }) => {
  const [show, setShow] = useState(false);
  return (
    <div className={styles.card} onClick={() => setShow(!show)}>
      {!show && <img src={img} alt="" />}
      {show && (
        <ul>
          {options.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      )}
      <h2>{name}</h2>
    </div>
  );
};
