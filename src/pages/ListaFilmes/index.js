import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import FilmesTable from '../FilmesTable';

function ListaFilmes() {

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
        .get("/filmes/disponiveis",
        {

        },
        )
        .then((response) => {
            setFilme(response.data)
            console.log(response.data);
            const lista = response.data;
            setState({...state, filmes: lista});
        })
        .catch((erro) => {
            console.log(erro);
        });
    }, []);

    return (
        <FilmesTable filmes={state.filmes} />
    );

}

export default ListaFilmes;