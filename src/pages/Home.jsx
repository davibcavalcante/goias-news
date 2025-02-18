import Carousel from '../components/News/Carousel';
import News from '../components/News/News';
import useFetchArticles from '../hooks/useFetchArticles';

const Home = () => {
  const { articles: latestNews, loading: latestLoading, error: latestError } = useFetchArticles('rss');
  const { articles: sportsNews, loading: sportsLoading, error: sportsError } = useFetchArticles('sports');
  const { articles: politicsNews, loading: politicsLoading, error: politicsError } = useFetchArticles('politics');

  if (latestLoading || sportsLoading || politicsLoading) {
    return <div>Carregando...</div>;
  }

  if (latestError || sportsError || politicsError) {
    return <div>Erro ao carregar os artigos: {error.message}</div>;
  }

  return (
    <section className='px-4 py-16 flex flex-col gap-12 lg:w-5xl 2xl:w-7xl mx-auto'>
      {/* Últimas Notícias */}
      <main className="grid grid-cols-1 gap-y-4 md:gap-4 md:grid-cols-2">
        {latestNews.map((article, index) =>
          <News key={index} title={article.title} link={article.link} pubDate={article.pubDate} image={article.image} isMain={index === 0} />
        )}
      </main>

      {/* Esportes */}
      <section className="flex flex-col gap-6 min-h-screen">
        <h1 className='text-5xl text-main font-semibold'>Esportes</h1>
        <section className='m-auto flex flex-col gap-4'>
          <News title={sportsNews[0].title} link={sportsNews[0].link} pubDate={sportsNews[0].pubDate} image={sportsNews[0].image} isMain={true} />
          <Carousel news={sportsNews.filter((n, index) => index <= sportsNews.length / 2 && index > 0)} />
          <Carousel news={sportsNews.filter((n, index) => index > sportsNews.length / 2)} />
        </section>
      </section>

      {/* Política */}
      <section className="flex flex-col gap-6 min-h-screen">
        <h1 className='text-5xl text-main font-semibold'>Política</h1>
        <section className='grid grid-cols-2 gap-4'>
          {politicsNews.slice(0, 6).map((article, index) =>
            <News key={index} title={article.title} link={article.link} image={article.image} pubDate={article.pubDate} isMain={false} />
          )}
        </section>
        <Carousel news={politicsNews.filter((n, index) => index > 5)} />
      </section>
    </section>
  );
};

export default Home;