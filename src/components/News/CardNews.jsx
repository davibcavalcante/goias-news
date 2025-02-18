import { Link } from "react-router-dom";

const CardNews = ({ title, link, image, pubDate }) => {
  return (
    <article
      className={`relative overflow-hidden rounded-lg`}
    >
      <Link to={link} target="_blank" rel="noopener noreferrer">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div
          className={`absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 via-black/50 to-transparent p-4`}
        >
          <h1 className="text-white font-semibold">{title}</h1>
          <span className="text-gray-300 text-sm block">{pubDate.substring(0, pubDate.length - 5)}</span>
        </div>
      </Link>
    </article>
  );
};

export default CardNews;