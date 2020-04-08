import React, {Component} from "react";
import FormValidator from "../../utils/FormValidator";
import {TextField} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Toast from "../toast/Toast";

class Formulario extends Component {

    constructor(props) {
        super(props);

        this.validador = new FormValidator([
            {
                campo: 'nome',
                metodo: 'isEmpty',
                validoQuando: false,
                mensagem: 'Entre com um nome'
            },
            {
                campo: 'livro',
                metodo: 'isEmpty',
                validoQuando: false,
                mensagem: 'Entre com um livro'
            },
            {
                campo: 'preco',
                metodo: 'isInt',
                args: [{min: 0, max: 999}],
                validoQuando: true,
                mensagem: 'Entre com um valor numerico'
            },

        ]);

        this.stateInicial = {
            nome: '',
            livro: '',
            preco: '',
            validacao: this.validador.valido(),
            mensagem: {
                open: false,
                text: '',
                tipo: 'success'
            }
        };

        this.state = this.stateInicial;
    }

    escutadorDeInput = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    };

    submitForm = () => {
        const validacao = this.validador.valida(this.state);
        if (validacao.isValid) {
            this.props.escutadorDeSubmit(this.state);
            this.setState(this.stateInicial);

        } else {
            const {nome, livro, preco} = validacao;
            const campos = [nome, livro, preco];

            const camposInvalidos = campos.filter(campo => {
                return campo.isInvalid;
            });

            const erros = camposInvalidos.reduce((texto, campo,) => {
                return texto + campo.message + '\n';
            }, '');

            this.setState({
                mensagem: {
                    open: true,
                    text: erros,
                    tipo: 'error'
                }
            });
        }
    };

    render() {

        const {nome, livro, preco} = this.state;

        return (
            <>
                <Toast
                    open={this.state.mensagem.open}
                    handleClose={
                        () => this.setState({mensagem: {...this.state.mensagem, open: false}})
                    }
                    severity={this.state.mensagem.tipo}>
                    {this.state.mensagem.text}
                </Toast>
                <form>

                    <Grid container
                          spacing={2}
                          alignItems={"center"}>
                        <Grid item>
                            <TextField id="nome"
                                       name="nome"
                                       label="Nome"
                                       variant={"outlined"}
                                       value={nome}
                                       onChange={this.escutadorDeInput}
                            />
                        </Grid>

                        <Grid item>
                            <TextField id="livro"
                                       name="livro"
                                       label="Livro"
                                       variant={"outlined"}
                                       value={livro}
                                       onChange={this.escutadorDeInput}
                            />
                        </Grid>


                        <Grid item>
                            <TextField id="preco"
                                       name="preco"
                                       label="Preco"
                                       variant={"outlined"}
                                       value={preco}
                                       onChange={this.escutadorDeInput}
                            />
                        </Grid>

                        <Grid item>
                            <Button
                                color={"primary"}
                                variant={"contained"}
                                onClick={this.submitForm}
                                type="button">Salvar
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </>
        );
    }
}

export default Formulario;
