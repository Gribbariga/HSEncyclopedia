import KeyWords from "@/components/KeyWords/KeyWords";
import { fetchAccessToken } from "@/lib/http/BlizzAxios";
import { wrapper } from "@/store/index";
import { fetchMeta } from "@/store/metaProccess/asyncThunk/metaProcessApi";
import React from "react";

const keyWords = () => {
  return <KeyWords />;
};

export default React.memo(keyWords);

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req }) => {
      await store.dispatch(fetchMeta({ token: await fetchAccessToken() }));
      return {
        props: {},
      };
    },
);
