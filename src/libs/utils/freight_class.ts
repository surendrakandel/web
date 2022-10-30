type freight_type = {
    value: string,
    label: string,
    default: boolean,
}
// freight_CLASS
// CLASS_NONE = 0,
// CLASS50 = 1,
// CLASS55 = 2,
// CLASS60 = 3,
// CLASS65 = 4,
// CLASS70 = 5,
// CLASS775 = 6,
// CLASS85 = 7,
// CLASS925 = 8,
// CLASS100 = 9,
// CLASS110 = 10,
// CLASS125 = 11,
// CLASS150 = 12,
// CLASS175 = 13,
// CLASS200 = 14,
// CLASS250 = 15,
// CLASS300 = 16,
// CLASS400 = 17,
// CLASS500 = 18,
// UNRECOGNIZED = -1,
export function getFreightClass():freight_type[]{
    return [
        {
            value: "CLASS_NONE", 
            default: true,
            label: "Please Select Freight CLASS",
        },
        {
            value: "CLASS50",
            default: false,
            label: "CLASS 50"
        },
        {
            value: "CLASS55",
            default: false,
             label:"CLASS 55"
        },
        {
            value: "CLASS60",
            default: false,
            label: "CLASS 60"
        },
        {
            value: "CLASS65",
            default: false,
            label: "CLASS 65"
        },
        {
            value: "CLASS70",
            default: false,
            label: "CLASS 70"
        },
        {
            value: "CLASS775",
            default: false,
            label: "CLASS 77.5"
        },
        {
            value: "CLASS85",
            default: false,
            label: "CLASS 85"
        },
        {
            value: "CLASS925",
            default: false,
            label: "CLASS 92.5"
        },
        {
            value: "CLASS100",
            default: false,
            label: "CLASS 100"
        },
        {
            value: "CLASS110",
            default: false,
            label: "CLASS 110"
        },
        {
            value: "CLASS125",
            default: false,
            label: "CLASS 125"
        },
        {
            value: "CLASS150",
            default: false,
            label: "CLASS 150"
        },
        {
            value: "CLASS175",
            default: false,
            label: "CLASS 175"
        },
        {
            value: "CLASS200",
            default: false,
            label: "CLASS 200"
        },
        {
            value: "CLASS250",
            default: false,
            label: "CLASS 250"
        },
        {
            value: "CLASS300",
            default: false,
            label: "CLASS 300"
        },
        {
            value: "CLASS400",
            default: false,
            label: "CLASS 400"
        },
        {
            value: "CLASS500",
            default: false,
            label: "CLASS 500"
        },
    ]
}