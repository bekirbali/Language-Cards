import { languages } from "../utils/data";
import { Card } from "./Card";
import styles from "./CardBody.module.scss";
export const CardBody = () => {
  console.log(languages);
  return (
    <div className={styles.container}>
      {languages.map((lang) => {
        return <Card {...lang} />;
      })}
    </div>
  );
};
