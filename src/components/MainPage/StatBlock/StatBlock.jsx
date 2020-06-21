import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import CovidAPI from "../../../services/covidAPI";
import s from './StatBlock.module.css'
import {setGlobalStatActionCreator} from "../../../redux/statBlock-reducer";

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
        <div className={s.blockWrapper}>
            <div className={s.globalStat}>
                {/*<button onClick={() => setShowed(true)}>Показать</button>*/}
                <div className={s.item}>
                    Новых случаев за сегодня :{covidData.Global.NewConfirmed}
                </div>
                <div className={s.item}>
                    Всего зараженных : {covidData.Global.TotalConfirmed}
                </div>
                <div className={s.item}>
                    Новых смертей : {covidData.Global.NewDeaths}
                </div>
                <div className={s.item}>
                    Всего смертей : {covidData.Global.TotalDeaths}
                </div>
                <div className={s.item}>
                    Новых выздоровевших : {covidData.Global.NewRecovered}
                </div>
                <div className={s.item}>
                    Новых выздоровевших : {covidData.Global.TotalRecovered}
                </div>
            </div>
        </div>

    );

}

export default StatBlock;
