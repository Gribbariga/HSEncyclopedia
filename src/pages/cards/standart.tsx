import Cards from "@/components/Cards/Cards";
import { fetchAccessToken } from "@/lib/http/BlizzAxios";
import { fetchCards } from "@/store/cardProccess/asyncThunk/cardsApi";
import { wrapper } from "@/store/index";

export default function StandartPage() {
  return <Cards gameMode={"standard"} />;
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req }) => {
      // console.log("^&%W#@32232", await fetchAccessToken());
      await store.dispatch(fetchCards({ token: await fetchAccessToken() }));
      return {
        props: {},
      };
    },
);
