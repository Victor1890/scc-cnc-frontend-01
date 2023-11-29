import { IColumnRequestTableProps } from "./table.interface";
import { ItemChildrenColumnsTableI } from "@components/app/table/table.interface";
import {
    Box,
    Chip,
    IconButton,
    Stack,
    Tooltip,
    useTheme
} from '@mui/material';
import AssessmentIcon from '@mui/icons-material/Assessment';
import EyeIcon from '@mui/icons-material/RemoveRedEye'
import { insertByCondition } from "@utils/array/array.util";

function ColumnRequestTable({ children, onEdit, onReport }: IColumnRequestTableProps) {

    const theme = useTheme();

    const columns: ItemChildrenColumnsTableI<any>[] = [
        {
            title: "Nombre completo",
            css: { paddingLeft: "2rem" },
            render: () => (
                <span>Random LastName</span>
            )
        },
        {
            title: "Estados",
            render: () => (
                <Chip
                    label={"Created"}
                    size="small"
                    sx={{
                        background: theme.palette.mode === 'dark' ? theme.palette.dark.main : theme.palette.success.light + 60,
                        color: theme.palette.success.dark
                    }}
                />
            )
        },
        {
            title: "Número de turno",
            render: () => (
                <span>T-1</span>
            )
        },
        {
            title: "Fecha",
            render: () => (
                <span>{new Date().toLocaleString()}</span>
            )
        },
        {
            title: "Número de caso",
            render: () => (
                <span>123456</span>
            )
        },
        ...insertByCondition(typeof onEdit === 'function' || typeof onReport === 'function', {
            title: "Acciones",
            position: "center",
            render: ({ data }: any) => (
                <Box sx={{ pr: 3 }}>
                    <Stack direction="row" justifyContent="center" alignItems="center">
                        <Tooltip placement="top" title={"Ver"}>
                            <IconButton
                                color="primary"
                                aria-label={"Ver" || 'View'}
                                size="large"
                                onClick={() => onEdit?.('view', data)}
                            >
                                <EyeIcon sx={{ fontSize: '1.1rem' }} />
                            </IconButton>
                        </Tooltip>
                        <Tooltip placement="top" title={"Reporte"}>
                            <IconButton
                                color="primary"
                                aria-label={"Reporte" || 'Report'}
                                size="large"
                                onClick={() => onReport?.('view', data)}
                            >
                                <AssessmentIcon sx={{ fontSize: '1.1rem' }} />
                            </IconButton>
                        </Tooltip>
                    </Stack>
                </Box>
            )
        })
    ]

    return children(columns)
}

export default ColumnRequestTable;
