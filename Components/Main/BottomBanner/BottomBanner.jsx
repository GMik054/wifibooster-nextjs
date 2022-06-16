import {APICallUrl, filterId} from "../../../pages";
import Link from "next/link";

const BottomBanner = ({data}) => {
    let {info_1, info_2} = filterId(data.homeAll, 223);

    return (
        <div className="new-header-product-area-2">
            <div className="website-2 header-product-area-2 last-header-part">
                <div className="product-area">
                    <h2 className="header-title-h2">{info_1.text1_eng}</h2>
                    <p className="last-header-paragraph">{info_1.text3_eng}</p>
                    <ul>
                        {
                            info_2.map((el, i) => {
                                return (
                                    <div key={i}>
                                        <li>
                                            {el.text4_eng}
                                        </li>
                                    </div>
                                )
                            })
                        }
                    </ul>
                    <div className="menu-button-area">
                        <Link href={`/${JSON.parse(info_1.link1).link}`}>
                            <a className="btn btn-primary buy-btn-to-shop">{JSON.parse(info_1.link1).name}</a>
                        </Link>

                    </div>
                </div>
                <div className="product-area-item position-relative">
                    <img width="683.91" height="431" alt={info_1.image1_alt} src={`${APICallUrl}/${info_1.image1}`}/>
                </div>
            </div>
        </div>
    );
};

export default BottomBanner;