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
    <main className="p-4 flex flex-col gap-5 md:flex-row md:flex-wrap md:justify-between lg:w-5xl lg:m-auto 2xl:w-7xl">
      {articles.map((article, index) =>
        <News key={index} title={article.title} link={article.link} pubDate={article.pubDate} image={article.image} isMain={index === 0} />
      )}
    </main>
  );
};

export default Home;