import React,{ Component } from "react";

class TablaFilas extends Component{
    constructor(props) {
        super(props);
        this.state = {
            users:[]
        };
    }
        
    componentDidMount() {
        this.fetchUsers();
    }
        
    fetchUsers() {
        fetch("http://localhost:3010/api/users")
            .then(response => response.json())
            .then(responseData => {
                const users = responseData.data;
                users.forEach(user => {
                    fetch(`http://localhost:3010${user.detail}`)
                        .then(response => response.json())
                        .then(userData => {
                            const userWithDetails = { ...user, detail: userData };
                            this.setState(prevState => ({
                                users: [...prevState.users, userWithDetails]
                            }));
                        });
                });
            })
            .catch(error => {
                console.error("Error al obtener usuarios:", error);
            });
    }


    render(){
    return(
        <div className="row">
    <tbody>         
        <tr className="tr-tabla">
            <th>Nombre</th>
            <th>Email</th>
            <th>Teléfono</th>
            <th>Imagen</th>
        </tr>
        {this.state.users.map(user => (
            <tr key={user.id}>
                <td className="td-tabla">{user.name}</td>
                <td>{user.email}</td>
                <td>{user.detail.phone}</td>
                <td><img src={`http://localhost:3010/${user.detail.img}`} alt="Imagen de usuario" /></td>
            </tr>
        ))}
            </tbody>
            </div>
)}}

export default TablaFilas;