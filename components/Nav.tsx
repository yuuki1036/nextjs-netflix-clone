import Image from "next/image";
import { FC, useEffect, useState } from "react";
import styles from "../styles/Nav.module.scss";

export const Nav: FC = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const handleShow = () => (window.scrollY > 100 ? setShow(true) : setShow(false));
    window.addEventListener("scroll", handleShow);
    return () => window.removeEventListener("scroll", handleShow);
  }, []);
  return (
    <div className={styles.wrapper + " " + (show && styles.wrapperBlack)}>
      <div style={{ position: "static" }}>
        <Image src="/images/netfjix.png" alt="Netfjix Logo" layout="fixed" width={80} height={22} />
      </div>
      <Image src="/images/user.png" alt="Avatar" layout="fixed" width={30} height={30} />
    </div>
  );
};
