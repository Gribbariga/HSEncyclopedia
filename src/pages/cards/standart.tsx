import Cards from "@/components/Cards/Cards";
import CardsPage from "@/components/CardsPage/CardsPage";
import { fetchAccessToken } from "@/lib/http/BlizzAxios";
import { fetchCards } from "@/store/cardProccess/asyncThunk/cardsApi";
import { wrapper } from "@/store/index";

export default function StandartPage() {
  return <CardsPage gameMode="standard" />;
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req }) => {
      await store.dispatch(fetchCards({ token: await fetchAccessToken() }));
      return {
        props: {},
      };
    },
);
