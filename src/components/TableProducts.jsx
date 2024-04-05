import React,{Component} from "react";
import TableFilasProducts from "./TableFilasProducts";


class Tabla extends Component{
    render(){
        return(
            <div className="container-fluid">
            <table className="tabla-usuarios">
                <TableFilasProducts/>
            </table>
            </div>
    )}
}

export default Tabla;