import TopBar from "./TopBar";
import ContentRowTop from "./ContentRowTop";
import Footer from "./Footer";
import Tabla from './Tabla';


function ContentWrapper(){
    return(
        <div>
            <TopBar/>
            <ContentRowTop/>
            <Tabla/>
            <Footer/>
        </div>
    )
}

export default ContentWrapper;