function Card({ imageUrl, title }) {
  return (
    <div className="card">
      <img src={imageUrl} alt="image du bien à louer" className="card--image" />
      <div className="card--title">{title}</div>
    </div>
  );
}

export default Card;
