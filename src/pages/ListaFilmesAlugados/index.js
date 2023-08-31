import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import Card from '../../components/Card';
import FilmesAlugadosTable from '../FilmesAlugadosTable';

function ListaFilmesAlugados() {

    const history = useHistory();

    const [nome, setNome] = useState('');
    const [genero, setGenero] = useState('');

    const [filme, setFilme] = useState([]);

    const [state, setState] = useState({
        filmes: []
    });

    useEffect(() => {
        const filme = {
            nome: nome,
            genero: genero
        }

        api
        .get("/locacoes",
        {

        },
        )
        .then((response) => {
            setFilme(response.data)
            //console.log(response.data);
            //console.log(response.data[0].filme);
            const lista = response.data;
            setState({...state, filmes: lista});
            //console.log(state.filmes);
        })
        .catch((erro) => {
            console.log(erro);
        });
    }, []);

    return (
        <Card title="Consultar Filmes Alugados">
            <div className='row'>
                <div className='col-md-12'>
                    <div className='bs-component'>
                    <FilmesAlugadosTable filmes={state.filmes}  />
                    </div>
                </div>
            </div>
        </Card>
    );

}

export default ListaFilmesAlugados;