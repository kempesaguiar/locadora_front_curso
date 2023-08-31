import React from 'react';

function FilmesAlugadosTable(props) {

    console.log(props);

    const rows = props.filmes.map(filme => {
        //console.log(filme.filme.id);
        return (
            <tr key={filme.filme.id}>
                <td>{filme.filme.nome}</td>
                <td>{filme.filme.genero}</td>
            </tr>
        )
    })

        return (
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th scope='col'>Nome</th>
                        <th scope='col'>Genero</th>
                    </tr>
                </thead>
                <tbody>
                    { rows }
                </tbody>
            </table>
        );
}

export default FilmesAlugadosTable;