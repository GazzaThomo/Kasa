import { useParams } from "react-router-dom";
import Gallery from "../../Components/Gallery";
import Collapse from "../../Components/Collapse";

function Listing({ data }) {
  let { id } = useParams();
  const listingData = data.find((element) => element.id === id);
  console.log(listingData);
  return (
    <div className="listing-container">
      <Gallery data={listingData.pictures} />
      <Collapse title="Description">
        <p>{listingData.description}</p>
      </Collapse>
      <Collapse title="Équipements">
        <ul>
          {listingData.equipments.map((equipment, index) => (
            <li key={index}>{equipment}</li>
          ))}
        </ul>
      </Collapse>
    </div>
  );
}

export default Listing;
