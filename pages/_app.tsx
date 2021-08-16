import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import "styles/global.scss";
import { MyHead } from "components/MyHead";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <MyHead />
      <Component {...pageProps} />
    </>
  );
};
export default MyApp;
