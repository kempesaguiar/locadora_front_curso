import React from 'react';

function FilmesAlugadosTable(props) {

    console.log(props);

    const rows = props.filmes.map(filme => {
        console.log(filme);
        const status = filme.status;
        if (status == 'alugado') {
        return (
            <tr key={filme.filme.id}>
                <td>{filme.filme.nome}</td>
                <td>{filme.filme.genero}</td>
                <td>{filme.data} (2 dias para devolucao)</td>
                <td>{filme.valor}</td>
                <td>{filme.status}</td>
                    <td>
                        <div className='btn-group d-flex justify-content-center' role='group'>
                            <button className='btn btn-success' title='Alugar'
                                onClick={e => props.devolveFilme(filme.id)}
                                i
                                type='button'>
                                <i className='pi pi-check'></i>        
                            </button>
                            </div>
                    </td>   
            </tr>
        )
    } else {
        return (
            <tr key={filme.filme.id}>
                <td>{filme.filme.nome}</td>
                <td>{filme.filme.genero}</td>
                <td>{filme.data} (2 dias para devolucao)</td>
                <td>{filme.valor}</td>
                <td>{filme.status}</td>    
                <td></td>    
            </tr>
        )
        }  
    })

        return (
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th scope='col'>Nome</th>
                        <th scope='col'>Genero</th>
                        <th scope='col'>Data</th>
                        <th scope='col'>Valor</th>
                        <th scope='col'>Status</th>
                        <th scope='col'>Devolução</th>
                    </tr>
                </thead>
                <tbody>
                    { rows }
                </tbody>
            </table>
        );
}

export default FilmesAlugadosTable;