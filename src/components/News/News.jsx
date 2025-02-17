import { Link } from "react-router-dom";

const News = ({ title, link, image, pubDate, isMain = false }) => {
  return (
    <article className={`overflow-hidden col-span-2 ${isMain ? "col-span-2" : "md:col-span-1"}`}>
      <Link to={link} target="_blank" rel="noopener noreferrer" className="flex items-stretch justify-between">
        <img src={image} alt={title} className="w-1/2 object-cover rounded-lg" />
        <div className={`flex flex-col w-1/2 p-4 ${isMain ? "text-xl md:text-2xl" : "text-lg"}`}>
          <h1 className={`text-main font-title text-2xl flex-1 ${isMain ? "lg:text-4xl font-semibold" : "" }`}>{title}</h1>
          <span className="text-sm font-semibold block">{pubDate.substring(0, pubDate.length - 5)}</span>
        </div>
      </Link >
    </article >
  );
};

export default News;