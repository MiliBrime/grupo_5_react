import React,{ Component } from "react";

class TablaFilas extends Component{
    constructor(props) {
        super(props);
        this.state = {
            productsByCategory: {} 
        };
    }
        
    componentDidMount() {
        this.productsApiCall();
    }
        
    productsApiCall() {
        fetch("http://localhost:3010/api/products")
            .then(response => response.json())
            .then(responseData => {
                const productsByCategory = responseData.countByCategory; 
                this.setState({ productsByCategory }); 
            })
            .catch(error => {
                console.log(error);
            });
    }

    render(){
        const { productsByCategory } = this.state; // Extraer productos por categoría del estado
        return (
            <div className="row">
                <table>
                    <thead>
                        <tr className="tr-tabla">
                            <th>Categoría</th>
                            <th>Cantidad</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.entries(productsByCategory).map(([category, count]) => (
                            <tr key={category}>
                                <td>{category}</td>
                                <td>{count}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TablaFilas;