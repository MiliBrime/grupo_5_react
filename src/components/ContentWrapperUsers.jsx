import React,{Component} from "react";

import TopBar from './TopBar';
import ContentRowTopUsers from './ContentRowTopUsers';
import Footer from './Footer';

class ContentWrapperUsers extends Component {
    render(){
        return(
            <div className="container-fluid">
                <TopBar/>
                <ContentRowTopUsers/>
                <Footer/>
            </div>
        )
        
    }
}

export default ContentWrapperUsers;