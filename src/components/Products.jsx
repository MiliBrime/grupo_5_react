import React,{Component} from "react";

import ContentWrapperProducts from './ContentWrapperProducts';
import SideBar from "./SideBar";

class Users extends Component {
        render(){
        return(
           <>
           <SideBar/>
           <ContentWrapperProducts/>
           </>
        )
    }
}

export default Users;