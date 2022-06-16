import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import {config} from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;
import "../node_modules/@fortawesome/fontawesome-svg-core/styles.css";

import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import "../Components/Main/ReviewSection/Modal.css"
import "../Components/CheckoutDetails/CheckoutDetails.css"
import "../Components/Main/Main.css"

import {persistor, store} from "../redux/store"
import {APICallUrl} from "./index";
import Head from "next/head";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";


export default function MyApp({Component, pageProps}, appProps) {

    return (
        <>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Head>
                        <link href="https://fonts.cdnfonts.com/css/poppins" rel="stylesheet"/>
                        <link
                            rel="stylesheet"
                            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
                        />
                        {/*<title>jjj</title>*/}
                    </Head>

                    <Component {...pageProps} appProps={appProps}/>
                </PersistGate>
            </Provider>
        </>
    )

}

MyApp.getInitialProps = async (appContext) => {

    const all = await fetch(`${APICallUrl}/api/content/6`);
    const reviews = await fetch(`${APICallUrl}/api/reviews?page=1&per_page=15`);
    const questions = await fetch(`${APICallUrl}/api/reviews?page=1&per_page=15&type=question`);

    const data = {
        homeAll: await all.json(),
        reviews: await reviews.json(),
        questions: await questions.json()
    }
    return {appProps: {data}}
}
// export default wrapper.withRedux(MyApp)
