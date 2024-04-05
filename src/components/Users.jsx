import React,{Component} from "react";
import {useParams} from "react-router-dom";

import ContentWrapperUsers from './ContentWrapperUsers';
import SideBar from "./SideBar";

class Users extends Component {
    render(){
            let { id } = useParams();
            let idReal = Number( id );
        return(
           <>
           <SideBar/>
           <ContentWrapperUsers/>
           </>
        )
    }
}

export default Users;