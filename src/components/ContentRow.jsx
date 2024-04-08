import React, {Component} from "react";

class ContentRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usersCount: '',
			productsCount: '',
        };
    }
    
      componentDidMount() {
        this.usersApiCall();
        this.productsApiCall();
      }
    
      usersApiCall() {
        fetch("http://localhost:3010/api/users")
            .then(response => response.json())
            .then(responseData => {
                const cantidad = responseData.count;
                this.setState({ usersCount: cantidad });
            })
            .catch(error => {
                console.log(error);
            });
    }

	productsApiCall() {
        fetch("http://localhost:3010/api/products")
            .then(response => response.json())
            .then(responseData => {
                const cantidad = responseData.count;
                this.setState({ productsCount: cantidad });
            })
            .catch(error => {
                console.log(error);
            });
    }

	render(){
    return(
		<div className="row">
		<div className="col-md-4 mb-4" >
			<div  className="card shadow h-100 py-2 bordeColor">
				<div className="card-body">
					<div className="row no-gutters align-items-center">
						<div className="col mr-2">
							<div className="text-xs font-weight-bold text-uppercase mb-1 colorText">
							Total de usuarios 
							</div>
							<div className="h5 mb-0 font-weight-bold text-gray-800">{this.state.usersCount}</div>
						</div>
						<div className="col-auto">
						<i className="film fa-2x text-gray-300"></i>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className="col-md-4 mb-4" >
			<div  className="card shadow h-100 py-2 bordeColor">
				<div className="card-body">
					<div className="row no-gutters align-items-center">
						<div className="col mr-2">
							<div className="text-xs font-weight-bold text-uppercase mb-1 colorText">
							Total de productos
							</div>
							<div className="h5 mb-0 font-weight-bold text-gray-800">{this.state.productsCount}</div>
						</div>
						<div className="col-auto">
						<i className="film fa-2x text-gray-300"></i>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	
    )
}}

export default ContentRow;