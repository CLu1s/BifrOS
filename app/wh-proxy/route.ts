import axios from "axios";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  return await handleImageProxy(request);
}

export async function POST(request: NextRequest) {
  return await handleImageProxy(request);
}

async function handleImageProxy(request: NextRequest) {
  try {
    // Extraer el parámetro `url` de las consultas GET o del cuerpo POST
    let imageUrl;
    if (request.method === "GET") {
      imageUrl = request.nextUrl.searchParams.get("url");
    } else if (request.method === "POST") {
      const body = await request.json();
      imageUrl = body.url;
    }

    if (!imageUrl) {
      return NextResponse.json(
        { error: "Missing 'url' parameter in query or body" },
        { status: 400 },
      );
    }

    // Hacer la solicitud a la imagen con headers adicionales
    const response = await axios.get(imageUrl, {
      responseType: "arraybuffer",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
        Referer: "https://wallhaven.cc/",
      },
    });

    // Crear la respuesta con el contenido de la imagen
    const contentType = response.headers["content-type"] || "image/jpeg";
    return new NextResponse(response.data, {
      status: 200,
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "max-age=3600", // Cachear por 1 hora
      },
    });
  } catch (error) {
    console.error("Error fetching the image:", error);

    // Retornar un error si la solicitud falla
    return NextResponse.json(
      { error: "Failed to fetch image", details: error },
      { status: 500 },
    );
  }
}
