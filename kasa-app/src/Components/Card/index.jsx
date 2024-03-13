import { Link } from "react-router-dom";

function Card({ cover, title, id }) {
  return (
    <Link to={`/listing/${id}`}>
      <div className="card">
        <img src={cover} alt={title} className="card--image" />
        <div className="card--title">{title}</div>
      </div>
    </Link>
  );
}

export default Card;
