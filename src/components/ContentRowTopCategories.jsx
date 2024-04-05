import React, {Component} from "react";

import ContentRow from "./ContentRow";
import TableCategories from "./TableCategories";


class ContentRowTop extends Component{
	render(){
    return(
        <div className="container-fluid">
			<div className="d-sm-flex align-items-center justify-content-between mb-4">
				<h1 className="h3 mb-0 text-gray-800">Productos por categoría</h1>
			</div>
			<ContentRow/>
			<TableCategories/>
        </div>
    )
}}

export default ContentRowTop;