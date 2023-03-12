// import type { AppProps } from "next/app";
import MainLayoyt from "@/layout/MainLayoyt";
import { GlobalStyles } from "@/styles/GlobalStyle";
import InitComponents from "init/InitComponents";
import { makeStore, wrapper } from "@/store/index";
import { AppProps } from "next/app";
import { Provider } from "react-redux";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Provider store={makeStore()}>
        <MainLayoyt>
          <Component {...pageProps} />
        </MainLayoyt>
      </Provider>
      <InitComponents />
    </>
  );
}

export default wrapper.withRedux(App);
