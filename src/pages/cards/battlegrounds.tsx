import Cards from "@/components/Cards/Cards";
import { fetchAccessToken } from "@/lib/http/BlizzAxios";
import { fetchBGCards } from "@/store/cardProccess/asyncThunk/cardsApi";
import { wrapper } from "@/store/index";

export default function StandartPage() {
  return <Cards gameMode={"bg"} />;
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res }) => {
      res.setHeader(
        "Cache-Control",
        "public, s-maxage=10, stale-while-revalidate=59",
      );
      // console.log("^&%W#@32232", await fetchAccessToken());
      await store.dispatch(fetchBGCards({ token: await fetchAccessToken() }));
      return {
        props: {},
      };
    },
);
