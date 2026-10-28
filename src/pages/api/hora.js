export const prerender = false

// GET https://localhost:4321/api/hora
export async function GET() {
    const laFecha = new Date().toLocaleString("es-ES")
    return new Response(
        JSON.stringify({
            fechaHora:laFecha,
            msg: "Hola"
        }),
        {headers: {"Content-Type": "application/json"}}
    )
}