import {filterId} from "../../../pages";
import SmallBanner from "../SmallBanner/SmallBanner";

const WifiFeatures = ({data}) => {
    let {info_1, info_2} = filterId(data.homeAll, 207);

    return (
        <>
            <section className="website-2 booster-feature-area" id="block_7">
                <div className="booster-feature-text">
                    <h2 className="header-title-h2">{info_1['main-txt_eng']}</h2>
                    <p className="booster-text-zone">{info_1.par_txt_eng}</p>
                    <div className="row booster-all-area">
                        {
                            info_2.map((el, i) => {
                                return (
                                    <div className="col-lg-4 col-md-6 col-sm-6" key={i}>
                                        <div className="single-booster-part">
                                            <div className="booster-img-area">
                                                <img width="39.98" height="29.36" alt={el.test_append_eng}
                                                     src={`https://www.prorepeater.com/${el.image_part}`}/>
                                            </div>
                                            <div className="booster-text-area">
                                                <h6 className="header-title-h6">{el.test_append_eng}</h6>
                                                <p>{el.text_main_eng}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
            <SmallBanner data={data}/>
        </>

    );
};

export default WifiFeatures;