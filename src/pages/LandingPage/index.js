import React from 'react';
import { useHistory } from 'react-router-dom';

function LandingPage() {

    const history = useHistory();

    return (
        <div className="container text-center" >
            <h2>Bem-vindo ao sistema de Locadora</h2>
            <br /> <br />
            <h4>Locadora</h4>
            <br /> <br />

            <div className="offset-md-4 col-md-4">
                <button style={{ width: '100%' }}
                onClick={() => history.push('/home')}
                className="btn btn-success btn-lg">
                <i className="pi pi-sign-in">&nbsp; Acessar</i>    
                </button>
            </div>
        </div>
    )
}

export default LandingPage;