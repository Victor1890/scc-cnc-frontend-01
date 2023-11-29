import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Grid,
    Typography
} from '@mui/material'
import { updateBiomedical } from "@redux/slices/biomedical"
import { updateContextual } from "@redux/slices/whodas/contextual"
import { updateWhodaForm } from "@redux/slices/whodas/form"
import { dispatch } from '@redux/store'
import { EntitySelectDocumentFormModalPropsI } from './SelectDocumentForm.interface'
import ButtonDocumentFormItem from './button.item'

const SelectDocumentForm = ({ onClose, onBack, open }: EntitySelectDocumentFormModalPropsI) => {

    const handleClose = () => {
        onClose()
    }

    const handleClickBiomedical = () => {
        onClose()
        dispatch(updateBiomedical({
            modal: {
                mode: 'create',
                open: true
            }
        }))

    }
    const handleClickContextual = () => {
        onClose()
        dispatch(updateContextual({
            modal: {
                mode: 'create',
                open: true
            }
        }))

    }

    const handleClickWhodas = (title: string) => {
        onClose()
        dispatch(updateWhodaForm({
            modal: {
                mode: 'create',
                open: true,
                title
            }
        }))

    }

    return (
        <Dialog open={open} onClose={handleClose} maxWidth={'xs'} fullWidth PaperProps={{ sx: { borderRadius: 4 } }}>
            <DialogTitle sx={{ fontSize: 16 }}>
                <Box display={'flex'} flexDirection={'row'} alignItems={'center'}>
                    <Typography variant="subtitle1">Formularios</Typography>
                    <Typography paddingLeft={1} variant="subtitle2">
                        Selecciona uno formulario para continuar
                    </Typography>
                </Box>
            </DialogTitle>
            <DialogContent>
                <Grid
                    container
                    borderRadius={1}
                    justifyContent={'center'}
                    alignItems={'center'}
                >
                </Grid>
                <Grid container paddingTop={1} width={'100%'}>
                    <ButtonDocumentFormItem title="Ficha de información biomadica" onClick={handleClickBiomedical} />
                    <ButtonDocumentFormItem title="Contextual" onClick={handleClickContextual} paddingBoxLeft={'65%'} />
                    <ButtonDocumentFormItem title="Whoda Bebé" onClick={() => handleClickWhodas("Whoda Bebé")} paddingBoxLeft={'62%'} />
                    <ButtonDocumentFormItem title="Whoda Niños y Jóvenes" onClick={() => handleClickWhodas("Whoda Niños y Jóvenes")} paddingBoxLeft={'42%'} />
                    <ButtonDocumentFormItem title="Whoda Adultos" onClick={() => handleClickWhodas("Whoda Adultos")} paddingBoxLeft={'57%'} />
                </Grid>
            </DialogContent>
            <DialogActions sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Button onClick={onBack} variant="contained" sx={{ borderRadius: 50, width: '30%' }}>
                    Volver
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default SelectDocumentForm
