import "@assets/styles/globals.css";
import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { createWrapper } from "next-redux-wrapper";
import store from "../store/store";
// import Layout from "@layout/Layout";
import "@lib/Icons";
import "react-toastify/dist/ReactToastify.css";

// import { isLoggedIn } from "store/actions/userActions";

// import ToasterContainer from "@components/ToasterContainer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />;
    </Provider>
  );
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);
export default wrapper.withRedux(MyApp);
