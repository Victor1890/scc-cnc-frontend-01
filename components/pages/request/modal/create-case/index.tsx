import FormStepModal from "@components/app/modal/FromStepModal";
import { useTheme } from "@mui/material";
import { openCaseModal } from "@redux/slices/ui/modalCase";
import { dispatch } from "@redux/store";
import { CreateCaseModalProps } from "./create-case.interface";
import { motiveRequest, requestField, streetAddressRequest, documentRequest } from "./fields";
import { openCaseModalPayload } from "./modal-pop";

function CreateCaseModal({
    mode,
    open,
    setOpenModal
}: CreateCaseModalProps) {

    const theme = useTheme()

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
                    label: "Motivos",
                    fields: motiveRequest
                },
                {
                    label: "Solicitud",
                    fields: requestField
                },
                {
                    label: "Dirección",
                    fields: streetAddressRequest
                },
                {
                    label: "Documentos",
                    fields: documentRequest
                },
            ]}
            entityName={"SVRD-FO-001"}
        />
    )
}

export default CreateCaseModal