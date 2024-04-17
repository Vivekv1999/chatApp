import moment from "moment";

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

export const getLast7Days = () => {
  const curretDate = moment();

  const last7Days = [];
  for (let i = 0; i < 7; i++) {
    const dayDate = curretDate.clone().subtract(i, "days");
    const dayName = dayDate.format("dddd");
    last7Days.unshift(dayName);
  }
  return last7Days;
};

export const transfromImage = (url = "", width = "100px") => url;
