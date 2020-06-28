import React, {useEffect} from 'react';
import s from "./NewsBlock.module.css"
import {useDispatch, useSelector} from "react-redux";
import newsAPI from "../../../services/newsAPI";
import {setNewsActionCreator} from "../../../redux/news-reducer";

function NewsBlock(props) {
    const newsData = useSelector((state) => state.news.covidNews);
    console.table(newsData);
    const dispatch = useDispatch();
    useEffect(async () => {
        const res = await newsAPI.getNews();
        dispatch(setNewsActionCreator(res));
    }, []);
    if (newsData.length === 0) return <div> loading</div>;

    return (

        < div
            className={s.blockWrapper}>

            {
                newsData.map(m => {
                    console.log(m);
                    return <div key={m.id} className={s.item}>
                        <div className={s.title}>{m.title}</div>
                        <div className={s.publishedAt}>{m.publishedAt}</div>
                    </div>
                })
            }
        </div>
    )
}

export default NewsBlock;