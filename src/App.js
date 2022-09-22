import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import Navbarinshots from "./Components/Navbarinshots";
import NewsContent from "./Components/NewsContent/NewsContent";
// import apikey from './Data/Config';
import Footer from "./Components/Footer/Footer";

const App = () => {
  const [Category, setCategory] = useState("general");
  const [NewsArray, setNewsArray] = useState([]);
  const [NewsResults, setNewsResults] = useState();
  const [loadMore, setloadMore] = useState(20);
  console.log(process.env);

  const Newsapi = async () => {
    try {
      const proxyUrl = "https://cors-anywhere.herokuapp.com/";

      const news = await axios.get(
        `${proxyUrl}https://newsapi.org/v2/top-headlines?country=in&apiKey=56c33dfc3b4941a9b272662e2edb10f3&Category=${Category}&pageSize=${loadMore}`
      );
      setNewsArray(news.data.articles);
      setNewsResults(news.data.totalResults);
    } catch (error) {
      console.log("error");
    }
    console.log(NewsArray);
  };
  useEffect(() => {
    Newsapi();
  }, [NewsResults, Category, loadMore]);

  return (
    <div>
      <Navbarinshots SetCategory={setCategory} />
      <NewsContent
        loadMore={loadMore}
        setloadMore={setloadMore}
        NewsArray={NewsArray}
        NewsResults={NewsResults}
      />

      <Footer />
    </div>
  );
};

export default App;
