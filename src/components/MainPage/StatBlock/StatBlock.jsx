import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CovidAPI from "../../../services/covidAPI";
import s from "./StatBlock.module.css";
import {
  setGlobalStatActionCreator,
  setSummaryStatActionCreator,
} from "../../../redux/covid-reducer";

function StatBlock() {
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
          Всего зараженных:<p>{summaryCovidStat.TotalConfirmed}</p>
        </div>
        <div className={s.item}>
          Всего выздоровевших:<p>{summaryCovidStat.TotalRecovered}</p>
        </div>
        <div className={s.item}>
          Всего смертей:<p>{summaryCovidStat.TotalDeaths}</p>
        </div>
        <div className={s.item}>
          Новых зараженных:<p>{summaryCovidStat.NewConfirmed}</p>
        </div>
        <div className={s.item}>
          Новых выздоровевших:<p>{summaryCovidStat.NewRecovered}</p>
        </div>
        <div className={s.item}>
          Новых смертей:<p> {summaryCovidStat.NewDeaths}</p>
        </div>
      </div>
    </div>
  );
}

export default StatBlock;
