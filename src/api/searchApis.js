import axios from "axios";

const searchHeaders = {
  "content-type": "application/json",
  "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
  "X-RapidAPI-Host": "google-api31.p.rapidapi.com",
};
export default async function webSearch(searchTerm, type) {
  const baseUrl =
    type === "web"
      ? "https://google-api31.p.rapidapi.com/websearch"
      : type === "news"
      ? "https://google-api31.p.rapidapi.com"
      : type === "images"
      ? "https://google-api31.p.rapidapi.com/imagesearch"
      : "https://google-api31.p.rapidapi.com/videosearch";
  try {
    const response = await axios.post(
      baseUrl,
      {
        text: searchTerm,
        safesearch: "off",
        timelimit: "",
        region: "wt-wt",
        color: "",
        size: "",
        type_image: "",
        layout: "",
        duration: "",
        resolution: "",
        max_results: 2000,
      },
      { headers: searchHeaders }
    );
    if (!response) throw Error;
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
}
