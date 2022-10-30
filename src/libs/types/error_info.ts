import { z } from "zod"

export const error_info = z.object({
    valid: z.boolean().optional().nullable(),
    id: z.string().optional().nullable(),
    error_message: z.string().optional().nullable(),
    clas: z.string().optional().nullable(),
    path: z.string().optional().nullable(),
})
export type error_info_type = z.infer<typeof error_info>
export const  eror_info_params = z.object({
    valid: z.boolean().optional().nullable(),
    id: z.string().optional().nullable(),
    error_message: z.string().optional().nullable(),
    clas: z.string().optional().nullable(),
    path: z.string().optional().nullable(),
})
export type error_inof_prams_type = z.infer<typeof eror_info_params>
export function makeInfo(params:error_inof_prams_type): error_info_type{
    return {
        valid: params.valid,
        id: params.id,
        error_message: params.error_message,
        clas: params.clas,
        path: params.path,
    }
}
