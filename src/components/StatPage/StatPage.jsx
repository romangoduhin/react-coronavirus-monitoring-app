import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import covidAPI from "../../services/covidAPI";
import {setCountryStatActionCreator} from "../../redux/covid-reducer";
import NavBar from "../NavBar/NavBar";


function StatPage() {
    const covidCountryData = useSelector((state) => state.covid.countryCovidStat);
    console.log(covidCountryData);
    const dispatch = useDispatch();
    useEffect(() => {
        const getStat = async () => {
            const res = await covidAPI.getCountryStatistics();
            dispatch(setCountryStatActionCreator(res))
        }
        getStat();
    }, []);
    if (covidCountryData.length === 0) return <div>loading</div>
    return (
        <div>
            <NavBar/>
            <div>{
                covidCountryData.map(stat => {
                    return <div key={stat.id}>{stat.Country}</div>
                })
            }
            </div>
        </div>
    )

}

export default StatPage;
