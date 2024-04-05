import React,{ Component } from "react";

class TablaFilas extends Component{
    constructor(props) {
        super(props);
        this.state = {
            products:[]
        };
    }
        
    componentDidMount() {
        this.fetchProducts();
    }
        
    fetchProducts() {
        fetch("http://localhost:3010/api/products")
            .then(response => response.json())
            .then(responseData => {
                const products = responseData.data;
                products.forEach(product => {
                    fetch(`http://localhost:3010${product.detail}`)
                        .then(response => response.json())
                        .then(productData => {
                            const productWithDetails = { ...product, detail: productData };
                            this.setState(prevState => ({
                                products: [...prevState.products, productWithDetails]
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
            <th>Precio (USD)</th>
            <th>Marca</th>
            <th>Descripción</th>
            <th>Estado</th>
            <th>Imagen</th>
        </tr>
        {this.state.products.map(product => (
            <tr key={product.id}>
                <td className="td-tabla">{product.name}</td>
                <td>{product.detail.price}</td>
                <td>{product.detail.brand}</td>
                <td>{product.detail.shortDescription}</td>
                <td>{product.detail.status}</td>
                <td><img src={`http://localhost:3010/${product.detail.img}`} alt="Imagen de usuario" /></td>
            </tr>
        ))}
            </tbody>
            </div>
)}}

export default TablaFilas;