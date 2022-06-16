import React from 'react';
import {APICallUrl, filterId} from "../../../pages";
import Link from "next/link";

const Banner = ({data}) => {
    let {info_1, info_2} = filterId(data.homeAll, 220)

    // console.log(info_1)
    // console.log(info_2, "INFO222")
    // console.log(JSON.parse(info_1.href_eng))
    return (
        <section className="header-new-product-design">
            <div className="website-2 header-product-area-2">
                <div className="product-area">
                    <h1 className="header-title-h1">{info_1.title_eng}</h1>
                    <p>{info_1.paragraph_eng}</p>
                    <ul>
                        {
                            info_2.map((el, i) => {
                                return (
                                    <div key={i}>
                                        <li>{el.test_eng}</li>
                                    </div>
                                )
                            })
                        }
                    </ul>
                    <div className="product-area-shop">
                        <img className="shop-mcafee" width="98.06" height="33.53"
                             src={`${APICallUrl}/${info_1.image}`} alt={info_1.image_alt}/>
                        <img className="shop-norton" width="98.06" height="33.53"
                             src={`${APICallUrl}/${info_1.input2}`} alt={info_1.input2_alt}/>
                        <div className="product-area-secure">
                            <div className="secure-checkout-img">
                                <img width="17.06" height="17.06"
                                     src={`${APICallUrl}/${info_1.image3}`} alt={info_1.image3_alt}/>
                                <span>{info_1.text_eng}</span>
                            </div>
                        </div>
                    </div>
                    <div className="menu-button-area">
                        <Link href={`/${JSON.parse(info_1.href_eng).link}`}>
                            <a className="btn btn-primary review-btn-to-shop">
                                {JSON.parse(info_1.href_eng).name}
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="product-area-item position-relative">
                    <img width="683.91" height="431" src={`${APICallUrl}/${info_1.image_main}`}/>
                </div>
            </div>
            <div className="verified-div">
                <div className="reviewed-div-all">
                    <div className="reviewed-div-all-part">
                        <div className="reviewed-imgreviewed-img">
                            <img width="56" height="56"
                                 src={`${APICallUrl}/${info_1.review_image_eng}`}/>
                        </div>
                        <div className="reviewed-text">
                            <p>{info_1.review_name_eng} <span>
<img width="16" height="17" src={`${APICallUrl}/public/img/Groupvectoor.png`} className="vect-img"/>
                                Verified Customer
</span>
                            </p>
                            <div className="rating-star-parent">
                                <div className="rating-star-procent"/>
                            </div>
                        </div>
                    </div>
                    <div className="review-date-text">
                        <p>{info_1.date_input_eng}</p>
                    </div>
                    {/*<div className="rating-star-parent-mobile">*/}
                    {/*    <div className="rating-star-procent"/>*/}
                    {/*</div>*/}
                </div>
                <div className="review-long-text">
                    <p>{info_1.review_description_eng}</p>
                </div>
            </div>
        </section>
    );
};

export default Banner;