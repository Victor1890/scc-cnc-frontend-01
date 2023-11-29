import { FieldConfig } from "@components/app/modal/FormModal/FormModal.interface";

export const treatingDoctor: FieldConfig<any>[] = [
    {
        label: "",
        name: "",
        type: "divider",
        responsive: {
            xs: 12
        }
    },
    {
        label: "Nombre",
        name: "name",
        type: "text",
        responsive: {
            xs: 5
        }
    },
    {
        label: "Exequatur",
        name: "exequatur",
        type: "text",
        responsive: {
            xs: 3
        }
    },
    {
        label: "Especialidad",
        name: "especialidad",
        type: "text",
        responsive: {
            xs: 4
        }
    },
    {
        label: "PSS",
        name: "pss",
        type: "text",
        responsive: {
            xs: 12
        }
    },
    {
        label: "Región de salud",
        name: "region-salud",
        type: "select",
        responsive: {
            xs: 4
        },
        options: Array.from({ length: 5 }).map(() => ({ label: "TEST", value: "TEST" }))
    },
    {
        label: "Área",
        name: "area",
        type: "select",
        responsive: {
            xs: 4
        },
        options: Array.from({ length: 5 }).map(() => ({ label: "TEST", value: "TEST" }))
    },
    {
        label: "Zona",
        name: "zona",
        type: "select",
        responsive: {
            xs: 4
        },
        options: Array.from({ length: 5 }).map(() => ({ label: "TEST", value: "TEST" }))
    },
    {
        label: "Teléfono",
        name: "phone",
        type: "tel",
        responsive: {
            xs: 6
        },
        options: Array.from({ length: 5 }).map(() => ({ label: "TEST", value: "TEST" }))
    },
    {
        label: "Fecha del informe",
        name: "resumeDate",
        type: "date",
        responsive: {
            xs: 6
        },
        options: Array.from({ length: 5 }).map(() => ({ label: "TEST", value: "TEST" }))
    },
]