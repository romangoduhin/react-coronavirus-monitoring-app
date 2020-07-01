import React, {useEffect, useState} from 'react';
import s from "./NewsBlock.module.css"
import {useDispatch, useSelector} from "react-redux";
import newsAPI from "../../../services/newsAPI";
import {setNewsActionCreator, setTotalResultsActionCreator} from "../../../redux/news-reducer";

function NewsBlock(props) {
    const [currentPage, setCurrentPage] = useState(1);
    const {covidNews, totalResults, pageSize} = useSelector((state) => state.news);
    const dispatch = useDispatch();

    useEffect(() => {
        const getNews = async () => {
            const {articles, totalResults} = await newsAPI.getNews('covid', currentPage);
            console.log(articles);
            dispatch(setNewsActionCreator(articles));
            dispatch(setTotalResultsActionCreator(totalResults));
        };
        getNews();
    }, [currentPage]);

    let pagesCount = Math.ceil(totalResults / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    if (covidNews.length === 0) return <div> loading</div>;

    return (
        < div className={s.blockWrapper}>
            <div className={s.pageList}>
                {pages.map(page => {
                    return <span className={currentPage === page && s.selectPage} key={page.id} onClick={() => {
                        setCurrentPage(page)
                    }}>{page}</span>
                })}
            </div>
            {
                covidNews.map(article => {
                    return <div key={article.id} className={s.item}>
                        <div className={s.title}>{article.title}</div>
                        <div className={s.publishedAt}>{article.publishedAt}</div>
                    </div>
                })
            }
        </div>
    )
}

export default NewsBlock;