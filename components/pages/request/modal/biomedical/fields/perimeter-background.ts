import { FieldConfig } from "@components/app/modal/FormModal/FormModal.interface";

export const perimeterBackground: FieldConfig<any>[] = [
    {
        label: "Edad gestacional",
        name: "Edad gestacional",
        type: "text",
        responsive: {
            xs: 3
        },
    },
    {
        label: "Apgar",
        name: "Apgar",
        type: "text",
        responsive: {
            xs: 3
        },
    },
    {
        label: "Peso al nacer",
        name: "Peso al nacer",
        type: "text",
        responsive: {
            xs: 3
        },
    },
    {
        label: "Perímetro cefálico",
        name: "Perímetro cefálico",
        type: "text",
        responsive: {
            xs: 3
        },
    },
    {
        label: "",
        name: "",
        type: "divider",
        responsive: {
            xs: 12
        }
    },
    {
        label: "Antecedentes perinatales relevantes a la condición presente",
        name: "Antecedentes perinatales relevantes a la condición presente",
        responsive: {
            xs: 12
        },
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
        ].map((label) => ({ label, value: label }))
    },
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
        name: "test - 1",
        placeholder: "En caso de ser positivo, detallar",
        type: "textarea",
        responsive: {
            xs: 12
        }
    },
]