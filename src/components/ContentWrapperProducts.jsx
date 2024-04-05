import React,{Component} from "react";

import TopBar from './TopBar';
import ContentRowTopProducts from './ContentRowTopProducts';
import Footer from './Footer';

class ContentWrapperProducts extends Component {
    render(){
        return(
            <div className="container-fluid">
                <TopBar/>
                <ContentRowTopProducts/>
                <Footer/>
            </div>
        )
        
    }
}

export default ContentWrapperProducts;