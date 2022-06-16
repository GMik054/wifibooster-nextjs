import CheckoutOrderArea from "./CheckoutOrderArea";
import {filterId} from "../../../pages";
import InformationPaymentArea from "./InformationPaymentArea/InformationPaymentArea";

const ShippingInformation = ({data}) => {

    let {info_1, info_2} = filterId(data.checkout, 219);

    return (
        <div className="website-2 checkout-form-group">
            <div className="checkout-title-area">
                <h2>{info_1.title_eng}</h2>
                <div className="checkout-signing-info">
                    <InformationPaymentArea data={data}/>
                    <CheckoutOrderArea info_1={info_1} info_2={info_2}/>
                </div>

            </div>
        </div>
    );
};

export default ShippingInformation;