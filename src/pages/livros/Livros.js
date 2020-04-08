import React, { Component, Fragment } from 'react';
import Header from '../../components/header/Header';
import ApiService from "../../utils/ApiService";
import Tabela from "../../components/tabela/Tabela";
import Toast from "../../components/toast/Toast";


class Livros extends Component {
    constructor(props) {
        super(props);

        this.state = {
            livros: [],
            toastOpen: false,
        };
    }

    componentDidMount() {
        ApiService.ListaLivros()
            .then(res => {
                if (res.message === 'success'){
                    this.setState({
                        livros: [...this.state.livros, ...res.data]
                    })
                }
            })
            .catch(err => this.setState({toastOpen: true}));
    }

    render() {
        const campos = [
            {titulo: 'Livros', dado: 'livro'},
        ];

        return (
            <Fragment>
                <Header />
                <div className='container'>
                    <h1>Página de Livros</h1>
                    <Tabela dados={this.state.livros} campos={campos}/>
                </div>
                <Toast
                    open={this.state.toastOpen}
                    handleClose={
                        () => this.setState({toastOpen: false})
                    }
                    severity={'error'}>
                    Não foi possível carregar os livros
                </Toast>
            </Fragment>
        );
    }
}

export default Livros;
