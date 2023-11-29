import { FieldConfig } from "@components/app/modal/FormModal/FormModal.interface";

const dummy = [
    "Rampas portátiles",
    "Cojines antiescaras",
    "Colchones antiescaras",
]

export const supportProductOtherAccessory: FieldConfig<any>[] = [
    {
        label: "Otros aditamentos",
        name: "teas465465",
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