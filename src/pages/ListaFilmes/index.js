import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import FilmesTable from '../FilmesTable';
import Card from '../../components/Card';

function ListaFilmes() {

    const history = useHistory();

    const [nome, setNome] = useState('');
    const [genero, setGenero] = useState('');

    const [filme, setFilme] = useState([]);

    const [state, setState] = useState({
        filmes: []
    });

    const alugaFilme = (id) => {
        console.log('Aluga filme');

        const idCliente = JSON.parse(localStorage.getItem("userId"));
        console.log(idCliente);

        const cliente = {
            id: idCliente
        }

        api
        .post("/locacoes",
        {
            cliente,
            "filme": {id},
            "data": "17/08/2023",
            "valor": "10,00"
        },
        )
        .then((response) => {
            console.log(response.data)
            history.push("/cliente");
        })
        .catch((erro) => {
            console.log(erro);
        });


    };

    const detalhesFilme = () => {
        console.log('Detalhes filme');
    };

    const valorFilme = () => {
        console.log('Valor filme');
    }


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
        <Card title="Consultar Filmes">
            <div className='row'>
                <div className='col-md-12'>
                    <div className='bs-component'>
                    <FilmesTable filmes={state.filmes} 
                        alugaFilme={alugaFilme}
                        detalhesFilme={detalhesFilme}
                        valorFilme={valorFilme} />
                    </div>
                </div>
            </div>
        </Card>
    );

}

export default ListaFilmes;