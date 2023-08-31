import React from 'react';
import { useHistory } from 'react-router-dom';

function Cliente() {

    const history = useHistory();

return(
    <div className="container text-center" >
    <div className="offset-md-4 col-md-4">
        <button style={{ width: '100%' }}
            onClick={() => history.push('/listafilmes')}
            className="btn btn-success btn-lg">
            <i className="pi pi-sign-in"></i> &nbsp; Alugar filmes
        </button>
        <br/><br></br>
        <button style={{ width: '100%' }}
            onClick={() => history.push('/listafilmesAlugados')}
            className="btn btn-info btn-lg">
            <i className="pi pi-sign-in"></i> &nbsp; Filmes alugados
        </button>
        <br/><br></br>
        <button style={{ width: '100%' }}
            onClick={() => history.push('/login')}
            className="btn btn-danger btn-lg">
            <i className="pi pi-sign-out"></i> &nbsp; Sair
        </button>
    </div>
</div>

);

}

export default Cliente;
