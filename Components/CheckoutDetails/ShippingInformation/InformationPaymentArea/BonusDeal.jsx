import React, {useEffect, useState} from 'react';
import {
    selectSelected,
    setBonusProduct,
    setSelected,
    toggle,
    increment,
    decrement,
    changePriceInput,
} from "../../../../redux/summarySlice";
import {useDispatch, useSelector} from "react-redux";

const BonusDeal = ({data}) => {

    let {bonusProducts} = data;
    let dispatch = useDispatch();
    let selected = useSelector(selectSelected);

    useEffect(() => {
        for (let i = 0; i < bonusProducts.length; i++) {
            let a = {};
            if (bonusProducts[i].url === "7-in-1-hu") {
                a.cartPrice = Number(bonusProducts[i].price);
                a.cartPriceOld = Number(bonusProducts[i].old_price);
                a.count = 1;
                dispatch(setSelected(Object.assign(a, bonusProducts[i])));
                break;
            }
        }
    }, []);

    return (
        <div className="bonus-deal-full-area">
            <div className="bonus-deal-text-part">
                <h5>Bonus Deal</h5>
            </div>
            <div className="bonus-deal-products-area">
                <div className="bonus-deal-image-area">
                    <div className="bonus-deal-singl-product image-append-part">
                        <img src={`${selected === "" ? "" : selected?.image}`}/>
                    </div>
                    <div className="bonus-deal-products-check">
                        <h5 className="header-title-h5">Products you might also love</h5>
                        <div className="single-product-select-part">
                            {
                                bonusProducts.map((el, i) => {
                                    return (
                                        <div key={i} className={`products-near-box
                                        ${el.id === selected?.id ? "selected" : ""}
                                        `}
                                             onClick={() => dispatch(toggle(el))}
                                        >
                                            <div className="product-check-area-full">
                                                <div className="product-check-area">
                                                    <img src={`${el.image}`}/>
                                                </div>
                                                <div className="mobile-design-edit">
                                                    {/*<div className="product-name-part-mob">*/}
                                                    {/*    <p>{el.name}</p>*/}
                                                    {/*</div>*/}
                                                    <div className="product-price-area">
                                                        <p>
                                                            ${el.price}
                                                            <del>${el.old_price}</del>
                                                        </p>
                                                        <label className="checkbox-input">
                                                            <input data-product-name="7 in 1 Hub" value="7595-8-236"
                                                                   data-discounted-price="60" data-price="29.9"
                                                                   type="radio"
                                                                   className="input-assumpte" name="other_product"/>
                                                            <span className={
                                                                `checkmark  ${el.id === selected?.id ? "checkmark-select" : ""}`}/>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-name-part">
                                                <p>{el.name}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="media-price-part">
                    <div className="product-price-part-mob">
                        <p className="product-price"><span className="price-title">Price:</span>$<span
                            className="price-list product-price">9.00</span></p>
                        <p className="deal-save-block">
                    <span className="save-price-area">
                    Save: $<span className="deal-save-price">6.00</span>
                    </span>
                            <span className="price-part-second">
                    $<span className="deal-real-price">15.00</span>
                    </span>
                        </p>
                    </div>
                    <div className="deal-media-part">
                        <div className="bonus-deal-single-product image-append-part">
                            <img src="https://eworld-erp.s2s.am/product_images/GxLS0RUWNcThz/141.svg"/>
                        </div>
                        <div className="bonus-deal-quantity-part">
                            <div className="product-count">
                                <p className="quantity-text-part">QNTY:</p>
                                <div className="count-part-area">
                                    <button
                                        className="button-count no-active"
                                        type="button"
                                        onClick={() => dispatch(decrement(selected))}
                                    >-
                                    </button>
                                    <input
                                        // step="1"
                                        id="product_count_fixed"
                                        type="number"
                                        min="1" max="999"
                                        className="form-control number-product"
                                        value={selected?.count}
                                        onChange={e => dispatch(changePriceInput(e.target.value))}
                                    />
                                    <button
                                        className="button-count plus"
                                        type="button"
                                        onClick={() => dispatch(increment(selected))}
                                    >+
                                    </button>
                                </div>
                            </div>
                            <div className="product-price-part">
                                <p className="product-price"><span className="price-title">Price:</span>$<span
                                    className="price-list">{selected?.cartPrice?.toFixed(2)}</span></p>
                                <p className="deal-save-block"><span className="save-price-area">Save: $<span
                                    className="deal-save-price">
                                    {!isNaN(selected?.old_price) && !isNaN(selected?.price) ?
                                        Number(selected?.cartPriceOld?.toFixed(2) - selected?.cartPrice?.toFixed(2)) : ""}
                                </span></span><span className="price-part-second">$<span
                                    className="deal-real-price">{selected?.cartPriceOld?.toFixed(2)}</span></span>
                                </p>
                            </div>
                            <div className="product-shop-area">
                                <button type="button" className="btn-primary add-to-deal"
                                        onClick={() => dispatch(setBonusProduct(selected))}
                                >Add to the deal!
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BonusDeal;