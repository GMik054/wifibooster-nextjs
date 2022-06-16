import React from 'react';
import {APICallUrl, filterId} from "../../../pages";

const Benefits = ({data}) => {

    let titleBenefits = filterId(data.homeAll, 203).info_1;
    let {info_1} = filterId(data.homeAll, 205);
    let {info_2} = filterId(data.homeAll, 204);
    // console.log(info_1)
    // console.log(info_2, "INFO222")
    // console.log(JSON.parse(info_1.href_eng))
    return (
        <>
            <section className="website-2 info-area">
                <div className="info-booster">
                    <h5 className="header-title-h5">{titleBenefits.paragraph_text_eng}</h5>
                </div>
            </section>
            <section className="website-2 delivery-area">
                <div className="delivery-all-products">
                    {
                        info_2.map((el, i) => {
                            return (
                                <div className="single-delivery-area" key={i}>
                                    <img width="80" height="110.05"
                                         src={`${APICallUrl}/${el.img}`}/>
                                    <h6 className="header-title-h6">{el.txt_eng}</h6>
                                    <p>{el["txt-paragraph_eng"]}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
            <section className="website-2 guarantee-area">
                <div className="guarantee-zone">
                    <div className="guarantee-all-section">
                        <div className="guarantee-image-area">
                            <img width="160" height="160" title=""
                                 src={`${APICallUrl}/${info_1.theme_image}`}
                                 alt={info_1.theme_image_alt}/>
                        </div>
                        <div className="guarantee-text-area">
                            <h5 className="header-title-h5">{info_1.title_eng}</h5>
                            <p> {info_1.description_eng}</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Benefits;