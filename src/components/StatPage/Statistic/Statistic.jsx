import React, { useEffect, useState } from "react";
import CovidAPI from "../../../services/covidAPI";
import {
  setGlobalStatActionCreator,
  setSummaryStatActionCreator,
} from "../../../redux/covid-reducer";
import { useDispatch, useSelector } from "react-redux";
import s from "./Statistic.module.css";

function Statistic() {
  const [value, setValue] = useState("");
  const { summaryCovidStat, globalCovidStat } = useSelector(
    (state) => state.covid
  );
  const [arr, setArr] = useState(globalCovidStat);
  console.log(arr);
  const dispatch = useDispatch();
  useEffect(() => {
    const getStat = async () => {
      const { Countries, Global } = await CovidAPI.getGlobalStatistics();
      dispatch(setSummaryStatActionCreator(Global));
      dispatch(setGlobalStatActionCreator(Countries));
      setArr(Countries);
    };
    getStat();
  }, []);

  useEffect(() => {
    let filteredArr = globalCovidStat.filter((item) => {
      return item.Country.includes(value);
    });
    setArr(filteredArr);
  }, [value]);

  if (summaryCovidStat.length === 0 && globalCovidStat.length === 0)
    return <div> loading</div>;
  return (
    <div className={s.blockWrapper}>
      <input
        className={s.input}
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <div>
        {arr.map((item) => {
          return <div>{item.Country}</div>;
        })}
      </div>
    </div>
  );
}
export default Statistic;
