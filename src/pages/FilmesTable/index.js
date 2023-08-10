import React from 'react';

function FilmesTable(props) {

    const rows = props.filmes.map(filme => {
        return (
            <tr key={filme.id}>
                <td>{filme.nome}</td>
                <td>{filme.genero}</td>
                <td>
                    <div className='btn-group d-flex justify-content-center' role='group'>
                        <button className='btn btn-success' title='Alugar'
                            onClick={e => props.alugaFilme(filme.id)}
                            type='button'>
                            <i className='pi pi-check'></i>        
                        </button>
                        <button className='btn btn-primary' title='Detalhes'
                            onClick={e => props.detalhesFilme(filme.id)}
                            type='button'>
                            <i className='pi pi-pencil'></i>        
                        </button>
                        <button className='btn btn-danger' title='Valor'
                            onClick={e => props.valorFilme(filme.id)}
                            type='button'>
                            <i className='pi pi-trash'></i>        
                        </button>
                    </div>
                </td>
            </tr>
        )
    })

        return (
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th scope='col'>Nome</th>
                        <th scope='col'>Genero</th>
                        <th scope='col'>Ação</th>
                    </tr>
                </thead>
                <tbody>
                    { rows }
                </tbody>
            </table>
        );
}

export default FilmesTable;