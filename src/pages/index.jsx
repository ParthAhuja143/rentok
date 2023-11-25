import App from "next/app";
import { Provider } from "react-redux";
import { createWrapper } from "next-redux-wrapper";
import RentContainer from "@/app/components/RentContainer";
import { store } from "@/app/redux/store";
import { SkeletonTheme } from "react-loading-skeleton";
import 'normalize.css/normalize.css';
import '../styles/style.scss'
import SideNav from "@/app/components/SideNav";
import ICDisplay from "@/app/components/ICDisplay";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {

  return (
    <Provider store={store}>
      <SkeletonTheme baseColor='#000000' highlightColor='#111111' duration={1}>
      <div className='body-container'>
            <SideNav />
            <RentContainer
            />
            <ICDisplay />
      </div>
      </SkeletonTheme>
    </Provider>
  );
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);