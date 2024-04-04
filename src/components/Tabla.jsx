import React from "react";
import TablaFilas from "./TablaFilas";


function Tabla(){
    return(
        <table>
            <TablaFilas
            titulos={["fila 1", "fila 2"]}
            duraciones={[25, 50]}
            generos={["fantasía","animación"]}
            premios={[10, 20]}
            raiting={[1, 2]}
            />
        </table>
    )
}

export default Tabla;