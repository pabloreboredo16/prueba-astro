import { defineAction } from "astro:actions";
import { input, success } from "astro:schema";
import { z } from "astro/zod";

export const server = {
    newsletter: defineAction({
        input: z.object({
            email: z.string()
        }),
        handler: async (input, context) => {
            // guardar
            console.log("Email guardado correctamente")
            return {
                success: true,
                msg: "Te has subscrito OK"
            }
        }
    })
}