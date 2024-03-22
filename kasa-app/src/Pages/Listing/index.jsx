import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Gallery from "../../Components/Gallery";
import Collapse from "../../Components/Collapse";
import Description from "../../Components/Description";

function Listing({ data }) {
  console.log(data);
  let { id } = useParams();
  const navigate = useNavigate();
  const listingData = data.find((element) => element.id === id);
  console.log(listingData);

  useEffect(() => {
    // check is listing data exists
    if (!listingData) {
      // if it doesn't, go to the error page
      navigate("/error", { replace: true }); // changed to error, but could be replaced by the * if a new page called error is brought in
    }
  }, [id, navigate, listingData]); //depends on listingdata too

  // why is this needed ? bugs out if it's not here
  if (!listingData) {
    return <div>Loading...</div>; //can return null here to leave blank page
  }

  return (
    <div className="listing-container">
      <Gallery pictures={listingData.pictures} />
      <Description data={listingData} />
      <div className="collapses-container">
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
    </div>
  );
}

export default Listing;
