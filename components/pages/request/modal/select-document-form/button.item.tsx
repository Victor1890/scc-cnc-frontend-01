import {
    Box,
    Button,
    Grid,
    Typography,
    useTheme
} from "@mui/material"
import ArticleIcon from '@mui/icons-material/Article';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface IButtonDocumentFormItem {
    title: string
    onClick: VoidFunction
    paddingBoxLeft?: string | number
}

const ButtonDocumentFormItem = ({ title = "default", paddingBoxLeft, onClick }: IButtonDocumentFormItem) => {

    const theme = useTheme()

    return (
        <Grid item width={"100%"} justifyContent={'flex-start'} paddingBottom={1}>
            <Button onClick={onClick} sx={{ width: "100%", backgroundColor: theme.palette.primary.light, display: "flex", justifyContent: 'space-evenly', alignItems: 'center' }}>
                <Box display={'flex'} alignItems={'center'} justifyContent={'space-evenly'}>
                    <ArticleIcon />
                    <Typography paddingLeft={1} textAlign={'center'} color={theme.palette.primary.main} variant="h5">{title}</Typography>
                </Box>
                <Box paddingLeft={paddingBoxLeft || "30%"} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                    <ArrowForwardIcon />
                </Box>
            </Button>
        </Grid>
    )
}

export default ButtonDocumentFormItem