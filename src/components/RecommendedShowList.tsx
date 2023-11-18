import { useState } from "react";

interface IVideo {
  id: number;
  title: string;
  description: string;
  thumbnailUrl: string;
  category: string;
  publishedOn: string;
  isInWatchlist: boolean;
}

const RecommendedShowList: React.FC = () => {
  // state
  const [shows, setShows] = useState<IVideo[]>([
    {
      id: 4545665,
      title: "Ind Vs Aus Cricket 2023",
      thumbnailUrl: "https://placehold.co/260x220",
      description: "Enjoy watching Cricket Series between India and Australia",
      category: "Sports",
      publishedOn: "3 days ago",
      isInWatchlist: false,
    },
    {
      id: 7896798,
      title: "Messi - The Legend",
      thumbnailUrl: "https://placehold.co/260x220",
      description: "Enjoy watching the 10 best goals of Messi",
      category: "Sports",
      publishedOn: "2 days ago",
      isInWatchlist: false,
    },
    {
      id: 345678,
      title: "Ronaldo - The GOAT",
      thumbnailUrl: "https://placehold.co/260x220",
      description: "Enjoy watching the 10 best goals of Ronaldo",
      category: "Sports",
      publishedOn: "5 days ago",
      isInWatchlist: true,
    },
  ]);

  // conditional rendering
  if (!Array.isArray(shows) || shows.length === 0) {
    return (
      <div className="alert alert-danger">
        Sorry! Unable to fetch Recommended videos. Try watching more videos!
      </div>
    );
  }

  // event handler
  const handleManageWatchlist = (index: number): void => {
    console.log(index);
    // How to update state immutably?
    // Duplicating shows array from state
    const duplicateShows = [...shows];
    duplicateShows[index].isInWatchlist = !duplicateShows[index].isInWatchlist;
    
    setShows(duplicateShows);
  };

  // lists & keys
  return (
    <div className="row">
      {
        /* lists */
        shows.map((show, index) => {
          return (
            <div className="col-md-3" key={show.id}>
              <div className="card">
                <img
                  src={show.thumbnailUrl}
                  className="card-img-top"
                  alt={show.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{show.title}</h5>
                  <p className="card-text">{show.description}</p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">{show.category}</li>
                  <li className="list-group-item">{show.publishedOn}</li>
                  <li className="list-group-item">
                    <button
                      className="btn btn-success btn-sm"
                      onClick={ () => {
                        handleManageWatchlist(index)
                      }}
                    >
                      {/* Conditional Rendering in JSX */}
                      {show.isInWatchlist ? "In Watchlist" : "Add to Watchlist"}
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          );
        })
      }
    </div>
  );
};

export default RecommendedShowList;
