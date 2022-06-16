import React from 'react';
import {filterId} from "../../../pages";

const SmallBanner = ({data}) => {
    let {info_1, info_2} = filterId(data.homeAll, 208);

    return (
        <section className="website-2 two-half-sections-area">
            <div className="shipping-area">
                <div className="shipping-area-text">
                    <div className="shipping-car">
                        <img width="96" height="82" className="snow-img" alt={info_1['img-theme_alt']} title=""
                             src={`https://www.prorepeater.com/${info_1['img-theme']}`}/>
                        <img width="40" height="40" className="main-icon" alt={info_1.img2_alt} title=""
                             src={`https://www.prorepeater.com/${info_1.img2}`}/>
                    </div>
                    <h5 className="header-title-h5">{info_1.freeshipping_eng}</h5>
                </div>
            </div>
            <div className="discount-area">
                <div className="discount-area-text">
                    <div className="shipping-discount">
                        <img width="96" height="82" className="snow-img-two" alt={info_1.img3_alt} title=""
                             src={`https://www.prorepeater.com/${info_1.img3}`}/>
                        <img width="40" height="40" className="main-icon" alt={info_1.img4_alt} title=""
                             src={`https://www.prorepeater.com/${info_1.img4}`}/>
                    </div>
                    {
                        info_2.map((el, i) => <h5 key={i} className="header-title-h5">{el.txt_paragraph_eng}</h5>)
                    }
                </div>
            </div>
        </section>
    );
};

export default SmallBanner;