import React, {useEffect} from "react";
import NavBar from "../NavBar/NavBar";
import {useDispatch, useSelector} from "react-redux";
import covidAPI from "../../services/covidAPI";
import {setCountryStatActionCreator} from "../../redux/covid-reducer";


function StatPage() {
    const covidCountryData = useSelector((state) => state.covid.countryCovidStat);
    console.log(covidCountryData);
    const dispatch = useDispatch();
    useEffect(async () => {
        const res = await covidAPI.getCountryStatistics();
        dispatch(setCountryStatActionCreator(res))
    }, []);
    if (covidCountryData.length === 0) return <div>loading</div>
    return (
        <div>
            <NavBar/>
            <div>{
                covidCountryData.map(c => {
                    return <div key={c.id}>{c.Country}</div>
                })
                }
            </div>
        </div>
    )

}

export default StatPage;
