import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Audio } from "react-loader-spinner";
import ReactPaginate from "react-paginate";
import Card from "../components/Card";
import { getUrl } from "../utils/utils";
import "./NewsPage.css";

function NewsPage() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [corrent, setCorrent] = useState(1);

  const getArticles = async (pageCount) => {
    // const getArticles = async (pageCount = 1) => {
    setLoading(true);
    const response = await fetch(getUrl(pageCount + 1));
    const data = await response.json();
    // setLoading((v) => !v);
    setData(data.articles);
    setCorrent(pageCount);
    setLoading(false);
  };

  console.log("dwwata", data);
  useEffect(() => {
    getArticles();
  }, []);

  const handlePageClick = async (event) => {
    console.log("event.selected", event.selected);
    let currentPage = event.selected;
    await getArticles(currentPage);
  };

  return (
    <div className="news__newspage">
      {/* Heading */}
      <div className="heading">
        <h3 className="news__newspage-heading">Latest news</h3>
        <div className="section_divider" />
      </div>
      {/* Articles */}
      {loading ? (
        <div className="loader">
          <Audio height="100" width="100" color="#03009E" ariaLabel="loading" />
        </div>
      ) : (
        <div className="news__newspage__article">
          <motion.div
            // whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.57 }}
            className="news_newspage__article-section"
          >
            {data &&
              data.length !== 0 &&
              data.map(({ title, description, url }, i) => (
                <Card
                  title={title}
                  description={description}
                  url={url}
                  key={i}
                />
              ))}
          </motion.div>
          <motion.div
            whileInView={{ x: [100, 50, 0], opacity: [0, 0, 1] }}
            transition={{ duration: 0.57, staggerChildren: 0.5 }}
            className="news__newspage__article-pagination"
          >
            <ReactPaginate
              // breakLabel="..."
              onPageChange={handlePageClick}
              pageClassName="pagebar"
              containerClassName="news__pagination-container"
              // pageRangeDisplayed={3}
              pageCount={6}
              // previousLabel={<p className="pagenext">{"<<"}</p>}
              previousLabel={
                <p className={`pagenext greyed ${corrent > 0 && "black"}`}>
                  {"<<"}
                </p>
              }
              nextLabel={
                <p className={`pagenext ${corrent === 5 && "greyed"}`}>
                  {">>"}
                </p>
              }
              activeClassName="pagination__link"
              forcePage={corrent}
            />
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default NewsPage;
