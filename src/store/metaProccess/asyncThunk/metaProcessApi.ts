import { BlizzardAxios } from "@/lib/http/BlizzAxios";
import { IAllMeta } from "@/lib/models/metaModel";
import { getCookiesByName } from "@/lib/service/service";
import { StateType } from "@/types/store/state";
import { createAsyncThunk } from "@reduxjs/toolkit";

const baseURL = "/metadata?locale=ru_RU&access_token=";

export const fetchMeta = createAsyncThunk<IAllMeta, void, { state: StateType }>(
  "meta/",
  async () => {
    const res = await BlizzardAxios.get(
      `${baseURL}${getCookiesByName("token")}`,
    );
    return await res.data;
  },
);
