import ThankYou from '@components/pages/auth/scheduler/thank-you';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    useTheme
} from '@mui/material';
import { closeCaseModal } from '@redux/slices/ui/modalCase';
import { dispatch, useAppSelector } from '@redux/store';

const CaseModal = () => {
    const {
        message,
        open,
        maxWith,
        buttons,
        logo
    } = useAppSelector(x => x.modalCase)

    const theme = useTheme()

    const handleSubmit = () => {
        dispatch(closeCaseModal())
        buttons.new?.callback && buttons.new?.callback()
    }

    const handleClose = () => {
        dispatch(closeCaseModal())
        buttons.cancel?.callback && buttons.cancel?.callback()
    }

    return (
        <Dialog open={open} maxWidth={maxWith} PaperProps={{ sx: { borderRadius: 4, width: "50%" } }}>
            <DialogContent>
                <ThankYou />
            </DialogContent>
            <DialogActions sx={{ justifyContent: "center" }}>
                <Button onClick={handleClose} variant='outlined' sx={{ borderRadius: 50, minWidth: "150px" }} size='large'>
                    {buttons?.cancel?.title || "Cerrar"}
                </Button>
                <Button onClick={handleSubmit} variant="contained" sx={{ borderRadius: 50, minWidth: "25%", textTransform: "none" }} autoCapitalize=''>
                    {buttons?.new?.title || "Nuevo"}
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default CaseModal
