import React, {Component} from 'react';
import './Home.css';

import Header from "../../components/header/Header";
import Tabela from "../../components/tabela/Tabela";
import Formulario from "../../components/formulario/Formulario";
import ApiService from "../../utils/ApiService";
import Toast from "../../components/toast/Toast";
import Grid from "@material-ui/core/Grid";
import PageTitle from "../../components/PageTitle";

class Home extends Component{

    constructor(props) {
        super(props);
        this.state = {
            autores: [],
            mensagem: {
                open: false,
                text: '',
                tipo: 'success'
            }
        };
    }

    escutadorDeSubmit = dados => {
        const autor = {
            nome: dados.nome,
            livro: dados.livro,
            preco: dados.preco,
        };
        ApiService.CriaAutor(JSON.stringify(autor))
            .then(res => {
                if (res.message === 'success'){
                    this.setState({
                        autores:[...this.state.autores, res.data],
                        mensagem: {...this.state.mensagem,
                            open: true,
                            text: 'Inserido com sucesso',
                            tipo: 'success'
                        }
                    });
                }
            })
            .catch(err => {
                this.setState({
                    mensagem: {...this.state.mensagem,
                        open: true,
                        text: 'Erro ao inserir o autor',
                        tipo: 'error'
                    }
                });
            });
    };

    removeAutor = id => {
        const { autores } = this.state;

        const autoresAtualizados = autores.filter((autor) => {
            return autor.id !== id;
        });

        ApiService.RemoveAutor(id)
            .then(res => {
                if (res.message === 'deleted'){
                    this.setState({
                        autores: [...autoresAtualizados],
                        mensagem: {...this.state.mensagem,
                            open: true,
                            text: 'Removido com sucesso!',
                            tipo: 'success'
                        }
                    });
                }
            })
            .catch(err => {
                this.setState({
                    mensagem: {...this.state.mensagem,
                        open: true,
                        text: 'Erro remover o autor',
                        tipo: 'error'
                    }
                });
            });

    };

    componentDidMount() {
        ApiService.ListaAutores()
            .then(res => {
                if (res.message === 'success'){
                    this.setState({
                        autores: [...this.state.autores, ...res.data]
                    })
                }
            })
            .catch(err => {
                this.setState({
                    mensagem: {...this.state.mensagem,
                        open: true,
                        text: 'Erro ao listar autores',
                        tipo: 'error'
                    }
                });
            });
    }

    render() {
        const campos = [
            {titulo: 'Autores', dado: 'nome'},
            {titulo: 'Livros', dado: 'livro'},
            {titulo: 'Preços', dado: 'preco'}
        ];
        return (
            <>
                <Header/>
                <PageTitle>Home</PageTitle>
                <Grid container spacing={3} alignItems={"center"} direction={"row"} justify={"center"}>
                    <Grid item>
                        <Formulario escutadorDeSubmit={ this.escutadorDeSubmit }/>
                    </Grid>
                    <Grid item sm={12} md={10}>
                        <Tabela campos={campos} dados={ this.state.autores } removeDados={ this.removeAutor }/>
                    </Grid>
                </Grid>
                <Toast
                    open={this.state.mensagem.open}
                    handleClose={
                        () => this.setState({mensagem: {...this.state.mensagem, open: false}})
                    }
                    severity={this.state.mensagem.tipo}>
                    {this.state.mensagem.text}
                </Toast>
            </>
        );
    }

}

export default Home;
