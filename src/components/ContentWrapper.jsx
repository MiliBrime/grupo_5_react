import React, { Component } from 'react';
import TopBar from "./TopBar";
import ContentRowTop from "./ContentRowTop";
import Footer from "./Footer";


class ContentWrapper extends Component{
    render(){
    return(
        <div className="container-fluid">
            <TopBar/>
            <ContentRowTop/>
            <Footer/>
        </div>
    )
}}

export default ContentWrapper;