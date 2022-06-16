import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {openModalReview, openModalQuestion, selectModal} from "../../../redux/reviewSlice";
import Modal from "./Modal";
import {filterId} from "../../../pages";
import CustomerReviews from "./CustomerReviews";
import CustomerQuestions from "./CustomerQuestions";

const Review = ({data}) => {
    let {info_1, info_2} = filterId(data.homeAll, 209);

    const [toggleActive, setToggleActive] = useState(1);

    const toggle = (index) => {
        setToggleActive(index)
    }

    const modal = useSelector(selectModal);
    const dispatch = useDispatch();


    return (
        <div className="review">
            <div className="review-section">
                <h3 className="section_title">{info_1.first_eng}</h3>
                <div className="home_section_div">
                    <div className="rating-div">
                        <h5>{info_1.second_eng}</h5>
                        <ul>
                            {
                                info_2.map(el => {
                                    return (
                                        <li key={el.number}>
                                            <div className="five-stars-div">
                                                <span className="stars-span">{el.stars_eng}</span>
                                                <div className="progress-star">
                                                    <div className="progress-filled"
                                                         style={{width: el.percent}}/>
                                                </div>
                                                <span className="percent-span">{el.percent}</span>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="RewWrap">
                        <div className="customer-rating-div">
                            <div className="reviews_container">
                                <h5 className="Rew1Title">{info_1.textt_eng}</h5>
                                <div className="rating-full-display">
                                    <div className="num-stars">
                                        <p>{info_1.num_eng}</p>
                                        <div className="rating-star-parent mobile-display">
                                            <div className="rating-star-procent"
                                                 style={{width: `${info_1.num / 5 * 100}%`}}
                                            />
                                        </div>
                                    </div>
                                    <div className="ratings-text">
                                        <p>{info_1.span_eng}</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="review_button_div ">
                            <div className="block-in">
                                <button className="btn-white" onClick={() => dispatch(openModalReview(modal))}>
                                    {info_1["button-text_eng"]}
                                </button>
                            </div>
                            <div className="block-in">
                                <button className="btn-white" onClick={() => dispatch(openModalQuestion(modal))}>
                                    {info_1["button-txt_eng"]}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {modal ? <Modal/> : ""}
                <div className="reviews-questions">
                    <div className="reviews-questions-modal">
                        <a
                            className={`rev-button ${toggleActive === 1 ? "active" : ""}`}
                            onClick={data.reviews.length > 0 ? () => toggle(1) : null}
                        >{JSON.parse(info_1.link_text_eng).name}</a>
                        <a
                            className={`rev-button ${toggleActive === 2 ? "active" : ""}`}
                            onClick={data.questions.length > 0 ? () => toggle(2) : null}
                        >{JSON.parse(info_1.link2_eng).name}</a>
                    </div>
                    {
                        toggleActive === 2 ?
                            <CustomerQuestions questions={data.questions}/> :
                            <CustomerReviews reviews={data.reviews}/>
                    }

                </div>
            </div>
        </div>
    )
};


export default Review;