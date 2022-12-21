import React, { useEffect } from "react";
import axios from "axios";
const BlizzardInit = () => {
  const fetchAccessToken = async () => {

    const response = await axios.post(
      "https://oauth.battle.net/token",
      new URLSearchParams({
        grant_type: "client_credentials",
      }),
      {
        auth: {
          username:
          process.env.NEXT_PUBLIC_BLIZZARD_CLIENT_ID || "" ,
          password:
          process.env.NEXT_PUBLIC_BLIZZARD_CLIENT_SECRET || ""
        },
      },
    );
  };

  useEffect(() => {
    fetchAccessToken();
  }, []);

  return null;
};

export default React.memo(BlizzardInit);
