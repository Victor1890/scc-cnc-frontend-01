import { FieldConfig } from "@components/app/modal/FormModal/FormModal.interface";
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

export const documentRequest: FieldConfig<any>[] = [
    {
        label: "Documento de identificación (Cédula / Pasaporte / Acta de nacimiento)",
        name: "document-file",
        type: "file",
        startAdornment: <PictureAsPdfIcon color="error" />,
        placeholder: "Insertar documento (PDF)",
        responsive: {
            xs: 12
        }
    },
    {
        label: "Ficha de Evaluación Biomédica",
        name: "biomedical-file",
        type: "file",
        startAdornment: <PictureAsPdfIcon color="error" />,
        placeholder: "Insertar documento (PDF)",
        responsive: {
            xs: 6
        }
    },
    {
        label: "Estudios complementarios",
        name: "studios-file",
        type: "file",
        startAdornment: <PictureAsPdfIcon color="error" />,
        placeholder: "Insertar documento (PDF)",
        responsive: {
            xs: 6
        }
    },
]