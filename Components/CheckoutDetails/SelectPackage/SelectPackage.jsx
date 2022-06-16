import {useEffect, useState} from "react";
import {APICallUrl, filterId} from "../../../pages";
import Link from "next/link";
import {useDispatch} from "react-redux";
import {setSummary} from "../../../redux/summarySlice";

const SelectPackage = ({data}) => {
    let {info_1} = filterId(data.checkout, 212);
    let {products} = data;
    const [addActive, setAddActive] = useState('');
    const dispatch = useDispatch()
    const [st, setSt] = useState('activeeee');



    const [firstURL, setFirstURL] = useState("")

    useEffect(() => {
        if (products !== "undefined ") {
            products.map(el => {
                if (Number(el.info_1.bestseller) === 1) {
                    dispatch(setSummary(el))
                    setFirstURL(el.url)
                }

            })
        }
    }, [])


    const toggle = (item) => {
        setAddActive(item)
        setSt("")
        dispatch(setSummary(item))
    }


    return (
        <div className="website-2 checkout-package-area">
            <div className="checkout-product-area">
                <h1>{info_1.text1_eng}</h1>
                <ul className="products-area">
                    {
                        products.map((el, i) => {
                            // console.log(el)
                            return (
                                <li key={i}
                                    className={`boosternt-wifi boosternt-wifi-click 
                                    ${Number(el.info_1.bestseller) === 1 ? "best-seller" : ""}
                                     ${el === addActive ? "activeeee" : ""}
                                     ${i === 0 ? st : ""}
                                    
                                `}
                                    onClick={() => toggle(el)}
                                >
                                    {
                                        Number(el.info_1.bestseller) === 1 ?
                                            <div className="best-seller-product">
                                                <p>Best Seller</p></div> : <> </>
                                    }
                                    {/*<Link href={`checkout/${el.url}`} >*/}
                                    <a
                                        className="single-product-title"
                                        href={
                                            ` 
                                          #/${el.url}
                                            `
                                        }
                                    >
                                        <h5>{el.name}</h5>
                                        <span
                                            className="checkout-product-span">
                                    <div dangerouslySetInnerHTML={{__html: el.description_short}}/></span>
                                        <div className="checkout-product-img">
                                            <img width="291" height="152" alt={`product-image${i + 1}`}
                                                 src={`${el.image}`}/>
                                        </div>
                                        <p className="checkout-product-price">Each: $ <span
                                            className="amount price-number">{el.price}</span>
                                        </p>
                                        <p>
                                            <del className="black-span">Orig: ${el.old_price}</del>
                                            <span
                                                className="red-span">Save: ${Number(el.old_price - el.price)} </span>
                                        </p>
                                        <h4>Total: $<span className="total-price">{el.price}</span>
                                        </h4>
                                        <div className="free-shipping">
                                            <div className="shipping">
                                                <img alt="Free Shipping"
                                                     src={`${APICallUrl}/public/images/Shiiping.svg`}/>
                                                Free shipping
                                            </div>
                                            <div className="disc-div">
                                                <img alt="discount"
                                                     src={`${APICallUrl}/public/img/Discount22.png`}/>
                                                Discount:{Math.round((100 * el.price) / el.old_price)}%
                                            </div>
                                        </div>
                                    </a>

                                    {/*</Link>*/}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>

    );
};

export default SelectPackage;