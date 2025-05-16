import axios from "axios";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const imageUrl = searchParams.get("url");
    if (!imageUrl) {
      return NextResponse.json(
        { error: "Missing imageUrl query parameter" },
        { status: 400 },
      );
    }

    // Hacer la solicitud a la imagen
    const response = await axios.get(imageUrl, { responseType: "arraybuffer" });

    // Crear la respuesta con el contenido de la imagen
    return new NextResponse(response.data, {
      status: 200,
      headers: {
        "Content-Type": "image/jpeg", // Tipo MIME de la imagen
        "Cache-Control": "max-age=3600", // Cacheo de 1 hora
      },
    });
  } catch (error) {
    console.error("Error fetching the image:", error);

    // Retornar un error si la solicitud falla
    return NextResponse.json(
      { error: "Failed to fetch image" },
      { status: 500 },
    );
  }
}
