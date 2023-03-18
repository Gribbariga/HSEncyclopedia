import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { fetchMeta } from "@/store/metaProccess/asyncThunk/metaProcessApi";
import { useAppDispatch, useAppSelector } from "@/hooks/state";
const MetaInit = () => {
  const dispatch = useAppDispatch();
  const allMeta = useAppSelector((state) => state.Meta.allMeta);
  const fetchMetaData = async () => {
    console.log(allMeta);
    if (!allMeta) {
      dispatch(fetchMeta({}));
    }
  };

  useEffect(() => {
    fetchMetaData();
  }, [allMeta]);

  return null;
};

export default React.memo(MetaInit);
