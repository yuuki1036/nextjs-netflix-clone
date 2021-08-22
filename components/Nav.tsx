import Image from "next/image";
import { FC, useEffect, useState } from "react";
import styles from "../styles/components/Nav.module.scss";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";

export const Nav: FC = () => {
  const router = useRouter();
  const [show, setShow] = useState(false);
  useEffect(() => {
    const handleShow = () => (window.scrollY > 100 ? setShow(true) : setShow(false));
    window.addEventListener("scroll", handleShow);
    return () => window.removeEventListener("scroll", handleShow);
  }, []);

  return (
    <div className={styles.wrapper + " " + (show && styles.wrapperBlack)}>
      <a href={router.pathname}>
        <div className={styles.logo}>
          <Image src="/images/netfjix.png" alt="Netfjix Logo" layout="fill" />
        </div>
      </a>
      <div className={styles.avatar}>
        <Image src="/images/user.png" alt="Avatar" layout="fill" />
      </div>
    </div>
  );
};
