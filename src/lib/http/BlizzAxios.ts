import axios from "axios";

export const BlizzardAxios = axios.create({
  baseURL: "https://us.api.blizzard.com/hearthstone/",
});

export const fetchAccessToken = async () => {
  const response = await axios.post(
    "https://oauth.battle.net/token",
    new URLSearchParams({
      grant_type: "client_credentials",
    }),
    {
      auth: {
        username: process.env.NEXT_PUBLIC_BLIZZARD_CLIENT_ID || "",
        password: process.env.NEXT_PUBLIC_BLIZZARD_CLIENT_SECRET || "",
      },
    },
  );

  return response.data.access_token;
};
