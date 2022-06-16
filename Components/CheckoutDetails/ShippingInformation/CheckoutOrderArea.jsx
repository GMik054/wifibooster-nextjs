import {deleteSummary, selectBonuses, selectSummary} from "../../../redux/summarySlice";
import {useDispatch, useSelector} from "react-redux";
import {APICallUrl} from "../../../pages";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {useEffect, useState} from "react";


const CheckoutOrderArea = ({info_1, info_2}) => {
    let summary = useSelector(selectSummary);
    let bonuses = useSelector(selectBonuses);
    let dispatch = useDispatch();
    let total = summary.price;

    let [coupon, setCoupon] = useState('')
    let [req, setReq] = useState("");
    let [tr, setTr] = useState(false);

    const checkCoupon = (e) => {
        fetch("https://www.prorepeater.com/api/couponCheck", {
            method: 'POST',
            body: JSON.stringify({
                coupon: e,
                total: total
            }),
            headers: {
                "Content-Type": "application/json;charset=UTF-8",
            }
        }).then(res => res.json()).then(res => setReq(res))
    }

    useEffect(() => {
        checkCoupon(coupon)
    }, [bonuses, summary])

    return (
        <div className="checkout-order-area">
            <div className="mobile-sticky-div">
                <div className="order-summary">
                    {/*<input type="hidden" name="product_id" value="332-8-236"/>*/}
                    <h2>{info_1.title_third_eng}</h2>
                    <ul className="order-summary-list">
                        <li><span className="text-bold-left">Item</span><span
                            className="text-bold-left">Price</span>
                        </li>
                        <li>
                                <span
                                    className="text-norm-all product_selected_name">{summary?.name}</span>
                            <span className="text-norm-all">$<span
                                className="product_selected_price">{summary?.price}</span></span>
                        </li>
                        <div className="other-products">
                            {
                                bonuses?.length !== 0 ?
                                    bonuses?.map((el, i) => {
                                        total += el.cartPrice
                                        return (
                                            <li key={i} className="other-product-7595-8-236">
                <span className="text-norm-all">
                    <a data-toggle="tooltip"
                       data-placement="top"
                       title="Remove"
                       className="delete-deal-btn"
                       onClick={() => dispatch(deleteSummary(el))

                       }
                    >
                        <FontAwesomeIcon icon={faTimes}/>
                    </a>{el.name}</span><span className="text-norm-all">
                    <span className="deal-chosen-count">{el.count}</span> x $<span>{el.cartPrice}</span>
                </span></li>)
                                    }) : ""}
                        </div>
                        <li><span className="text-norm-all">Shipping: (Standard)</span><span
                            className="text-norm-all">FREE</span></li>
                        <li>
                            <span className="text-bold-left">Total</span>
                            <span className="text-bold-left">$<span
                                className="text-bold-left product_selected_total">{req.status === 200 ? req.total.toFixed(2) : total}</span>USD</span>
                        </li>
                    </ul>
                </div>
                <div className="order-summary coupon-block">
                    <div className="coupon-input d-flex">
                        <input name="coupon" className="form-control" placeholder="Apply your coupon code"
                               onChange={e => setCoupon(e.target.value)}
                        />
                        <button name="coupon_btn" type="button" value={coupon}
                                onClick={e => {
                                    checkCoupon(e.target.value);
                                    setTr(true)
                                }}
                                className="yellow-placeorder">Apply
                        </button>
                    </div>
                    {
                        tr ? req.status === 500 || req.status === "error" ?
                            <p className="coupon-error">{req.message}</p> :
                            <p className="coupon-success">{req.message}</p> : <></>
                    }

                </div>
            </div>
            <div className="checkout-guarantee-area">
                <h2>{info_1["guarantee-title_eng"]}</h2>
                <div className="guarantee-area">
                    {
                        info_2.map((el, i) => {
                            return (
                                <div key={i} className="checkkout-guarantee-text">
                                    <h5>{el.test_eng}</h5>
                                    <div className="checkout-guarantee-content">
                                        <p>{el.description_eng}</p>
                                        <img width="108" height="109"
                                             src={`${APICallUrl}/${el["append-image"]}`}/>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default CheckoutOrderArea;