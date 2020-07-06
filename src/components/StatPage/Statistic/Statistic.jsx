import React, { useEffect, useState } from "react";
import CovidAPI from "../../../services/covidAPI";
import {
  setGlobalStatActionCreator,
  setSummaryStatActionCreator,
} from "../../../redux/covid-reducer";
import { useDispatch, useSelector } from "react-redux";
import s from "./Statistic.module.css";
function Statistic() {
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

  if (summaryCovidStat.length === 0 && globalCovidStat.length === 0)
    return <div> loading</div>;
  return (
    <div className={s.blockWrapper}>
      {globalCovidStat.map((stat) => {
        return (
          <div>
            {stat.Country} : {stat.TotalConfirmed}
          </div>
        );
      })}
    </div>
  );
}
export default Statistic;
