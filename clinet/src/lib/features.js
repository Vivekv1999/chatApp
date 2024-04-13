export const fileFormat = (url = "") => {
  const fileExt = url.split(".").pop();
  if (fileExt === "mp4" || fileExt === "webm" || fileExt === "ogg")
    return "video";

  if (
    fileExt === "png" ||
    fileExt === "jpg" ||
    fileExt === "jpeg" ||
    fileExt === "gif"
  )
    return "image";

  if (fileExt === "mp3" || fileExt === "wav") return "audio";
  return "file";
};

export const transfromImage=(url="",width="100px")=>url