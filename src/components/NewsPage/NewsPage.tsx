import { ContainerSC } from "../anyPage/Container/Container";
import { styleNewsPage } from "./style";
import { FC } from "react";

interface INews {
  id: number;
  title: string;
  text: string;
  img: string;
  createdAt: string;
}

interface INewsPageProps {
  news: INews[];
}

const NewsPage: FC<INewsPageProps> = ({ news }) => {
  return (
    <ContainerSC>
      <NewsMainTitleSC>Новостная лента</NewsMainTitleSC>
      <NewsWrapperSC>
        {news.map(({ title, id, createdAt }) => {
          const data = new Date(createdAt);
          const formatData = `${data.getDate()}.${
            data.getMonth() + 1 < 10
              ? `0${data.getMonth() + 1}`
              : data.getMonth() + 1
          }.${data.getFullYear()}`;
          console.log(data.getDate());

          return (
            <NewsItemSC href={`http://localhost:/news/${id}`}>
              <NewsTitleSC>{title}</NewsTitleSC>
              <DataCreateSC>Дата создания: {formatData}</DataCreateSC>
            </NewsItemSC>
          );
        })}
      </NewsWrapperSC>
    </ContainerSC>
  );
};

const {
  NewsItemSC,
  NewsTitleSC,
  DataCreateSC,
  NewsWrapperSC,
  NewsMainTitleSC,
} = styleNewsPage();

export default NewsPage;
