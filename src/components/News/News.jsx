import { Link } from "react-router-dom";

const News = ({ title, link, image, pubDate, isMain = false }) => {
  return (
    <article className={`w-full ${!isMain && 'flex items-stretch gap-4 md:w-[calc(50%-16px)]'}`}>
      <section className={`flex flex-col order-2 w-full ${isMain ? 'text-2xl' : 'w-1/2 text-lg'}`}>
        <Link
          to={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h1 className={`text-secondary font-semibold flex-1`}>
            {title}
          </h1>
        </Link>
        <span className="text-sm font-light">{pubDate.substring(0, pubDate.length - 5)}</span>
      </section>
      <section className={`${!isMain && 'w-1/2'}`}>
        <img src={image} alt={title} className="w-full h-full object-cover rounded-lg" />
      </section>
    </article>
  );
};

export default News;