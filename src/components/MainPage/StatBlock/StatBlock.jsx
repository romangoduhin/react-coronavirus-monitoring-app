import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CovidAPI from "../../../services/covidAPI";
import s from "./StatBlock.module.css";
import {
  setGlobalStatActionCreator,
  setSummaryStatActionCreator,
} from "../../../redux/covid-reducer";

function StatBlock(props) {
  const { summaryCovidStat } = useSelector((state) => state.covid);
  const dispatch = useDispatch();

  useEffect(() => {
    const getStat = async () => {
      const { Countries, Global } = await CovidAPI.getGlobalStatistics();
      dispatch(setSummaryStatActionCreator(Global));
      dispatch(setGlobalStatActionCreator(Countries));
    };
    getStat();
  }, []);

  if (summaryCovidStat.length === 0) return <div> loading</div>;
  return (
    <div className={s.blockWrapper}>
      <h1 className={s.headline}>
        Статистика распространения коронавируса в мире на сегодня:
      </h1>
      <div className={s.globalStat}>
        <div className={s.item}>
          Новых случаев за сегодня :{summaryCovidStat.NewConfirmed}
        </div>
        <div className={s.item}>
          Всего зараженных : {summaryCovidStat.TotalConfirmed}
        </div>
        <div className={s.item}>
          Новых смертей : {summaryCovidStat.NewDeaths}
        </div>
        <div className={s.item}>
          Всего смертей : {summaryCovidStat.TotalDeaths}
        </div>
        <div className={s.item}>
          Новых выздоровевших : {summaryCovidStat.NewRecovered}
        </div>
        <div className={s.item}>
          Новых выздоровевших : {summaryCovidStat.TotalRecovered}
        </div>
      </div>
    </div>
  );
}

export default StatBlock;
