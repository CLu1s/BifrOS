import { NextRequest, NextResponse } from "next/server";

/**
 * PATCH /api/wallpapers/queue/:id
 *
 * Updates a queue element's properties (especially priority)
 *
 * Request body:
 * {
 *   priority?: number,
 *   status?: "pending" | "processing" | "completed",
 *   // ... other fields that can be updated
 * }
 *
 * Response: Updated QueueElement
 */
export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const body = await request.json();

    // TODO: Replace with actual database update
    // Example with Prisma:
    // const updatedItem = await prisma.queueElement.update({
    //   where: { id },
    //   data: body
    // });

    // Example with MongoDB:
    // const updatedItem = await QueueModel.findByIdAndUpdate(
    //   id,
    //   body,
    //   { new: true }
    // );

    // For now, forward to external API
    const externalApiUrl = process.env.API_URL || process.env.NEXT_PUBLIC_API_URL;

    if (externalApiUrl) {
      const response = await fetch(`${externalApiUrl}/api/wallpapers/queue/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        const error = await response.json();
        return NextResponse.json(error, { status: response.status });
      }

      const data = await response.json();
      return NextResponse.json(data);
    }

    return NextResponse.json(
      { error: "API URL not configured" },
      { status: 500 }
    );
  } catch (error) {
    console.error("Error updating queue item:", error);
    return NextResponse.json(
      { error: "Failed to update queue item" },
      { status: 500 }
    );
  }
}

/**
 * DELETE /api/wallpapers/queue/:id
 *
 * Deletes a queue element
 *
 * Response: 200 OK or error
 */
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    // TODO: Replace with actual database deletion
    // Example with Prisma:
    // await prisma.queueElement.delete({
    //   where: { id }
    // });

    // Example with MongoDB:
    // await QueueModel.findByIdAndDelete(id);

    // For now, forward to external API
    const externalApiUrl = process.env.API_URL || process.env.NEXT_PUBLIC_API_URL;

    if (externalApiUrl) {
      const response = await fetch(`${externalApiUrl}/api/wallpapers/queue/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        const error = await response.json();
        return NextResponse.json(error, { status: response.status });
      }

      return new NextResponse(null, { status: 200 });
    }

    return NextResponse.json(
      { error: "API URL not configured" },
      { status: 500 }
    );
  } catch (error) {
    console.error("Error deleting queue item:", error);
    return NextResponse.json(
      { error: "Failed to delete queue item" },
      { status: 500 }
    );
  }
}
