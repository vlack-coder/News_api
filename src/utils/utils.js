const API_KEY = process.env.REACT_APP_NEWS_API
console.log('API_KEY', API_KEY)
export const getUrl = (pagenumber) =>
  `https://newsapi.org/v2/everything?q=apple&from=2022-06-06&to=2022-06-06&sortBy=popularity&apiKey=${API_KEY}&pageSize=6&page=${pagenumber}`;
