import React from 'react';
import Information from "./Information";
import BonusDeal from "./BonusDeal";
import PaymentArea from "./PaymentArea";

const InformationPaymentArea = ({data}) => {
    return (
        <div className="information-payment-area" data-select2-id="select2-data-8-ktfu">
            <Information data={data}/>
            <BonusDeal data={data}/>
            <PaymentArea data={data}/>
        </div>
    );
};

export default InformationPaymentArea;