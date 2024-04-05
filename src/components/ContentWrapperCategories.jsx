import React,{Component} from "react";

import TopBar from './TopBar';
import ContentRowTopCategories from './ContentRowTopCategories';
import Footer from './Footer';

class ContentWrapperProducts extends Component {
    render(){
        return(
            <div className="container-fluid">
                <TopBar/>
                <ContentRowTopCategories/>
                <Footer/>
            </div>
        )
        
    }
}

export default ContentWrapperProducts;