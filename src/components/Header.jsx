import logo from "../assets/react.svg";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <div className={styles.header}>
      <img src={logo} alt="" />
    </div>
  );
};
