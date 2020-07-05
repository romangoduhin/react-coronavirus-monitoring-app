import React, { useEffect, useState } from "react";
import s from "./News.module.css";
import newsAPI from "../../../services/newsAPI";
import { useDispatch, useSelector } from "react-redux";
import {
  setNewsActionCreator,
  setTotalResultsActionCreator,
} from "../../../redux/news-reducer";
import newsNotFoundImg from "../../../services/pngfuel.com.png";
function News() {
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const { covidNews, totalResults, pageSize } = useSelector(
    (state) => state.news
  );
  useEffect(() => {
    const getNews = async () => {
      const { articles, totalResults } = await newsAPI.getNews(
        "covid",
        currentPage,
        pageSize
      );
      dispatch(setNewsActionCreator(articles));
      dispatch(setTotalResultsActionCreator(totalResults));
    };
    getNews();
  }, [currentPage]);
  let pagesCount = Math.ceil(totalResults / pageSize);
  let pages = [];
  for (let i = 1; i <= (pagesCount > 10 ? 10 : pagesCount); i++) {
    pages.push(i);
  }
  if (covidNews.length === 0) return <div> loading</div>;
  return (
    <div className={s.blockWrapper}>
      <div className={s.newsList}>
        {covidNews.map((article) => {
          return (
            <div className={s.itemWrapper}>
              <div className={s.imgWrapper}>
                <div key={article.id} className={s.item}>
                  <a href={article.url}>
                    <img
                      className={s.urlToImage}
                      src={
                        article.urlToImage === null
                          ? newsNotFoundImg
                          : article.urlToImage
                      }
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div className={s.infWrapper}>
                <a href={article.url}>
                  <h4 className={s.title}>{article.title}</h4>
                </a>
                <div className={s.description}>{article.description}</div>
                <div className={s.publishedAt}>
                  {article.publishedAt.split("T")[0]}
                </div>
                <h5 className={s.author}>
                  Источник :
                  {article.author === null ? "Не указан" : article.author}
                </h5>
              </div>
            </div>
          );
        })}
      </div>
      <div className={s.pageList}>
        {pages.map((page) => {
          return (
            <span
              className={currentPage === page ? s.selectPage : s.listItem}
              key={page.id}
              onClick={() => {
                setCurrentPage(page);
              }}
            >
              {page}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default News;
