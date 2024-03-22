import Card from "../../Components/Card";
import cliffs from "../../assets/cliffs.png";

function Home({ data }) {
  return (
    <div className="home-container">
      <div
        className="title-block"
        style={{ "--background-image-url": `url(${cliffs})` }}
      >
        <p className="title-block-text">Chez vous, partout et ailleurs</p>
      </div>
      <div className="card-container">
        {data.map((item) => (
          <Card
            key={item.id}
            cover={item.cover}
            title={item.title}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
