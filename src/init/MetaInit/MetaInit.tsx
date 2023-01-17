import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { fetchMeta } from "@/store/metaProccess/asyncThunk/metaProcessApi";
import { useAppDispatch } from "@/hooks/state";
const MetaInit = () => {
  const dispatch = useAppDispatch();
  const fetchAccessToken = async () => {
    dispatch(fetchMeta());
  };

  useEffect(() => {
    fetchAccessToken();
  }, []);

  return null;
};

export default React.memo(MetaInit);
