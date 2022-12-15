import React, { useEffect } from "react";
import axios from "axios";

const BlizzardInit = () => {
  const fetchAccessToken = async () => {
    console.log(process.env.BLIZZARD_CLIENT_ID);
    console.log(process.env.BLIZZARD_CLIENT_SECRET);
    const response = await axios.post(
      "https://oauth.battle.net/token",
      new URLSearchParams({
        grant_type: "client_credentials",
      }),
      {
        auth: {
          username:
            process.env.BLIZZARD_CLIENT_ID ||
            "0eec3527dfa1420993973710884a923e",
          password:
            process.env.BLIZZARD_CLIENT_SECRET ||
            "fFQpD4iO8NxSiKd4d0m8ZuyJdL3YhWGX",
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
