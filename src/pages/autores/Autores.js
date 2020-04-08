import React, { Component, Fragment } from 'react';
import Header from '../../components/header/Header';
import ApiService from "../../utils/ApiService";
import Tabela from "../../components/tabela/Tabela";
import Toast from "../../components/toast/Toast";


class Autores extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nomes: [],
            toastOpen: false,
        };
    }

    componentDidMount() {
        ApiService.ListaNomes()
            .then(res => {
                if (res.message === 'success'){
                    this.setState({
                        nomes: [...this.state.nomes, ...res.data]
                    })
                }
            })
            .catch(err => this.setState({toastOpen: true}));
    }

    render() {

        const campos = [
            {titulo: 'Nome', dado: 'nome'},
        ];

        return (
            <Fragment>
                <Header />
                <div className='container'>
                    <h1>Página de Autores</h1>
                    <Tabela dados={this.state.nomes} campos={campos}/>
                </div>
                <Toast
                    open={this.state.toastOpen}
                    handleClose={
                        () => this.setState({toastOpen: false})
                    }
                    severity={'error'}>
                    Não foi possível carregar os autores
                </Toast>
            </Fragment>
        );
    }
}

export default Autores;
