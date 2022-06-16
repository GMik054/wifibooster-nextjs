import {useState} from "react";
import moment from "moment";
import {APICallUrl} from "../../../pages";

const CustomerReviews = ({reviews}) => {

    const [visible, setVisible] = useState(4);
    const showMore = () => setVisible(visible + 4);

    return (
        <>
            <div className="full-reviews-div" id="reviews_list">
                {
                    reviews.slice(0, visible).map((el, i) => {
                        return (
                            <div className="verified-div bottom" key={i}>
                                <div className="reviewed-div-all">
                                    <div className="reviewed-div-all-part">
                                        <div className="reviewed-imgreviewed-img">
                                            <img width="56" height="56" alt={el.name}
                                                 src={`${APICallUrl}/reviews_images/${el.uid}/${el.image}`}/>
                                        </div>
                                        <div className="reviewed-text">
                                            <p>{el.name}<span>
<img width="16" height="17" src={`${APICallUrl}/public/img/Groupvectoor.png`} className="vect-img"/>
                                                Verified Customer
                                            </span></p>
                                            <div className="rating-star-parent">
                                                <div className="rating-star-procent"
                                                     style={{width: `${el.score / 5 * 100}% `}}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="review-date-text">
                                        <p>
                                            Reviewed on {moment(el.insert_date).format('MM MMM YYYY')} </p>
                                    </div>
                                </div>
                                <div className="review-long-text">
                                    <p>{el.comment}</p>npm
                                </div>
                            </div>

                        )
                    })
                }
            </div>
            <div className="review-see-more text-center">
                <a onClick={showMore} className="show-more">See More</a>
            </div>
        </>
    );
};


export default CustomerReviews;