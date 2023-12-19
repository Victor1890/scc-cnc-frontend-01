import { FieldConfig } from "@components/app/modal/FormModal/FormModal.interface";

export const perimeterBackground: FieldConfig<any>[] = [
    {
        label: "Edad gestacional",
        name: "ageGestional",
        type: "number",
        responsive: {
            xs: 3
        },
    },
    {
        label: "Apgar",
        name: "apgar",
        type: "text",
        responsive: {
            xs: 3
        },
    },
    {
        label: "Peso al nacer",
        name: "birthWeightPoundsLb",
        type: "number",
        responsive: {
            xs: 3
        },
    },
    {
        label: "Perímetro cefálico",
        name: "headCircumferenceCm",
        type: "number",
        responsive: {
            xs: 3
        },
    },
    {
        label: "Reanimación",
        name: "revival",
        type: "select",
        options: [
            {
                label: "Si",
                value: "Si"
            },
            {
                label: "No",
                value: "No"
            }
        ],
        responsive: {
            xs: 3
        },
    },
    {
        label: "Antecedentes perinatales de enfermedad",
        name: "perinatalDiseaseHistoryUUIDs",
        type: "multi-select",
        options: [
            "Reanimación",
            "Asfixia al nacer",
            "Distrés Respiratorio",
            "Sepsis neonatal",
            "Cianosis",
            "Llanto débil al nacer",
            "Diabetes",
            "Cardiopatías",
            "Nefropatías",
        ].map((label) => ({ label, value: label })),
        responsive: {
            xs: 9
        }
    },
    {
        label: "En caso de ser positivo, detallar",
        name: "reasonPerinatal",
        placeholder: "En caso de ser positivo, detallar",
        type: "textarea",
        responsive: {
            xs: 12
        }
    }
]