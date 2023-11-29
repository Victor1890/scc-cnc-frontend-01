import {
    TableContainer,
    TableRow,
    TableBody,
    TableCell,
    Table,
    Paper,
    Typography
} from '@mui/material'

const ReceptionistTable = () => {

    return (
        <TableContainer component={Paper} sx={{ border: "1.8px solid #dedede", borderRadius: 4 }}>
            <Table>
                <TableBody>
                    <TableRow hover>
                        <TableCell>
                            <Typography>Caso #:</Typography>
                        </TableCell>
                        <TableCell>
                            <Typography>0131616516</Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow hover>
                        <TableCell>
                            <Typography>Cédula: </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography>001-0057793-3</Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow hover>
                        <TableCell>
                            <Typography>Edad:</Typography>
                        </TableCell>
                        <TableCell>
                            <Typography>37 años</Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow hover>
                        <TableCell>
                            <Typography>Sexo:</Typography>
                        </TableCell>
                        <TableCell>
                            <Typography>Masculino</Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow hover>
                        <TableCell>
                            <Typography>Fecha de nacimiento:</Typography>
                        </TableCell>
                        <TableCell>
                            <Typography>11/11/1999</Typography>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default ReceptionistTable