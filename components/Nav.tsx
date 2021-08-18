import Image from "next/image";
import { FC, useEffect, useState } from "react";
import styles from "../styles/components/Nav.module.scss";

export const Nav: FC = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const handleShow = () => (window.scrollY > 100 ? setShow(true) : setShow(false));
    window.addEventListener("scroll", handleShow);
    return () => window.removeEventListener("scroll", handleShow);
  }, []);
  return (
    <div className={styles.wrapper + " " + (show && styles.wrapperBlack)}>
      <div className={styles.logo}>
        <Image src="/images/netfjix.png" alt="Netfjix Logo" layout="fill" />
      </div>
      <div className={styles.avatar}>
        <Image src="/images/user.png" alt="Avatar" layout="fill" />
      </div>
    </div>
  );
};
