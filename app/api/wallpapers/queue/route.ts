import { NextRequest, NextResponse } from "next/server";
import { QueueElement, QueueElementInput } from "@/features/wallpapers/types";

/**
 * GET /api/wallpapers/queue
 *
 * Retrieves queue elements sorted by priority (descending) and addedAt (descending)
 *
 * Query parameters:
 * - status: Filter by status (e.g., "PENDING", "processing", "completed")
 *
 * Response format:
 * {
 *   data: QueueElement[]
 * }
 */
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const status = searchParams.get("status");

    // TODO: Replace with actual database query
    // Example with Prisma:
    // const queueItems = await prisma.queueElement.findMany({
    //   where: status ? { status: status.toLowerCase() } : {},
    //   orderBy: [
    //     { priority: 'desc' },
    //     { addedAt: 'desc' }
    //   ]
    // });

    // Example with MongoDB:
    // const queueItems = await QueueModel.find(
    //   status ? { status: status.toLowerCase() } : {}
    // ).sort({ priority: -1, addedAt: -1 });

    // For now, return empty array or forward to external API
    const externalApiUrl = process.env.API_URL || process.env.NEXT_PUBLIC_API_URL;

    if (externalApiUrl) {
      const url = new URL(`${externalApiUrl}/api/wallpapers/queue`);
      if (status) {
        url.searchParams.set("status", status);
      }

      const response = await fetch(url.toString());
      const data = await response.json();

      // Ensure data is sorted by priority and date
      if (data?.data && Array.isArray(data.data)) {
        data.data.sort((a: QueueElement, b: QueueElement) => {
          // Sort by priority (descending)
          if (b.priority !== a.priority) {
            return b.priority - a.priority;
          }
          // If priorities are equal, sort by date (newest first)
          return new Date(b.addedAt).getTime() - new Date(a.addedAt).getTime();
        });
      }

      return NextResponse.json(data);
    }

    return NextResponse.json({ data: [] });
  } catch (error) {
    console.error("Error fetching queue:", error);
    return NextResponse.json(
      { error: "Failed to fetch queue" },
      { status: 500 }
    );
  }
}

/**
 * POST /api/wallpapers/queue
 *
 * Creates a new queue element
 *
 * Request body: QueueElementInput
 *
 * Response: Created QueueElement
 */
export async function POST(request: NextRequest) {
  try {
    const body: QueueElementInput = await request.json();

    // TODO: Replace with actual database insertion
    // Example with Prisma:
    // const newQueueItem = await prisma.queueElement.create({
    //   data: {
    //     ...body,
    //     addedAt: new Date(body.addedAt)
    //   }
    // });

    // Example with MongoDB:
    // const newQueueItem = await QueueModel.create(body);

    // For now, forward to external API
    const externalApiUrl = process.env.API_URL || process.env.NEXT_PUBLIC_API_URL;

    if (externalApiUrl) {
      const response = await fetch(`${externalApiUrl}/api/wallpapers/queue`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const data = await response.json();
      return NextResponse.json(data, { status: response.status });
    }

    return NextResponse.json(
      { error: "API URL not configured" },
      { status: 500 }
    );
  } catch (error) {
    console.error("Error creating queue item:", error);
    return NextResponse.json(
      { error: "Failed to create queue item" },
      { status: 500 }
    );
  }
}
