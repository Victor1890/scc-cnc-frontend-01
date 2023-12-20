import SubCard from '@components/app/cards/SubCard'
import { UISwitch } from '@components/app/modal/FormModal/FormInput.style'
import { gridSpacing } from '@constants/theme'
import {
    Avatar,
    Chip,
    Grid,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    Typography,
    useTheme,
    Divider,
    TextField,
    FormControl,
    Stack,
    FormLabel,
    Button,
    Select,
    MenuItem
} from '@mui/material'
import GetAppIcon from '@mui/icons-material/GetApp';

const RequestProfile = () => {
    const theme = useTheme()

    const onDownload = () => {
        const link = document.createElement("a");
        link.download = `download.pdf`;
        link.href = "./download.pdf";
        link.click();
    };

    return (
        <Grid container spacing={gridSpacing}>
            <Grid item lg={4} xs={12}>
                <SubCard
                    title={
                        <Grid container spacing={2} justifyContent={'center'} alignItems={'center'}>
                            <Grid item >
                                <Avatar
                                    alt="User 1"
                                    src={'/assets/images/users/empty-profile.png'}
                                    sx={{ width: 56, height: 56 }}
                                />
                            </Grid>
                            <Grid item container sx={{ width: "75%" }}>
                                <Grid item>
                                    <Typography variant='h2'>John Wick</Typography>
                                </Grid>
                                <Grid item paddingTop={1}>
                                    <Typography variant='inherit'>john-wick@example.com</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    }
                >
                    <TableContainer>
                        <Table sx={{ '& td': { borderBottom: 'none' } }} size="small">
                            <TableBody>
                                <TableRow>
                                    <TableCell variant="head">Cédula</TableCell>
                                    <TableCell>001-0057793-3</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell variant="head">Teléfono</TableCell>
                                    <TableCell>+1 849-555-8888</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell variant="head">Celular</TableCell>
                                    <TableCell>+1 849-666-8888</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell variant="head">Edad</TableCell>
                                    <TableCell>37 años</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell variant="head">Sexo</TableCell>
                                    <TableCell>Masculino</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </SubCard>
            </Grid>
            <Grid item lg={8} xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12}>
                        <SubCard>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Typography variant="subtitle1">Código(s) según CIE-10</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="body2">UOO-U99 - Códigos para situaciones especiales</Typography>
                                </Grid>
                            </Grid>
                        </SubCard>
                    </Grid>
                    <Grid item xs={12}>
                        <SubCard>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Typography variant="subtitle1">
                                        Antecedentes familiares relevantes a la condición que presenta
                                    </Typography>
                                </Grid>
                                <Grid item container spacing={1} xs={12}>
                                    {['Congénito', 'Enfermedad común', 'Accidente de tránsito', 'Accidente laboral'].map((x) => (
                                        <Grid item key={`${x}`}>
                                            <Chip
                                                label={x}
                                                size="small"
                                                sx={{
                                                    background:
                                                        theme.palette.mode === 'dark'
                                                            ? theme.palette.dark.main
                                                            : theme.palette.success.light + 60,
                                                    color: theme.palette.success.dark
                                                }}
                                            />
                                        </Grid>
                                    ))}
                                </Grid>
                            </Grid>
                        </SubCard>
                    </Grid>

                    <Grid item xs={12}>
                        <SubCard>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Typography variant="subtitle1">Origen de la condición médica</Typography>
                                </Grid>
                                <Grid item spacing={1} xs={12}>
                                    <Typography variant="body2">
                                        Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum
                                        est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin
                                        lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet
                                        feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
                                        inceptos himenaeos.
                                    </Typography>
                                </Grid>
                            </Grid>
                        </SubCard>
                    </Grid>

                    <Grid item xs={12}>
                        <SubCard>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Typography variant="subtitle1">Terapéutica</Typography>
                                </Grid>
                                <Grid item container spacing={1} xs={12}>
                                    <Grid item>
                                        <Typography variant="body2">
                                            Indicar medicamentos y uso, cirugías si las hubiese, fisioterapia incluyendo modalidad y tiempo, psicoterapia
                                        </Typography>
                                    </Grid>
                                    <Grid item container spacing={1} xs={12}>
                                        {['Congénito', 'Enfermedad común', 'Accidente de tránsito', 'Accidente laboral'].map((x) => (
                                            <Grid item key={`${x}`}>
                                                <Chip
                                                    label={x}
                                                    size="small"
                                                    sx={{
                                                        background:
                                                            theme.palette.mode === 'dark'
                                                                ? theme.palette.dark.main
                                                                : theme.palette.success.light + 60,
                                                        color: theme.palette.success.dark
                                                    }}
                                                />
                                            </Grid>
                                        ))}
                                    </Grid>
                                </Grid>
                            </Grid>
                        </SubCard>
                    </Grid>

                    <Grid item xs={12}>
                        <SubCard>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Typography variant="subtitle1">Puntuaciones obtenidas en el WHODAS</Typography>
                                </Grid>
                                <Grid item container spacing={1} xs={12}>
                                    <TableContainer>
                                        <Table sx={{ '& td': { borderBottom: 'none' } }} size="small">
                                            <TableBody>
                                                <TableRow>
                                                    <TableCell variant="head">Cognición</TableCell>
                                                    <TableCell>20</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell variant="head">Movilidad</TableCell>
                                                    <TableCell>18</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell variant="head">AVD</TableCell>
                                                    <TableCell>12</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell variant="head">Participación</TableCell>
                                                    <TableCell>20</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell variant="head">Cuidado Personal</TableCell>
                                                    <TableCell>4</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell variant="head">Relaciones</TableCell>
                                                    <TableCell>16</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell variant="head">
                                                        <Divider sx={{ width: "100%" }} />
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell variant="head">Puntuación total del WHODAS</TableCell>
                                                    <TableCell>
                                                        <Typography variant="subtitle1">90</Typography>
                                                    </TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </Grid>

                            </Grid>
                        </SubCard>
                    </Grid>

                    <Grid item xs={12}>
                        <SubCard>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Typography variant="subtitle1">Análisis del Caso</Typography>
                                </Grid>
                                <Grid item container spacing={1} xs={12}>
                                    <Grid item container xs={12}>
                                        <Grid item xs={12} paddingTop={1} paddingBottom={1}>
                                            <Stack direction="row" alignItems="center">
                                                <Typography variant="h5" width={"100%"}>¿Existe coherencia entre los instrumentos y la información recogida?</Typography>
                                                <UISwitch />
                                            </Stack>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <FormControl fullWidth>
                                                <FormLabel sx={{ color: "#000" }} htmlFor={`field-anality-input`}>
                                                    En caso de no existir o presentar coherencia alterada y en vista de su análisis ¿Cual posible hipótesis puede explicar la misma?
                                                </FormLabel>
                                                <TextField
                                                    id='field-anality-input'
                                                    type='textarea'
                                                    placeholder='En caso de no existir o presentar coherencia alterada y en vista de su análisis ¿Cual posible hipótesis puede explicar la misma?'
                                                    multiline
                                                    inputProps={{
                                                        style: {
                                                            height: "50px",
                                                        },
                                                    }}
                                                />
                                            </FormControl>
                                        </Grid>

                                        <Grid item xs={12} paddingTop={2}>
                                            <FormControl fullWidth>
                                                <FormLabel sx={{ color: "#000" }} htmlFor={`field-anality-input-1`}>
                                                    Justifique su análisis:
                                                </FormLabel>
                                                <TextField
                                                    id='field-anality-input-1'
                                                    type='textarea'
                                                    placeholder='Justifique su análisis'
                                                    multiline
                                                    inputProps={{
                                                        style: {
                                                            height: "50px",
                                                        },
                                                    }}
                                                />
                                            </FormControl>
                                        </Grid>


                                        <Grid item xs={12} paddingTop={2}>
                                            <FormControl fullWidth>
                                                <FormLabel sx={{ color: "#000" }} htmlFor={`field-anality-input-2`}>
                                                    Observaciones:
                                                </FormLabel>
                                                <TextField
                                                    id='field-anality-input-2'
                                                    type='textarea'
                                                    placeholder='Observaciones'
                                                    multiline
                                                    inputProps={{
                                                        style: {
                                                            height: "50px",
                                                        },
                                                    }}
                                                />
                                            </FormControl>
                                        </Grid>


                                    </Grid>
                                </Grid>
                            </Grid>
                        </SubCard>
                    </Grid>


                    <Grid item xs={12}>
                        <SubCard>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Typography variant="subtitle1">Valoración de Discapacidad</Typography>
                                </Grid>
                                <Grid item container spacing={1} xs={12}>

                                    <Grid item container xs={12}>
                                        <Grid item xs={12} paddingTop={1} paddingBottom={1}>
                                            <Stack direction="row" alignItems="center">
                                                <Typography variant="h5" width={"100%"}>¿Tiene discapacidad?</Typography>
                                                <UISwitch />
                                            </Stack>
                                        </Grid>
                                    </Grid>

                                    <Grid item container xs={12}>
                                        <Grid item xs={12}>
                                            <Typography variant="subtitle1">Origen de la discapacidad</Typography>
                                        </Grid>
                                        <Grid container item xs={6} spacing={2} paddingTop={1} paddingBottom={1}>
                                            {[
                                                "Físico motora",
                                                "Visual",
                                                "Auditiva",
                                                "Cognitiva",
                                                "Psico-social",
                                                "Orgánica",
                                            ].map(x => (
                                                <Grid item key={`${x}`}>
                                                    <Stack direction="row" alignItems="center">
                                                        <Typography variant="h5" fontWeight={'100'} width={"100%"}>{x}</Typography>
                                                        <UISwitch />
                                                    </Stack>
                                                </Grid>
                                            ))}
                                        </Grid>
                                    </Grid>

                                </Grid>
                            </Grid>
                        </SubCard>
                    </Grid>

                    <Grid item xs={12}>
                        <SubCard>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Typography variant="subtitle1">Puntuación final propuesta es 100</Typography>
                                </Grid>
                            </Grid>
                        </SubCard>
                    </Grid>

                    {/* <Grid item xs={12}>
                        <SubCard>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Typography variant="subtitle1">Tiempo para reevaluación propuesto: 5D 10H 50M 50S</Typography>
                                </Grid>
                            </Grid>
                        </SubCard>
                    </Grid> */}

                    <Grid item xs={12}>
                        <SubCard>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Typography variant="subtitle1">Certificado y Carta</Typography>
                                    <Grid item container spacing={2} paddingTop={1}>
                                        <Grid item>
                                            <Button
                                                variant='contained'
                                                startIcon={<GetAppIcon />}
                                                onClick={onDownload}
                                            >
                                                Generar Certificado
                                            </Button>
                                        </Grid>
                                        <Grid item>
                                            <Button
                                                variant='contained'
                                                color='error'
                                                startIcon={<GetAppIcon />}
                                                onClick={onDownload}
                                            >
                                                Generar Carta de negación
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </SubCard>
                    </Grid>

                    <Grid item xs={12}>
                        <SubCard>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Typography variant="subtitle1">Reevaluar solicitud</Typography>
                                </Grid>
                                <Grid item container spacing={1} xs={12}>
                                    <Grid item container spacing={1} xs={12}>

                                        <Grid item xs={12} paddingTop={2}>
                                            <FormControl fullWidth>
                                                <FormLabel
                                                    htmlFor={`field-select`}
                                                    sx={{ color: '#000' }}
                                                >
                                                    <Typography textAlign={'left'} variant="body1" width={'100%'}>
                                                        Motivo de la solicitud de reconsideración
                                                    </Typography>
                                                </FormLabel>
                                                <Select
                                                    name={String(name)}
                                                    id={`field-select`}
                                                    placeholder={"Motivo de la solicitud de reconsideración"}
                                                >
                                                    {
                                                        [
                                                            "Disconformidad con la notificación de denegación",
                                                            "Disconformidad con el contenido del certificado - Origen de la discapacidad",
                                                            "Disconformidad con el contenido del certificado - Existencia de la discapacidad",

                                                        ].map((label, index) => (
                                                            <MenuItem key={index} value={label}>
                                                                {label}
                                                            </MenuItem>
                                                        ))
                                                    }
                                                </Select>
                                            </FormControl>
                                        </Grid>

                                        <Grid item xs={12}>
                                            <FormControl fullWidth>
                                                <FormLabel sx={{ color: "#000" }} htmlFor={`field-janality-input`}>
                                                    <Typography textAlign={'left'} variant="body1" width={'100%'}>
                                                        Justificar el motivo de la reevaluación:
                                                    </Typography>
                                                </FormLabel>
                                                <TextField
                                                    id='field-janality-input'
                                                    type='textarea'
                                                    placeholder='Justificar el motivo'
                                                    multiline
                                                    inputProps={{
                                                        style: {
                                                            height: "50px",
                                                        },
                                                    }}
                                                />
                                            </FormControl>
                                        </Grid>

                                        <Grid item container spacing={2} paddingTop={1} display={'flex'} justifyContent={'flex-end'}>
                                            <Grid item>
                                                <Button variant='contained'>
                                                    Reevaluar
                                                </Button>
                                            </Grid>
                                        </Grid>

                                    </Grid>
                                </Grid>
                            </Grid>
                        </SubCard>
                    </Grid>

                </Grid>
            </Grid>
        </Grid>
    )
}

export default RequestProfile
