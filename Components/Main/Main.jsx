import Review from "./ReviewSection/Review";
import Banner from "./Banner/Banner";
import Benefits from "./Benefits/Benefits";
import WifiFeatures from "./WifiFeatures/WifiFeatures";
import Faq from "./FAQ/Faq";
import Discount from "./Discount/Discount";
import BottomBanner from "./BottomBanner/BottomBanner";
import Video from "./Video/Video";

const Main = ({data}) => {

    return (
        <div>
            <Banner data={data}/>
            <Benefits data={data}/>
            <Video/>
            <WifiFeatures data={data}/>
            <Review data={data}/>
            <Faq data={data}/>
            <Discount data={data}/>
            <BottomBanner data={data}/>
        </div>
    );
};

export default Main;