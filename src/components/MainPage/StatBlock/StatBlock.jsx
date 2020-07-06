import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CovidAPI from "../../../services/covidAPI";
import s from "./StatBlock.module.css";
import {
  setCountryStatActionCreator,
  setGlobalStatActionCreator,
  setSummaryStatActionCreator,
} from "../../../redux/covid-reducer";

function StatBlock(props) {
  const [showed, setShowed] = useState(false);
  const [currentCountry, setCurrentCountry] = useState("");
  const { summaryCovidStat, globalCovidStat, countryCovidStat } = useSelector(
    (state) => state.covid
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const getStat = async () => {
      const { Countries, Global } = await CovidAPI.getGlobalStatistics();
      dispatch(setSummaryStatActionCreator(Global));
      dispatch(setGlobalStatActionCreator(Countries));
    };
    getStat();
  }, []);
  useEffect(() => {
    const getCountryStat = async () => {
      const res = await CovidAPI.getCountryStatistics(currentCountry);
      dispatch(setCountryStatActionCreator(res));
    };
    getCountryStat();
  }, [currentCountry]);
  if (summaryCovidStat.length === 0 && countryCovidStat.length === 0)
    return <div> loading</div>;
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
      <div className={s.countryList}>
        <div>
          <div
            className={s.belarus}
            onClick={() => {
              setCurrentCountry("belarus");
              console.log("BELARUS");
            }}
          >
            Belarus
          </div>
        </div>
        <div
          className={s.russia}
          onClick={() => {
            setCurrentCountry("russia");
            console.log("RUSSIA");
          }}
        >
          Russia
        </div>
        <div
          className={s.ukraine}
          onClick={() => {
            setCurrentCountry("ukraine");
            console.log("UKRAINE");
          }}
        >
          Ukraine
        </div>
      </div>
    </div>
  );
}

export default StatBlock;
