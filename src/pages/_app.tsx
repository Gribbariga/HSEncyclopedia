import type { AppProps } from "next/app";
import MainLayoyt from "@/layout/MainLayoyt";
import { GlobalStyles } from "@/styles/GlobalStyle";
import InitComponents from "init/InitComponents";
import { store } from "@/store/index";
import { Provider } from "react-redux/es/exports";

export default function App({ Component, pageProps }: AppProps) {
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
