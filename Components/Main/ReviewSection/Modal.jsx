// import "./Modal.css";
import {
    addPost,
    changeDesc,
    changeEmail,
    changeName,
    changeRating,
    openModalReview,
    selectItem,
    selectModal,
    selectQuestion,
    uploadPhoto,
    postReview,
} from "../../../redux/reviewSlice";
import {useDispatch, useSelector} from "react-redux";
import {FaStar} from "react-icons/fa";
import ImageUploading from "react-images-uploading";
import {useState} from "react";

const Modal = () => {

        const item = useSelector(selectItem);
        const modal = useSelector(selectModal);
        const question = useSelector(selectQuestion);

        const [errorName, setErrorName] = useState(null);
        const [errorEmail, setErrorEmail] = useState(null);
        const [errorDesc, setErrorDesc] = useState(null);

        const dispatch = useDispatch();

        // const [image, setImage] = useState([]);
        // const onChangeImage = (imageList) => setImage(imageList);
        const onChangeImage = (imageList) => dispatch(uploadPhoto(imageList));

        const sendPost = (action) => {
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
            const isNumber = (a) => /^-?[\d.]+(?:e-?\d+)?$/.test(a);
            let errors = 0;
            if (action.name.trim() === "") {
                setErrorName("Name is required!")
                errors++;
            } else if (isNumber(action.name.trim())) {
                setErrorName("Name is required!")
                errors++;
            } else {
                setErrorName("")
            }
            if (action.email === "") {
                errors++;
                setErrorEmail("Email is required!")
            } else if (!regex.test(action.email)) {
                errors++;
                setErrorEmail("This email not valid. Please correct")
            } else {
                setErrorEmail("")
            }
            if (action.comment.trim() === "") {
                errors++;
                setErrorDesc("This field is required")
            } else {
                setErrorDesc("")
            }

            if (errors === 0) {
                dispatch(addPost(action))
                dispatch(postReview(action))
            }

        }

        return (
            <div className="modal fade" onClick={() => dispatch(openModalReview(modal))}>
                <div className="modal-dialog modal-dialog-centered modal-lg" onClick={e => e.stopPropagation()}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2>{question ? "Ask question" : "Write Review"}</h2>
                            <span className="close" onClick={() => dispatch(openModalReview(modal))}>
                            <img src="https://www.boosternet.co.uk/public/img/x.png"/></span>
                        </div>
                        <div className="modal-body">
                            <form id="reviewForm" method="post" encType="mutlipart/form-data"
                                  onSubmit={(e) => e.preventDefault()}>
                                <div className="modal-div">
                                    <div className="full-input-write">
                                        <div className="form-group required">
                                            <label>Name</label>
                                            <input
                                                className="form-control"
                                                placeholder="Full name"
                                                required=""
                                                name="name"
                                                type="text"
                                                value={item.name}
                                                onChange={e => {
                                                    dispatch(changeName(e.target.value));
                                                    setErrorName(null)
                                                }}
                                            />
                                            <p style={{color: "red"}}>{errorName}</p>
                                        </div>

                                        {
                                            question ? "" :
                                                <div className="form-group required">
                                                    <label>Give stars</label>
                                                    <div>
                                                        {
                                                            [...Array(5)].map((star, i) => {
                                                                const ratingValue = i + 1;

                                                                return (

                                                                    <label key={i}>
                                                                        <input
                                                                            type="radio"
                                                                            name="rating"
                                                                            className="inputHide star-check"
                                                                            value={ratingValue}
                                                                            onChange={e => dispatch(changeRating(e.target.value))}
                                                                        />
                                                                        <FaStar className="star"
                                                                                color={ratingValue <= item.rating ? "#ffc107" : "#e4e5e9"}/>
                                                                    </label>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </div>

                                        }
                                    </div>
                                    <div className="full-input-write">
                                        <div className="form-group required">
                                            <label>Email</label>
                                            <input
                                                className="form-control"
                                                placeholder="Email"
                                                name="email"
                                                type="email"
                                                value={item.email}
                                                onChange={e => {
                                                    dispatch(changeEmail(e.target.value))
                                                    setErrorEmail(null)
                                                }}
                                            />
                                            <p style={{color: "red"}}>{errorEmail}</p>
                                        </div>
                                        <div className="form-group required">
                                            <label>{question ? "Question:" : "Review:"} </label>
                                            <input
                                                className="form-control"
                                                placeholder="Type here ..."
                                                name="comment"
                                                type="text"
                                                value={item.desc}
                                                onChange={e => {
                                                    dispatch(changeDesc(e.target.value))
                                                    setErrorDesc(null)
                                                }}
                                            />
                                            <p style={{color: "red"}}>{errorDesc}</p>
                                        </div>

                                    </div>
                                    <div>
                                        <ImageUploading
                                            multiple
                                            value={item.image}
                                            onChange={onChangeImage}
                                            maxNumber={70}
                                            dataURLKey="data_url"
                                            name="filename"
                                        >
                                            {({
                                                  imageList,
                                                  onImageUpload,
                                                  onImageUpdate,
                                                  onImageRemove,
                                                  isDragging,
                                                  dragProps
                                              }) => (
                                                <div className="upload__image-wrapper">
                                                    <button
                                                        style={isDragging ? {color: 'red'} : undefined}
                                                        className="photoStyle"
                                                        onClick={onImageUpload}
                                                        {...dragProps}
                                                        // disabled={imageList.length === 1 ? true : false}
                                                    >
                                                        Upload Photo
                                                    </button>
                                                    &nbsp;
                                                    {imageList.map((image, index) => (
                                                        <div key={index} className="image-item">
                                                            <img src={image['data_url']} alt="" width="100"
                                                                 onClick={() => onImageUpdate(index)}/>
                                                            <div className="image-item__btn-wrapper">
                                                                <div onClick={() => onImageRemove(index)}>Remove</div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </ImageUploading>
                                    </div>
                                    <div className="modal-footer modal-foot-up">

                                        <button
                                            className="btn btn-secondary"
                                            type='button'
                                            onClick={() => sendPost({
                                                name: item.name,
                                                email: item.email,
                                                comment: item.desc,
                                                score: item.rating,
                                                files: item.image,
                                                type: `${question ? "question" : "review"}`
                                            })}
                                        >Send
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
;

export default Modal;