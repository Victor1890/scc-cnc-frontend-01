import { FieldConfig } from "@components/app/modal/FormModal/FormModal.interface";

const dummy = [
    "Audífonos",
    "Implante coclear",
]

export const supportProductHearing: FieldConfig<any>[] = [
    {
        label: "Audición",
        name: "",
        type: "list",
        headers: [
            "Lo necesita y lo tiene",
            "Lo necesita y no lo tiene",
        ],
        listOptions: dummy.map(label => ({
            title: label,
            values: [
                {
                    label: "Lo necesita y lo tiene",
                    value: "true"
                },
                {
                    label: "Lo necesita y no lo tiene",
                    value: "false"
                }
            ]
        })),
        responsive: {
            xs: 12
        }
    },
]