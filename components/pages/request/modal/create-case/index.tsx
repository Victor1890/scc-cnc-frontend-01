import FormStepModal from "@components/app/modal/FromStepModal";
import { useTheme } from "@mui/material";
import { openCaseModal } from "@redux/slices/ui/modalCase";
import { dispatch, useAppSelector } from "@redux/store";
import { CreateCaseModalProps } from "./create-case.interface";
import {
    motiveRequest,
    requestField,
    requestInstitutionField,
    requestRepresentativeField,
    streetAddressRequest,
    documentRequest
} from "./fields";
import { openCaseModalPayload } from "./modal-pop";
import SelectPatientType from "@components/pages/auth/scheduler/select-role";
import { insertByCondition } from "@utils/array/array.util";
import { useMemo } from "react";
import CalendarSchedule from "@components/pages/auth/scheduler/calendar";

function CreateCaseModal({
    mode,
    open,
    setOpenModal
}: CreateCaseModalProps) {

    const theme = useTheme()
    const { payload } = useAppSelector(x => x.request)

    const { isInstitution, isPatient, isRepresentative } = useMemo(() => {
        if (!payload) return { isInstitution: false, isPatient: false, isRepresentative: false }
        return payload
    }, [payload])

    const handleModalClose = () => {
        setOpenModal(false)
    }

    const handleSubmit = () => {
        setOpenModal(false)
        dispatch(openCaseModal({
            ...openCaseModalPayload({
                theme,
                newCallback: () => {
                    setOpenModal(false);
                    setOpenModal(true)
                }
            })
        }))
    }

    return (
        <FormStepModal<any>
            maxWith="md"
            mode={mode}
            entity={{}}
            onCreate={handleSubmit}
            open={open}
            errors={null}
            onClose={handleModalClose}
            stepFields={[
                {
                    label: "Seleccionar",
                    fields: SelectPatientType()
                },
                {
                    label: "Motivos",
                    fields: motiveRequest
                },
                ...insertByCondition(isPatient, {
                    label: "Solicitud",
                    fields: requestField
                }),

                // Institution
                ...insertByCondition(isInstitution, {
                    label: "Solicitud de la Institución",
                    fields: requestInstitutionField
                }),
                ...insertByCondition(isInstitution, {
                    label: "Solicitud del Paciente",
                    fields: requestField
                }),
                //

                // Representative
                ...insertByCondition(isRepresentative, {
                    label: "Solicitud del Representante",
                    fields: requestRepresentativeField
                }),
                ...insertByCondition(isRepresentative, {
                    label: "Solicitud del Paciente",
                    fields: requestField
                }),
                //
                {
                    label: "Dirección",
                    fields: streetAddressRequest
                },
                {
                    label: "Documentos",
                    fields: documentRequest
                },
                {
                    label: "Cita",
                    fields: CalendarSchedule()
                }
            ]}
            entityName={"SVRD-FO-001"}
        />
    )
}

export default CreateCaseModal