import News from '../components/News/News';
import useFetchArticles from '../hooks/useFetchArticles';

const Home = () => {
  const { articles, loading, error } = useFetchArticles('rss');

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>Erro ao carregar os artigos: {error.message}</div>;
  }

  return (
    <main className="p-4 grid grid-cols-1 gap-y-4 md:gap-4 md:grid-cols-2 lg:grid-cols-2 max-w-7xl mx-auto">
      {articles.map((article, index) =>
        <News
          key={index}
          title={article.title}
          link={article.link}
          pubDate={article.pubDate}
          image={article.image}
          isMain={index === 0}
        />
      )}
    </main>
  );
};

export default Home;