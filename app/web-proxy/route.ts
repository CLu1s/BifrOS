import axios from "axios";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    // Obtener la URL externa desde el query string o parámetros
    const { searchParams } = new URL(req.url);
    const targetURL = searchParams.get("url");

    if (!targetURL) {
      return new Response(JSON.stringify({ error: "No URL provided" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Realiza la solicitud al servidor externo
    const response = await axios.get(targetURL);

    // Devuelve la respuesta al cliente
    return new Response(JSON.stringify(response.data), {
      status: response.status,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Proxy error:", error);

    // Manejar errores
    return new Response(
      JSON.stringify({ error: "Failed to fetch external resource" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    );
  }
}
