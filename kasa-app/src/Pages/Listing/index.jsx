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
      navigate("/error", { replace: true }); // Changed to "/error" for clarity, adjust as needed
    }
  }, [id, navigate, listingData]); // Depend on listingData as well

  // Conditional rendering based on listingData's availability
  if (!listingData) {
    // Optionally, render a loading indicator or null while waiting for the redirect
    return <div>Loading...</div>; // Or null if you prefer not to render anything
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
