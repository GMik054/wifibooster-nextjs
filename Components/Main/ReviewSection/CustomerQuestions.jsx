import {APICallUrl} from "../../../pages";
import {useState} from "react";
import moment from "moment";

const CustomerQuestions = ({questions}) => {

    const [visible, setVisible] = useState(4);
    const showMore = () => setVisible(visible + 4);

    return (
        <>
            <div className="full-reviews-div" id="reviews_list">
                {
                    questions.slice(0, visible).map((el, i) => {
                        let replies = el.replies[0];

                        return (
                            <div className="verified-div bottom" key={i}>
                                <div className="reviewed-div-all">
                                    <div className="reviewed-div-all-part">
                                        <div className="reviewed-imgreviewed-img">
                                            <img width="56" height="56" alt={el.name}
                                                 src={`${APICallUrl}/reviews_images/${el.uid}/${el.image}`}/>
                                        </div>
                                        <div className="reviewed-text">
                                            <p>{el.name}</p>
                                        </div>
                                    </div>
                                    <div className="review-date-text">
                                        <p>
                                            {moment(el.insert_date).format('MM MMM YYYY')} </p>
                                    </div>
                                </div>
                                <div className="review-long-text">
                                    <p>{el.comment}</p>
                                </div>
                                <div className="reply-div">
                                    <div className="verified-div verified-reply">
                                        <div className="reviewed-div-all">
                                            <div className="reviewed-div-all-part">
                                                <div className="reviewed-imgreviewed-img">
                                                    <img width="56" height="56" alt={replies.name}
                                                         src={`${APICallUrl}/reviews_images/${replies.uid}/${replies.image}`}/>
                                                </div>
                                                <div className="reviewed-text">
                                                    <p>{replies.name}</p>
                                                </div>
                                            </div>
                                            <div className="review-date-text">
                                                <p>
                                                    {moment(replies.insert_date).format('MM MMM YYYY')} </p>
                                            </div>
                                        </div>
                                        <div className="review-long-text">
                                            <p>{replies.comment}</p>
                                        </div>
                                    </div>
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


export default CustomerQuestions;