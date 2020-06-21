import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CovidAPI from "../../../services/covidAPI";
import { setGlobalStatActionCreator } from "../../../redux/statBlock-reducer";

function StatBlock(props) {
  const [showed, setShowed] = useState(false);

  const covidData = useSelector((state) => state.statBlock.covidData);
  console.log(covidData);
  const dispatch = useDispatch();

  useEffect(() => {
    const getCovidData = async () => {
      const res = await CovidAPI.getGlobalStatistics();
      dispatch(setGlobalStatActionCreator(res));
    };
    getCovidData();
  }, []);

  if (!covidData || !covidData.Global) return <div> loading</div>;
  return (
    <div>
      <button onClick={() => setShowed(true)}>fsf</button>
      Global stat:
      {covidData.Global.NewConfirmed}
    </div>
  );
}

export default StatBlock;
