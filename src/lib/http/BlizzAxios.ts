import axios from "axios";

export const BlizzardAxios = axios.create({
  baseURL: "https://us.api.blizzard.com/hearthstone/",
});
