import React,{Component} from "react";

import ContentWrapperCategories from './ContentWrapperCategories';
import SideBar from "./SideBar";

class Users extends Component {
        render(){
        return(
           <>
           <SideBar/>
           <ContentWrapperCategories/>
           </>
        )
    }
}

export default Users;