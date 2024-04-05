import React, {Component} from "react"

class LastProduct extends Component{
    constructor(props) {
        super(props);
        this.state = {
			lastProduct: "",
            lastUser:"",
        };
    }
    
    componentDidMount() {
        this.fetchLastProduct();
        this.fetchLastUser();
    }
    
    fetchLastProduct() {
        fetch("http://localhost:3010/api/products")
            .then(response => response.json())
            .then(responseData => {
                const products = responseData.data;
                const lastProduct = products[products.length - 1]; 
                fetch(`http://localhost:3010/api/products/${lastProduct.id}`)
                    .then(response => response.json())
                    .then(productDetail => {
                        this.setState({ lastProduct: productDetail });
                    })
                    .catch(error => {
                        console.log(error);
                    });
            })
            .catch(error => {
                console.log(error);
            });
    }
    fetchLastUser() {
        fetch("http://localhost:3010/api/users")
            .then(response => response.json())
            .then(responseData => {
                const users = responseData.data;
                const lastUser = users[users.length - 1]; 
                fetch(`http://localhost:3010/api/users/${lastUser.id}`)
                    .then(response => response.json())
                    .then(userDetail => {
                        this.setState({ lastUser: userDetail });
                    })
                    .catch(error => {
                        console.log(error);
                    });
            })
            .catch(error => {
                console.log(error);
            });
    }

    render(){
        const { lastUser, lastProduct } = this.state;
        return (
        <div className="row">
            <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Último usuario creado</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                    <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: '15rem'}} src={`http://localhost:3010/${lastUser.img}`} alt=" Last User Created "/>
                    </div>
                    <p> {lastUser.name}</p>                    
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">Ver detalle</a>
                </div>
            </div>
        </div>
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Último producto creado</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: '15rem'}} src={`http://localhost:3010/${lastProduct.img}`} alt=" Last Product Created "/>
                    </div>
                    <p> {lastProduct.name}</p>                    
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">Ver detalle</a>
                </div>
            </div>
        </div>
    </div>
    )}}

export default LastProduct;