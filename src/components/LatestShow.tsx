interface LatestShowProps {
  title: string;
  thumbnailUrl: string;
  category: string;
  publishedOn: string;
  children: string;
}

const LatestShow: React.FC<LatestShowProps> = (props) => {
  /* receiving the data from parent comp to child 
    * props are objects
    * props are read-only
    * props can have children
  */
  console.log(props);
  return (
    <div className="card">
      <img
        src={props.thumbnailUrl}
        className="card-img-top"
        alt={props.title}
      />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.children}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{props.category}</li>
        <li className="list-group-item">{props.publishedOn}</li>
      </ul>
    </div>
  );
};

export default LatestShow;
