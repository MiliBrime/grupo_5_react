import React,{Component} from "react";

import ContentWrapperUsers from './ContentWrapperUsers';
import SideBar from "./SideBar";

class Users extends Component {
    render(){
        return(
           <>
           <SideBar/>
           <ContentWrapperUsers/>
           </>
        )
    }
}

export default Users;