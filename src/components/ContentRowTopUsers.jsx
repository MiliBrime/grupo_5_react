import React, {Component} from "react";

import ContentRow from "./ContentRow";
import TableUsers from "./TableUsers";


class ContentRowTop extends Component{
	render(){
    return(
        <div className="container-fluid">
			<div className="d-sm-flex align-items-center justify-content-between mb-4">
				<h1 className="h3 mb-0 text-gray-800">Listado de usuarios</h1>
			</div>
			<ContentRow/>
			<TableUsers/>
        </div>
    )
}}

export default ContentRowTop;