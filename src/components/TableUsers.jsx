import React,{Component} from "react";
import TableFilasUsers from "./TableFilasUsers";


class Tabla extends Component{
    render(){
        return(
            <div className="container-fluid">
            <table className="tabla-usuarios">
                <TableFilasUsers/>
            </table>
            </div>
    )}
}

export default Tabla;