import Link from "next/link";
import styles from "./button.module.css";

const Button = ({ link, children, onClick }) => {
  if (link) {
    return (
      <Link href={link} className={styles.btn}>
        {children}
      </Link>
    );
  }
  return (
    <button onClick={onClick} className={styles.btn}>
      {children}
    </button>
  );
};

export default Button;
