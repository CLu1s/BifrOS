# Wallpaper Queue API Documentation

This API handles the wallpaper queue with support for drag-and-drop reordering through priority management.

## Endpoints

### GET /api/wallpapers/queue

Retrieves all queue elements sorted by priority and date.

**Query Parameters:**
- `status` (optional): Filter by status (e.g., "PENDING", "processing", "completed")

**Response:**
```json
{
  "data": [
    {
      "id": "string",
      "wallhavenId": "string",
      "imageUrl": "string",
      "thumbnailUrl": "string",
      "purity": "string",
      "resolution": "string",
      "category": "string",
      "addedAt": "2024-01-01T00:00:00.000Z",
      "priority": 100,
      "aspectRatio": 1.5,
      "deviceId": "string",
      "status": "pending"
    }
  ]
}
```

**Sorting Logic:**
1. Primary sort: `priority` (descending) - Higher priority first
2. Secondary sort: `addedAt` (descending) - Newer items first when priority is equal

**Example SQL Query (PostgreSQL):**
```sql
SELECT * FROM queue_elements
WHERE status = 'pending'
ORDER BY priority DESC, added_at DESC;
```

**Example Prisma Query:**
```typescript
const queueItems = await prisma.queueElement.findMany({
  where: { status: 'pending' },
  orderBy: [
    { priority: 'desc' },
    { addedAt: 'desc' }
  ]
});
```

**Example MongoDB Query:**
```javascript
const queueItems = await QueueModel.find({ status: 'pending' })
  .sort({ priority: -1, addedAt: -1 });
```

---

### POST /api/wallpapers/queue

Creates a new queue element.

**Request Body:**
```json
{
  "wallhavenId": "string",
  "imageUrl": "string",
  "thumbnailUrl": "string",
  "purity": "string",
  "resolution": "string",
  "category": "string",
  "addedAt": "2024-01-01T00:00:00.000Z",
  "priority": 100,
  "aspectRatio": 1.5,
  "deviceId": "string (optional)",
  "status": "pending"
}
```

**Response:**
```json
{
  "id": "string",
  // ... all fields from request
}
```

---

### PATCH /api/wallpapers/queue/:id

Updates a queue element's properties. **This endpoint is crucial for drag-and-drop reordering.**

**URL Parameters:**
- `id`: Queue element ID

**Request Body:** (all fields optional)
```json
{
  "priority": 50,
  "status": "completed"
}
```

**Response:**
```json
{
  "id": "string",
  // ... all updated fields
}
```

**Example SQL Query (PostgreSQL):**
```sql
UPDATE queue_elements
SET priority = $1
WHERE id = $2
RETURNING *;
```

**Example Prisma Query:**
```typescript
const updatedItem = await prisma.queueElement.update({
  where: { id },
  data: { priority }
});
```

**Example MongoDB Query:**
```javascript
const updatedItem = await QueueModel.findByIdAndUpdate(
  id,
  { priority },
  { new: true }
);
```

---

### DELETE /api/wallpapers/queue/:id

Deletes a queue element.

**URL Parameters:**
- `id`: Queue element ID

**Response:** 200 OK

---

## Priority System

The priority system determines the order of images in the queue:

- **Higher priority = Earlier in queue**
- When a user drags and drops images, the frontend recalculates priorities based on the new positions
- Priority calculation: `priority = total_items - current_index`
  - First item: highest priority
  - Last item: lowest priority

### Example Priority Recalculation

When reordering 5 items:
```
Position 0: priority = 5 (5 - 0)
Position 1: priority = 4 (5 - 1)
Position 2: priority = 3 (5 - 2)
Position 3: priority = 2 (5 - 3)
Position 4: priority = 1 (5 - 4)
```

The frontend sends bulk PATCH requests to update all affected items' priorities after a drag-and-drop operation.

---

## Database Schema

### Required Fields

```typescript
{
  id: string;                    // Unique identifier
  wallhavenId: string;           // Wallhaven image ID
  imageUrl: string;              // Full image URL
  thumbnailUrl: string;          // Thumbnail URL
  purity: string;                // Image purity category
  resolution: string;            // Image resolution
  category: string;              // Image category
  addedAt: Date;                 // When added to queue
  priority: number;              // Sort priority (IMPORTANT)
  aspectRatio: number;           // Aspect ratio (for portrait/landscape filtering)
  status: "pending" | "processing" | "completed";
  deviceId?: string;             // Optional device identifier
}
```

### Indexes

For optimal performance, create indexes on:
1. `status` - Frequently filtered
2. `priority` - Used for sorting
3. `addedAt` - Used for secondary sorting
4. Composite index on `(status, priority, addedAt)` - Best performance

**Example PostgreSQL:**
```sql
CREATE INDEX idx_queue_status ON queue_elements(status);
CREATE INDEX idx_queue_priority ON queue_elements(priority DESC);
CREATE INDEX idx_queue_sorting ON queue_elements(status, priority DESC, addedAt DESC);
```

**Example Prisma Schema:**
```prisma
model QueueElement {
  id           String   @id @default(cuid())
  wallhavenId  String
  imageUrl     String
  thumbnailUrl String
  purity       String
  resolution   String
  category     String
  addedAt      DateTime
  priority     Int
  aspectRatio  Float
  status       String
  deviceId     String?

  @@index([status])
  @@index([priority(sort: Desc)])
  @@index([status, priority(sort: Desc), addedAt(sort: Desc)])
}
```

---

## Implementation Notes

### Current Setup

The route handlers in this directory currently forward requests to an external API defined by `NEXT_PUBLIC_API_URL` or `API_URL` environment variable.

### Migrating to Local Database

To use a local database instead:

1. Install your preferred database client (Prisma, Mongoose, etc.)
2. Replace the forwarding logic in each route handler with direct database queries
3. Follow the query examples provided in the route handler comments
4. Ensure proper error handling and validation
5. Add authentication/authorization as needed

### Testing the PATCH Endpoint

```bash
# Update priority
curl -X PATCH http://localhost:3000/api/wallpapers/queue/[id] \
  -H "Content-Type: application/json" \
  -d '{"priority": 50}'

# Update status
curl -X PATCH http://localhost:3000/api/wallpapers/queue/[id] \
  -H "Content-Type: application/json" \
  -d '{"status": "completed"}'
```

---

## Environment Variables

Required environment variables:

```env
# External API URL (if not using local database)
NEXT_PUBLIC_API_URL=http://your-api-server.com
# or
API_URL=http://your-api-server.com
```
