import React from "react";
import { useHistory } from 'react-router-dom';

function Home() {

    const history = useHistory();

return (
    <div className="container text-center" >
        <div className="offset-md-4 col-md-4">
            <button style={{ width: '100%' }}
                onClick={() => history.push('/login')}
                className="btn btn-success btn-lg">
                <i className="pi pi-sign-in"></i> &nbsp; Login
            </button>
            <br/><br></br>
            <button style={{ width: '100%' }}
                onClick={() => history.push('/home')}
                className="btn btn-info btn-lg">
                <i className="pi pi-sign-in"></i> &nbsp; Home
            </button>
            <br/><br></br>
            <button style={{ width: '100%' }}
                onClick={() => history.push('/')}
                className="btn btn-danger btn-lg">
                <i className="pi pi-sign-in"></i> &nbsp; Voltar
            </button>
        </div>
    </div>
);

}

export default Home;