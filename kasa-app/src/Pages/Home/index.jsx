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
