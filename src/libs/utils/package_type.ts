type package_type = {
    value: string,
    label: string,
    default: boolean,
}
// PACKAGE_NONE = 0,
// pallet = 1,
// box = 2,
// bundle = 3,
// crate = 4,
// loose = 5,
// pieces = 6,
// roll = 7,

// UNRECOGNIZED = -1,
export function getPackageType():package_type[]{
    return [
        {
            value: "PACKAGE_NONE",
            default: true,
            label: "Please Select Package Type"
        },
        {    
            value: "PALLET",
            default: false,
            label: "Pallet"
        },
        {
            value: "CRATE",
            default: false,
            label: "Crate"
        },
        {
            value: "BOX",
            default: false,
            label: "Box"
        },
        {
            value: "BUNDLE",
            default: false,
            label: "Bundle"
        },
        {
            value: "LOOSE",
            default: false,
            label: "Loose"
        },
        {
            value: "PIECES",
            default: false,
            label: "Pieces"
        },
        {
            value: "ROLL",
            default: false,
            label: "Roll"
        },
    ]
}