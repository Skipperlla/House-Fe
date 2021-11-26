import "@assets/styles/globals.css";
import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { createWrapper } from "next-redux-wrapper";
import store from "../store/store";
// import Layout from "@layout/Layout";
import "@lib/Icons";
import "react-toastify/dist/ReactToastify.css";
import "rc-slider/assets/index.css";
import "rc-tooltip/assets/bootstrap.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

// import { isLoggedIn } from "store/actions/userActions";

import ToasterContainer from "@components/ToasterContainer";
import Layout from "@layout/Layout";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    console.log(JSON.parse(localStorage.getItem("store") || "[]"));
  }, []);
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <ToasterContainer />
    </Provider>
  );
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);
export default wrapper.withRedux(MyApp);
