import {filterId} from "../../../pages";
import {Accordion} from "react-bootstrap";

const Faq = ({data}) => {

    let {info_1, info_2} = filterId(data.homeAll, 210);

    return (

        <section className="website-2 ask-question-area" id="block_10">
            <div className="question-area">
                <h3 className="header-title-h3">{info_1.text1_eng}</h3>
            </div>
            <Accordion className="accordion-div">
                {
                    info_2.map((el, i) => {

                        return (
                            <Accordion.Item key={i} eventKey={i} className="card card-div">
                                <Accordion.Header>{el.text2_eng}</Accordion.Header>
                                <Accordion.Body>
                                    <p className="text-accardion-part">{el.text3_eng}</p>
                                </Accordion.Body>
                            </Accordion.Item>

                        )
                    })
                }
            </Accordion>
        </section>
    );
};

export default Faq;