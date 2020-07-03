import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CovidAPI from "../../../services/covidAPI";
import s from "./StatBlock.module.css";
import { setSummaryStatActionCreator } from "../../../redux/covid-reducer";

function StatBlock(props) {
  const covidData = useSelector((state) => state.covid.summaryCovidStat);
  console.log(covidData);
  const dispatch = useDispatch();

  useEffect(() => {
    const getStat = async () => {
      const res = await CovidAPI.getGlobalStatistics();
      dispatch(setSummaryStatActionCreator(res));
    };
    getStat();
  }, []);

  if (covidData.length === 0) return <div> loading</div>;
  return (
    <div className={s.blockWrapper}>
      <h1 className={s.headline}>
        Статистика распространения коронавируса в мире на сегодня:
      </h1>
      <div className={s.globalStat}>
        <div className={s.item}>
          Новых случаев за сегодня :{covidData.NewConfirmed}
        </div>
        <div className={s.item}>
          Всего зараженных : {covidData.TotalConfirmed}
        </div>
        <div className={s.item}>Новых смертей : {covidData.NewDeaths}</div>
        <div className={s.item}>Всего смертей : {covidData.TotalDeaths}</div>
        <div className={s.item}>
          Новых выздоровевших : {covidData.NewRecovered}
        </div>
        <div className={s.item}>
          Новых выздоровевших : {covidData.TotalRecovered}
        </div>
      </div>
    </div>
  );
}

export default StatBlock;
