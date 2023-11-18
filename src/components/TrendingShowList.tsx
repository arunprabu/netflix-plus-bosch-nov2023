import { useState } from 'react';
import TrendingShow from './TrendingShow';

interface IVideo {
  id: number;
  trendingRank: number;
  title: string;
  description: string;
  thumbnailUrl: string;
  category: string;
  publishedOn: string;
  views: string
}

const TrendingShowList = () => {
  // state 
  /*
    * component-wide data
    * updateable data
  */
  const [resolution, setResolution] = useState<string>("HD");
  const [shows, setShows] = useState<IVideo[]>([
    {
      id: 34567589,
      trendingRank: 1,
      title: "Man Vs Wild",
      description: "Adventure TV Show in Discovery Channel",
      thumbnailUrl: "https://placehold.co/300x200",
      category: "Infotainment",
      publishedOn: "3 days ago",
      views: "700K",
    },
    {
      id: 4565789,
      trendingRank: 2,
      title: "BBC Earth - II",
      description: "A Documentary narrated by David Attenborough",
      thumbnailUrl: "https://placehold.co/300x200",
      category: "Infotainment",
      publishedOn: "5 days ago",
      views: "600K",
    },
  ]);

  console.log(shows);

  const handleChangeResolution = (): void => {
    setResolution('4K'); 
  }
  
  return (
    <div className="row">
      <h3>
        <span>Watch the shows in {resolution} Quality</span>
        <button
          className="btn btn-sm btn-primary"
          onClick={handleChangeResolution}
        >
          Switch to 4K
        </button>
      </h3>

      <div className="col-md-3">
        <TrendingShow {...shows[0]} />
      </div>

      <div className="col-md-3">
        <TrendingShow {...shows[1]} />
      </div>
    </div>
  );
}

export default TrendingShowList;
