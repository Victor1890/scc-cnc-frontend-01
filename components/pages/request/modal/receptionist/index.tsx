import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Typography,
    useTheme,
    Grid
} from '@mui/material';
import { EntityReceptionistModalPropsI } from './ModalReceptionist.interface';
import ReceptionistTable from './table';
import InputFile from '@components/app/input-file';
import { useState } from 'react';

const ModalReceptionist = <T extends object>({
    open,
    onClose,
    onSubmit,
    entityName,
}: EntityReceptionistModalPropsI<T>) => {

    const theme = useTheme()

    const [file, setFile] = useState<File | null>(null)

    const handleClose = () => {
        onClose()
    }

    const handleSubmit = () => {
        onSubmit()
    }

    return (
        <Dialog open={open} onClose={handleClose} maxWidth={'md'} fullWidth PaperProps={{ sx: { borderRadius: 4 } }}>
            <DialogTitle sx={{ color: theme.palette.primary.main, fontWeight: "700", fontSize: 24 }}>
                {entityName}
            </DialogTitle>
            <DialogContent>
                <Grid container>
                    <Grid item xs={12} justifyContent={'center'} alignItems={'center'}>
                        <Typography variant="h6" sx={{ color: theme.palette.primary.main }}>Datos del paciente</Typography>
                        <ReceptionistTable />
                        <Typography sx={{ paddingBottom: 2, paddingTop: 3 }} variant="h6">Datos del paciente</Typography>
                        <Grid container xs={12} spacing={2}>
                            <Grid item xs={6}>
                                <InputFile
                                    value={file}
                                    placeholder={"Documento de Identificación (PDF)"}
                                    onChange={(file) => {
                                        if (!file) return
                                        if (Array.isArray(file)) return
                                        setFile(file)
                                    }}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <InputFile
                                    value={null}
                                    placeholder={"Estudios complementarios (PDF)"}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions sx={{ paddingRight: "34px" }}>
                <Button onClick={handleClose} variant='outlined' sx={{ borderRadius: 50, width: "15%" }} size='large'>
                    Cancelar
                </Button>
                <Button onClick={handleSubmit} variant="contained" sx={{ borderRadius: 50, width: "20%", textTransform: "none" }}>
                    Guardar
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default ModalReceptionist
