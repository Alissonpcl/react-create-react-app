import React from "react";

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from "@material-ui/core/Button";

const CellDeleta = ({removeDados, id}) => {
    if(!removeDados) {
        return null;
    }
    return (
        <TableCell>
            <Button
                variant="contained"
                color="secondary"
                onClick={ () => { removeDados(id) }}>
                Remover
            </Button>
        </TableCell>
    );
};

const TitleDeleta = ({removeDados}) => {
    if(!removeDados) {
        return null;
    }
    return <TableCell>Excluir</TableCell>;
};

export default function Tabela (props) {
    const { campos, dados, removeDados } = props;
    return (
        <Table>
            <TableHead>
                <TableRow>
                    {
                        campos.map(campo => (
                            <TableCell key={campo.titulo}>{campo.titulo}</TableCell>
                        ))
                    }
                    <TitleDeleta removeDados={removeDados}/>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    dados.map(dado => (
                        <TableRow key={dado.id }>
                            {
                                campos.map((campo, index) => (
                                    <TableCell key={`cell_${index}_${dado.id}`}>{dado[campo.dado]}</TableCell>
                                ))
                            }
                            <CellDeleta id={dado.id} removeDados={removeDados}/>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    );
}
