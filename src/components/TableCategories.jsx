import React,{Component} from "react";
import TableFilasCategories from "./TableFilasCategories";


class Tabla extends Component{
    render(){
        return(
            <div className="container-fluid">
            <table className="tabla-usuarios">
                <TableFilasCategories/>
            </table>
            </div>
    )}
}

export default Tabla;