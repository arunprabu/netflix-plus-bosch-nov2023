import LatestShow from "../components/LatestShow";
import RecommendedShowList from "../components/RecommendedShowList";
import TrendingShowList from "../components/TrendingShowList";

const NetflixPage: React.FC = () => {
  return (
    <div>
      <h1>Welcome to Netflix-style of App!</h1>
      <h2>Latest Shows | Props Demo</h2>
      <div className="row">
        <div className="col-md-3">
          <LatestShow
            title="Ind Vs NZ Cricket Highlights"
            thumbnailUrl="https://placehold.co/300x200"
            category="Sports"
            publishedOn="a day ago"
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit
          </LatestShow>
        </div>

        <div className="col-md-3">
          <LatestShow
            title="Aus Vs SA Cricket Highlights"
            thumbnailUrl="https://placehold.co/300x200"
            category="Sports"
            publishedOn="a day ago"
          >
            Eveniet consequuntur, temporibus quam iste unde animi accusamus.
          </LatestShow>
        </div>
      </div>

      <hr />
      <h2>Trending Shows | States and Events Demo</h2>
      <TrendingShowList />

      <hr />
      <h2>
        Recommended Shows | States, Events, Conditional Rendering, Lists and
        Keys Demo
      </h2>
      <RecommendedShowList />

      <hr />
      <h2>Subscription | Styling Demo</h2>
    </div>
  );
};

export default NetflixPage;
