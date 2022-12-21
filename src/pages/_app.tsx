// import type { AppProps } from "next/app";
import { store } from "@/store/index";
import MainLayoyt from "@/layout/MainLayoyt";
import { GlobalStyles } from "@/styles/GlobalStyle";
import InitComponents from "init/InitComponents";


import { AppProps } from "next/app";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
  console.log(process.env);
  return (
    <>
      <GlobalStyles />
      <Provider store={store}>
        <MainLayoyt>
          <Component {...pageProps} />
        </MainLayoyt>
        <InitComponents />
      </Provider>
    </>
  );
}
