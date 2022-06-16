import React from 'react';
import Review from "../Components/Main/ReviewSection/Review";
import {APICallUrl} from "./index";
import Faq from "../Components/Main/FAQ/Faq";
import CheckoutDetails from "../Components/CheckoutDetails/CheckoutDetails";

const Checkout = ({data}) => {
    return (
        <div>
            <CheckoutDetails data={data}/>
            <Review data={data}/>
            <Faq data={data}/>
        </div>
    );
};


export async function getServerSideProps() {
    const all = await fetch(`${APICallUrl}/api/content/6`);
    const products = await fetch(`${APICallUrl}/api/products`);
    const upgrade = await fetch(`${APICallUrl}/api/bonusProducts`);
    const checkout = await fetch(`${APICallUrl}/api/content/10`);
    const reviews = await fetch(`${APICallUrl}/api/reviews?page=1&per_page=15`);
    const questions = await fetch(`${APICallUrl}/api/reviews?page=1&per_page=15&type=question`);
    const countries = await fetch(`${APICallUrl}/api/country_list`);
    const bonusProducts = await fetch(`${APICallUrl}/api/bonusProducts`);
    const ip = await fetch(`${APICallUrl}/api/get_api`);


    const data = {
        homeAll: await all.json(),
        reviews: await reviews.json(),
        questions: await questions.json(),
        products: await products.json(),
        bonusProducts: await bonusProducts.json(),
        upgrade: await upgrade.json(),
        checkout: await checkout.json(),
        countries: await countries.json(),
        ip: await ip.json()
    }
    return {props: {data}}

}

export default Checkout;