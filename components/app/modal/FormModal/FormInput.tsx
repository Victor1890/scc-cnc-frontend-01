import InputFile from '@components/app/input-file'
import CloseIcon from '@mui/icons-material/Close'
import {
    Divider,
    FormControl,
    FormHelperText,
    FormLabel,
    Grid,
    InputAdornment,
    MenuItem,
    Select,
    SelectChangeEvent,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    TextField,
    Radio,
    RadioGroup,
    Typography,
    useTheme,
    TableHead,
    Paper
} from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers'
import Autocomplete from '@mui/material/Autocomplete'
import dayjs, { Dayjs } from 'dayjs'
import { MuiTelInput } from 'mui-tel-input'
import { ChangeEvent } from 'react'
import { UISwitch } from './FormInput.style'
import { FormInputPropsI, OptionIFieldConfigI, RightPositionI } from './FormModal.interface'

const FormInput = <T extends object>({
    errors,
    fields,
    rightPosition,
    form,
    isEditMode,
    setForm
}: FormInputPropsI<T> & { rightPosition?: RightPositionI }) => {
    const theme = useTheme()

    const handleInputChange = (
        event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement> | SelectChangeEvent
    ) => {
        const { name, value } = event.target
        const updatedForm = { ...form, [name]: value }
        setForm(updatedForm)
    }

    const handleTelChange = (name: string, value: string) => {
        const updatedForm = { ...form, [name]: value }
        setForm(updatedForm)
    }

    const handleDateChange = (name: string, value: Dayjs | null) => {
        const updatedForm = { ...form, [name]: value?.format('YYYY-MM-DDTHH:mm:ss').toString() }
        setForm(updatedForm)
    }

    const handleMultiSelectChange = (name: string, value: string[]) => {
        const updatedForm = { ...form, [name]: value }
        setForm(updatedForm)
    }

    const handleSwitchChange = (name: string, value: boolean) => {
        const updatedForm = { ...form, [name]: value }
        setForm(updatedForm)
    }

    const handleFileChange = (name: string, value: File | null) => {
        const updatedForm = { ...form, [name]: value }
        setForm(updatedForm)
    }

    return (
        <Grid item xs={12 - (rightPosition?.col || 0)}>
            <Grid container spacing={2} padding={1}>
                {fields.map((field, index) => {
                    const name = field.name as keyof T
                    const valueFile = field.value instanceof File ? (field.value as File) : null
                    const valueOptions =
                        field.value instanceof OptionIFieldConfigI ? (field.value as OptionIFieldConfigI[]) : null
                    const value = typeof field.value === 'string' ? (field.value as string) : null
                    const valueBoolean = typeof field.value === 'boolean' ? (field.value as boolean) : false

                    return (
                        <Grid item {...(field.responsive ? field.responsive : {})} key={`field-${index}`}>
                            {field.type === 'divider' && (
                                <Divider>
                                    {field.label && (
                                        <Typography variant="subtitle1" color="textSecondary">
                                            {field.label}
                                        </Typography>
                                    )}
                                </Divider>
                            )}
                            {field.type === 'text' || field.type === 'textarea' || field.type === 'email' || field.type === 'number' ? (
                                <FormControl fullWidth>
                                    <FormLabel htmlFor={`field-${field.type}-${String(name)}`} sx={{ color: '#000' }}>
                                        {field.label}
                                    </FormLabel>
                                    <TextField
                                        name={String(name)}
                                        id={`field-${field.type}-${String(name)}`}
                                        placeholder={field.placeholder}
                                        type={field.type}
                                        fullWidth
                                        multiline={field.type === 'textarea'}
                                        error={errors && errors[name] ? true : false}
                                        helperText={errors && errors[name] ? errors[name] : ''}
                                        value={value || form[name] || ''}
                                        disabled={field.disabled ? field.disabled : !isEditMode}
                                        inputProps={
                                            field.type === 'textarea'
                                                ? {
                                                    style: {
                                                        height: '50px'
                                                    }
                                                }
                                                : {}
                                        }
                                        onChange={(e) => {
                                            const { value } = e.target
                                            const _value = value || value || form[name] || ''
                                            typeof field.handleChange == 'function' && field.handleChange(_value)
                                            handleInputChange(e)
                                        }}
                                        {...(field.startAdornment && {
                                            InputProps: {
                                                startAdornment: (
                                                    <InputAdornment position="start">{field.startAdornment}</InputAdornment>
                                                )
                                            }
                                        })}
                                    />
                                </FormControl>
                            ) : null}
                            {field.type === 'tel' && (
                                <FormControl fullWidth>
                                    <FormLabel sx={{ color: '#000' }} htmlFor={`field-${field.type}-${String(name)}`}>
                                        {field.label}
                                    </FormLabel>
                                    <MuiTelInput
                                        defaultCountry="DO"
                                        name={String(name)}
                                        id={`field-${field.type}-${String(name)}`}
                                        placeholder={field.placeholder}
                                        fullWidth
                                        error={errors && errors[name] ? true : false}
                                        helperText={errors && errors[name] ? errors[name] : ''}
                                        value={value || form[name] || ''}
                                        disabled={field.disabled ? field.disabled : !isEditMode}
                                        onChange={(value) => {
                                            const _value = value || value || form[name] || ''
                                            typeof field.handleChange == 'function' && field.handleChange(_value)
                                            handleTelChange(String(name), _value)
                                        }}
                                        {...(field.startAdornment && {
                                            InputProps: {
                                                startAdornment: (
                                                    <InputAdornment position="start">{field.startAdornment}</InputAdornment>
                                                )
                                            }
                                        })}
                                    />
                                </FormControl>
                            )}
                            {field.type === 'file' && (
                                <FormControl fullWidth>
                                    <FormLabel sx={{ color: '#000' }} htmlFor={`field-${field.type}-${String(name)}`}>
                                        {field.label}
                                    </FormLabel>
                                    <InputFile
                                        name={String(name)}
                                        id={`field-${field.type}-${String(name)}`}
                                        placeholder={field.placeholder || 'Insert a file'}
                                        fullWidth
                                        required
                                        error={errors && errors[name] ? true : false}
                                        helperText={errors && errors[name] ? errors[name] : ''}
                                        value={valueFile || form[name] || null}
                                        disabled={field.disabled ? field.disabled : !isEditMode}
                                        onChange={(value) => {
                                            const _value = value || valueFile || form[name]
                                            typeof field.handleChange == 'function' && field.handleChange(_value)
                                            handleFileChange(String(name), _value)
                                        }}
                                        inputProps={{
                                            accept: '.jpg, .jpeg, .png, .pdf',
                                            color: 'black'
                                        }}
                                        clearIconButtonProps={{
                                            title: 'Remover',
                                            children: <CloseIcon fontSize="small" />,
                                            onClick: () => {
                                                typeof field.handleChange == 'function' && field.handleChange(null)
                                                handleFileChange(String(name), null)
                                            }
                                        }}
                                        {...(field.startAdornment && {
                                            InputProps: {
                                                startAdornment: (
                                                    <InputAdornment position="start">{field.startAdornment}</InputAdornment>
                                                )
                                            }
                                        })}
                                    />
                                </FormControl>
                            )}
                            {field.type === 'date' && (
                                <FormControl fullWidth>
                                    <FormLabel htmlFor={`field-${field.type}-${String(name)}`} sx={{ color: '#000' }}>
                                        {field.label}
                                    </FormLabel>
                                    <DatePicker
                                        value={dayjs(form[name])}
                                        disabled={field.disabled ? field.disabled : !isEditMode}
                                        slotProps={{
                                            textField: {
                                                name: String(name),
                                                fullWidth: true,
                                                id: `field-${field.type}-${String(name)}`
                                            }
                                        }}
                                        onChange={(date) => {
                                            const _value = date || value || form[name] || ''
                                            typeof field.handleChange == 'function' && field.handleChange(_value)
                                            handleDateChange(String(name), date)
                                        }}
                                    />
                                </FormControl>
                            )}
                            {field.type === 'select' && (
                                <FormControl fullWidth>
                                    <FormLabel htmlFor={`field-${field.type}-${String(name)}`} sx={{ color: '#000' }}>
                                        {field.label}
                                    </FormLabel>
                                    <Select
                                        name={String(name)}
                                        id={`field-${field.type}-${String(name)}`}
                                        value={field?.value || form[name] || ''}
                                        placeholder={field.placeholder}
                                        disabled={field.disabled ? field.disabled : !isEditMode}
                                        error={errors && errors[name] ? true : false}
                                        onChange={(e) => {
                                            const { value } = e.target
                                            const _value = value || value || form[name] || ''
                                            typeof field.handleChange == 'function' && field.handleChange(_value)
                                            handleInputChange(e)
                                        }}
                                    >
                                        {(field.options || []).map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                    {errors && errors[name] && <FormHelperText error>{errors[name]}</FormHelperText>}
                                </FormControl>
                            )}
                            {field.type === 'multi-select' && (
                                <FormControl fullWidth>
                                    <FormLabel htmlFor={`field-${field.type}-${String(name)}`}>{field.label}</FormLabel>
                                    <Autocomplete
                                        id={`field-${field.type}-${String(name)}`}
                                        multiple
                                        options={field.options || []}
                                        getOptionLabel={(option) => option.label}
                                        value={valueOptions || form[name]}
                                        disableCloseOnSelect
                                        disabled={field.disabled ? field.disabled : !isEditMode}
                                        onChange={(_, values) => {
                                            const data = values.map((x) => x.value)
                                            typeof field.handleChange == 'function' && field.handleChange(data)
                                            handleMultiSelectChange(String(name), data)
                                        }}
                                        renderInput={(params) => (
                                            <TextField {...params} variant="outlined" placeholder={field.placeholder} />
                                        )}
                                    />
                                    {errors && errors[name] && <FormHelperText error>{errors[name]}</FormHelperText>}
                                </FormControl>
                            )}
                            {field.type === 'switch' && (
                                <Stack direction="row" alignItems="center">
                                    <Typography variant="h5" width={'100%'}>
                                        {field.placeholder || field.label}
                                    </Typography>
                                    <UISwitch
                                        name={String(name)}
                                        checked={valueBoolean || form[name]}
                                        disabled={field.disabled ? field.disabled : !isEditMode}
                                        onChange={(e) => {
                                            const checked = e.target.checked
                                            const _value = checked || field.value || form[name] || false

                                            typeof field.handleChange == 'function' && field.handleChange(_value)

                                            handleSwitchChange(String(name), checked)
                                        }}
                                    />
                                </Stack>
                            )}
                            {field.type === 'list' && (
                                <FormControl fullWidth>
                                    <Grid key={`field-list-${index}`} container spacing={1} padding={1} alignItems="center">
                                        <TableContainer component={Paper}>
                                            <Table>
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell sx={{ width: 'calc(100% - 24px)' }}>
                                                            <Typography
                                                                fontSize={14}
                                                                fontWeight={'700'}
                                                                variant="h3"
                                                                color={theme.palette.primary.main}
                                                            >
                                                                {field.label}
                                                            </Typography>
                                                        </TableCell>
                                                        {(field.headers || []).map((header, index) => (
                                                            <TableCell align="left" key={`list-option-${index}`}>
                                                                {header}
                                                            </TableCell>
                                                        ))}
                                                    </TableRow>
                                                </TableHead>
                                                {(field.listOptions || []).map((option) => (
                                                    <TableBody key={`field-table-row-${index}`} component={RadioGroup}>
                                                        <TableRow hover key={`field-table-row-${index}`}>
                                                            <TableCell align="left">
                                                                <Typography variant="h5">{option.title}</Typography>
                                                            </TableCell>
                                                            {option.values.map(({ label, value }, index) => (
                                                                <TableCell width={'20%'} key={`field-table-row-${index}`}>
                                                                    <Radio
                                                                        aria-label={label}
                                                                        value={value}
                                                                        disabled={!isEditMode}
                                                                    />
                                                                </TableCell>
                                                            ))}
                                                        </TableRow>
                                                    </TableBody>
                                                ))}
                                            </Table>
                                        </TableContainer>
                                    </Grid>
                                </FormControl>
                            )}
                            {field.type === 'paragraph' && (
                                <FormControl fullWidth>
                                    {(field.paragraphs || []).map((paragraph, index) => (
                                        <Typography fontSize={16} paragraph key={`${paragraph}-${index}`} variant="h5">
                                            {paragraph}
                                        </Typography>
                                    ))}
                                </FormControl>
                            )}
                        </Grid>
                    )
                })}
            </Grid>
        </Grid>
    )
}

export default FormInput
