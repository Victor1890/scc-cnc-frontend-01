import { FieldConfig } from "@components/app/modal/FormModal/FormModal.interface";

export const maternalHistory: FieldConfig<any>[] = [
    ...([
        "Rubeola",
        "Zika",
        "Chikungunya",
        "Toxoplasmosis",
        "Inf. de Vías Urinarias",
        "Tuberculosis",
        "Diabetes",
        "Eclampsia/Preeclampsia",
        "Alcohol",
        "Cigarro",
        "Drogas",
        "Medicación",
    ].map(label => ({
        label,
        name: label,
        type: "switch",
        responsive: {
            xs: 6
        },
    }))) as any,
    {
        label: "",
        name: "",
        type: "divider",
        responsive: {
            xs: 12
        }
    },
    {
        label: "En caso de ser positivo, detallar",
        name: "t",
        placeholder: "En caso de ser positivo, detallar",
        type: "textarea",
        responsive: {
            xs: 12
        },
    },
]