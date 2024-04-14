import {
    Banner,
    BannerText
} from "./MainStyle";
import { useNavigate } from "react-router-dom";

function Mainpage(){


    let navigate = useNavigate(); // 페이지 이동

    return(
        <Banner>
            <BannerText>환영합니다</BannerText>
        </Banner>
    );
}


export default Mainpage;