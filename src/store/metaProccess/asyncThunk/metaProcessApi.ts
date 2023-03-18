import { BlizzardAxios } from "@/lib/http/BlizzAxios";
import { IAllMeta } from "@/lib/models/metaModel";
import { getCookiesByName } from "@/lib/service/service";
import { StateType } from "@/types/store/state";
import { createAsyncThunk } from "@reduxjs/toolkit";

const baseURL = "/metadata?locale=ru_RU&access_token=";

interface IArgsApi {
  token?: string;
}

export const fetchMeta = createAsyncThunk<
  IAllMeta,
  IArgsApi,
  { state: StateType }
>("meta/", async ({ token }) => {
  const res = await BlizzardAxios.get(
    `${baseURL}${getCookiesByName("token") || token}`,
  );
  return await res.data;
});
