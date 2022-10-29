import styles from "./Header.module.css";

import Title from "../title/Title";
import Subtitle from "../subtitle/Subtitle";
import Icon from "../icon/Icon";

function Header() {
  return (
    <div className={styles.header}>
      <Title>Jogo da velha</Title>
      <Subtitle>Criado por Vinícius Teixeira</Subtitle>
      <div className={styles.iconContent}>
        <Icon iconName="github" link="https://github.com/vinnyteixeira"/>
      </div>
    </div>
  );
}

export default Header;
