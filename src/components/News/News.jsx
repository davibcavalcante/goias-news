import { Link } from "react-router-dom";

const News = ({ title, link, image, pubDate, isMain = false }) => {
  return (
    <article className={`relative overflow-hidden rounded-lg ${isMain ? "col-span-2 md:h-[400px]" : "md:h-[250px]"}`}>
      <Link to={link} target="_blank" rel="noopener noreferrer">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className={`absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 via-black/50 to-transparent p-4 ${isMain ? "text-xl md:text-2xl" : "text-lg"}`}>
          <h1 className="text-white font-semibold">{title}</h1>
          <span className="text-gray-300 text-sm block">{pubDate.substring(0, pubDate.length - 5)}</span>
        </div>
      </Link >
    </article >
  );
};

export default News;