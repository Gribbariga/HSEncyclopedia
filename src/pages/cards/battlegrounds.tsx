import Cards from "@/components/Cards/Cards";
import CardsPage from "@/components/CardsPage/CardsPage";
import { fetchAccessToken } from "@/lib/http/BlizzAxios";
import { fetchBGCards } from "@/store/cardProccess/asyncThunk/cardsApi";
import { wrapper } from "@/store/index";

export default function StandartPage() {
  return <CardsPage gameMode={"bg"} />;
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res }) => {
      res.setHeader(
        "Cache-Control",
        "public, s-maxage=10, stale-while-revalidate=59",
      );
      await store.dispatch(fetchBGCards({ token: await fetchAccessToken() }));
      return {
        props: {},
      };
    },
);
