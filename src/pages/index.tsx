import MainPage from "@/components/MainPage/MainPage";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import styles from "../styles/Home.module.css";

export default function Home() {
  return <MainPage />;
}

const Title = styled("div")`
  color: red;
  font-size: 160px;
`;
