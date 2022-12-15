import type { AppProps } from "next/app";
import MainLayoyt from "@/layout/MainLayoyt";
import { GlobalStyles } from "@/styles/GlobalStyle";
import InitComponents from "init/InitComponents";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <MainLayoyt>
        <Component {...pageProps} />
      </MainLayoyt>
      <InitComponents />
    </>
  );
}
