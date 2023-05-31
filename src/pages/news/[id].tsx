import axios from "axios";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import NewPage from "../../components/NewPage/NewPage";
import { useRouter } from "next/router";

export default function StandartPage({
  news,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return <NewPage news={news} />;
}

export const getServerSideProps: GetServerSideProps<{
  news: any;
}> = async ({ params }) => {
  const res = await axios.get(
    `https://hsmyapiiii.onrender.com/api/news/${params?.id}`,
  );
  const news = await res.data;

  return {
    props: {
      news: news,
    },
  };
};
