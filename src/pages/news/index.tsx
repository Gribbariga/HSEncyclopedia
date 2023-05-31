import axios from "axios";
import NewsPage from "../../components/NewsPage/NewsPage";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

export default function StandartPage({
  news,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return <NewsPage news={news} />;
}

export const getServerSideProps: GetServerSideProps<{
  news: any;
}> = async () => {
  const res = await axios.get("https://hsmyapiiii.onrender.com/api/news");
  const news = await res.data;

  return {
    props: {
      news: news,
    },
  };
};
