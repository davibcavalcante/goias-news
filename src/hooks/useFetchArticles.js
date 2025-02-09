import { useEffect, useState } from "react";
import { apiFetch } from "../api/axios";

const useFetchArticles = (route) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await apiFetch.get(route);
        setArticles(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [route]);

  return { articles, loading, error };
};

export default useFetchArticles;