interface TrendingShowProps {
  trendingRank: number;
  title: string;
  thumbnailUrl: string;
  category: string;
  publishedOn: string;
  description: string;
  views: string;
}

const TrendingShow: React.FC<TrendingShowProps> = ({
  title,
  thumbnailUrl,
  description,
  trendingRank,
  category,
  publishedOn,
  views
}) => {
  return (
    <div className="card">
      <img src={thumbnailUrl} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">
          #{trendingRank} {title}
        </h5>
        <p className="card-text">{description}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{category}</li>
        <li className="list-group-item">{publishedOn}</li>
        <li className="list-group-item">{views} views</li>
      </ul>
    </div>
  );
};

export default TrendingShow;
