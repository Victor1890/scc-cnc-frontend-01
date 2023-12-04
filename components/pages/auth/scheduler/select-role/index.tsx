import {
    Button,
    Grid,
    Typography,
} from "@mui/material";
import { updateRequest } from "@redux/slices/request";
import { useAppDispatch } from "@redux/store";
import Image from "next/image";
import { useEffect, useState } from "react";

const SelectPatientType = () => {

    const dispatch = useAppDispatch()

    const [active, setActive] = useState({
        isRepresentative: false,
        isInstitution: false,
        isPatient: false
    })

    const handleClickActive = (name: string, value: boolean) => {

        const payload = {
            isInstitution: false,
            isPatient: false,
            isRepresentative: false,
            [name]: value
        }

        setActive(payload)
    }

    useEffect(() => {

        const { isInstitution, isPatient, isRepresentative } = active
        if (!isInstitution && !isPatient && !isRepresentative) return

        dispatch(updateRequest({ payload: { ...active } }))

    }, [active])

    return (
        <Grid item xs={12}>
            <Grid container spacing={2} padding={1}>
                <Grid item xs={12}>
                    <Grid container>
                        <Grid container spacing={1} justifyContent={'space-around'} alignItems={'center'}>
                            <Grid item>
                                <Button
                                    type="button"
                                    onClick={() => handleClickActive("isRepresentative", !active.isRepresentative)}
                                    variant={active.isRepresentative ? 'contained' : 'text'}
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        flexDirection: 'column',
                                        padding: 2
                                    }}
                                >
                                    <Image loading="lazy" width={100} height={100} src="/assets/images/modal/add-form.svg" alt="Formulario" />
                                    <Typography textAlign={'center'} variant="h2" color={active.isRepresentative ? '#fff' : "#000"}>Representante</Typography>
                                    <Typography textAlign={'center'} variant="h2" color={active.isRepresentative ? '#fff' : "#000"}>Tutor Legal</Typography>
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button
                                    type="button"
                                    onClick={() => handleClickActive("isInstitution", !active.isInstitution)}
                                    variant={active.isInstitution ? 'contained' : 'text'}
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        flexDirection: 'column',
                                        padding: 2
                                    }}
                                >
                                    <Image loading="lazy" width={100} height={100} src="/assets/images/modal/add-form.svg" alt="Formulario" />
                                    <Typography textAlign={'center'} variant="h2" color={active.isInstitution ? '#fff' : "#000"}>Institución</Typography>
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button
                                    type="button"
                                    onClick={() => handleClickActive("isPatient", !active.isPatient)}
                                    variant={active.isPatient ? 'contained' : 'text'}
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        flexDirection: 'column',
                                        padding: 2
                                    }}
                                >
                                    <Image loading="lazy" width={100} height={100} src="/assets/images/modal/add-form.svg" alt="Formulario" />
                                    <Typography textAlign={'center'} variant="h2" color={active.isPatient ? '#fff' : "#000"}>Persona</Typography>
                                    <Typography textAlign={'center'} variant="h2" color={active.isPatient ? '#fff' : "#000"}>con discapacidad</Typography>
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default SelectPatientType