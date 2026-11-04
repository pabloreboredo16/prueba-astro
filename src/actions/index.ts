import { defineAction } from "astro:actions";
import { z } from "astro/zod";
import { deleteProduct } from "../lib/db";
import { addProduct } from "../lib/db";

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
    }),
    productDelete: defineAction({
        input: z.object({
            id: z.number()
        }),
        handler: async (input, context) => {
            await deleteProduct(input.id)
            return {
                success: true,
                msg: "Se ha borrado el producto correctamente"
            }
        }
    }),
    productAdd: defineAction({
        input: z.object({
            nombre: z.string(),
            precio: z.number()
        }),
        handler: async (input, context) => {
            await addProduct(input.nombre, input.precio)
            return {
                success: true,
                msg: "Producto añadido correctamente"
            }
        }
    })
}