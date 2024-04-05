import React, { Component } from 'react';

import SideBar from './SideBar';
import ContentWrapper from './ContentWrapper';


class Home extends Component {
    render(){
        return(
            <>
            <SideBar/>
            <ContentWrapper/>
            </>
        )
    }
}

export default Home;