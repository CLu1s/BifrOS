import { ImageQueueFactory } from "@/features/wallpapers/classes/Image";
const API_URL = process.env.NEXT_PUBLIC_GET_WALLPAPER;
const fetcherWallpaper = async () => {
  try {
    const response = await fetch(`${API_URL}?type=landscape&keep=true`);
    return response.json();
  } catch (e) {
    return null;
  }
};
async function Cover() {
  const response = await fetcherWallpaper();
  if (!response) return null;
  const image = ImageQueueFactory.createImage(response);
  return (
    <div className="w-full h-96 bg-gray-800 flex ">
      <img
        src={`/wh-proxy?url=${image.data.path}`}
        className={"w-full object-cover"}
      />
    </div>
  );
}

export default Cover;
