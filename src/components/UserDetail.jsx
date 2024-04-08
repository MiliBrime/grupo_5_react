import React, {Component} from 'react';

import SideBar from './SideBar';
import TopBar from './TopBar';
import Footer from './Footer';
import ContentRow from './ContentRow';

class UserDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lastUser: "",
        };
    }
    
    componentDidMount() {
        this.fetchLastUser();
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

    render() {
        const {lastUser } = this.state;
        return(
            <>
            <SideBar/>
            <div className="container-fluid">
            <TopBar/>
            <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
				<h1 className="h3 mb-0 text-gray-800">Último usuario creado</h1>
			</div>
            <ContentRow/>
            <div className="row">
            <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4 ultimo">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">{lastUser.name}</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                    <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: '15rem'}} src={`http://localhost:3010/${lastUser.img}`} alt=" Last User Created "/>
                    </div>
                    <p class="precio"> {lastUser.email}</p>                    
                    <p >Teléfono: { lastUser.phone}</p>
                </div>
            </div>
        </div>
            </div>
            <Footer/>
            </div>
            </div>
            </>
        )
    }
}

export default  UserDetail;