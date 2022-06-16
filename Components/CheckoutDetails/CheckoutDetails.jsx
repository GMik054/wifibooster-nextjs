import ShippingInformation from "./ShippingInformation/ShippingInformation";
import SelectPackage from "./SelectPackage/SelectPackage";

const CheckoutDetails = ({data}) => {
    return (
        <div>
            <SelectPackage data={data}/>
            <ShippingInformation data={data}/>
        </div>
    );
};

export default CheckoutDetails;