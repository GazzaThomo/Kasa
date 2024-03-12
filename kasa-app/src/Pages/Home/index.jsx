import Card from "../../Components/Card";
import cliffs from "../../assets/cliffs.png";

function Home({ data }) {
  return (
    <div>
      <div
        className="title-block"
        style={{ "--background-image-url": `url(${cliffs})` }}
      >
        Chez vous, partout et ailleurs
      </div>
      <div className="card-container">
        {data.map((item, index) => (
          <Card key={index} imageUrl={item.pictures[0]} title={item.title} />
        ))}
      </div>
    </div>
  );
}

export default Home;
