import React from "react";

function TablaFilas(props){
    return(
    <tbody>
         
            <tr>
                <th>Título</th>
                <th>Duración</th>
                <th>Raiting</th>
                <th>Género</th>
                <th>Premios</th>
            </tr>
         {props.titulos.map((titulo,i)=>{
            return(
            <tr key={"tabla" + i}>
                <td>{titulo}</td>
                <td>{props.duraciones[i]}</td>
                <td>{props.raiting[i]}</td>
                <td>{props.generos[i]}</td>
                <td>{props.premios[i]}</td>
            </tr>
            )
        })}
        </tbody>
    )
}

export default TablaFilas;