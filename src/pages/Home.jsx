import React, { useEffect, useState } from "react";

const Home = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/rss");
        const data = await response.json();
        setArticles(data);
      } catch (error) {
        console.error("Erro ao buscar artigos:", error);
      }
    };
    fetchArticles();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Últimas Notícias</h1>
      <ul>
        {articles.map((article, index) => (
          <li key={index} className="mb-4">
            <img src={article.image} alt="" />
            <a
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {article.title}
            </a>
            <p className="text-sm text-gray-600">{article.pubDate}</p>
            <p className="text-sm">{article.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;