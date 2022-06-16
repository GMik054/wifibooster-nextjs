import React from 'react';
import {APICallUrl, filterId} from "../../../pages";
import SmallBanner from "../SmallBanner/SmallBanner";
import Link from "next/link";

const Discount = ({data}) => {
    let {info_1} = filterId(data.homeAll, 224)
    // console.log(JSON.parse(info_1.link1_eng))
    return (
        <>
            <SmallBanner data={data}/>
            <div className="website-2 discount-time-area">
                <div className="discount-cont-part">
                    <h3 className="header-title-h2">{info_1.title_eng}</h3>
                    <div className="discount-image-area">
                        <img alt="Color" src={`${APICallUrl}/public/images/Color.png`}/>
                        <p>{info_1.price_eng}</p>
                    </div>
                    <p className="each-price-part">{info_1.each_price_eng}
                        <span>{info_1.orig_price_eng}
                        </span></p>
                    <p className="total">{info_1.total_eng}</p>
                    <div className="menu-button-area">
                        <Link href={`/${JSON.parse(info_1.link1_eng).link}`}>
                            <a className="btn btn-primary offer-btn-to-shop">
                                {JSON.parse(info_1.link1_eng).name} </a>
                        </Link>

                    </div>
                </div>
                <div className="discount-time-images">
                    <img className="first-image" alt="first-image"
                         src={`${APICallUrl}/public/images/Group 12725.svg`}/>
                    <img className="second-image" alt="second-image"
                         src={`${APICallUrl}/public/images/Group 12721.svg`}/>
                    <img className="third-image" alt="third-image"
                         src={`${APICallUrl}/public/images/Group 12724.svg`}/>
                    <img className="fourth-image" alt="fourth-image"
                         src={`${APICallUrl}/public/images/Group 12723.svg`}/>
                    <img className="sixth-image" alt="sixth-image"
                         src={`${APICallUrl}/public/images/Group 12726.svg`}/>
                    <img className="seventh-image" alt="seventh-image"
                         src={`${APICallUrl}/public/images/Group 12719.svg`}/>
                </div>
            </div>
        </>

    );
};

export default Discount;