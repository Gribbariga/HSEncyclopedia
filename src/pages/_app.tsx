import "../styles/globals.css";
import type { AppProps } from "next/app";
import MainLayoyt from "@/layout/MainLayoyt";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MainLayoyt>
      <Component {...pageProps} />
    </MainLayoyt>
  );
}
