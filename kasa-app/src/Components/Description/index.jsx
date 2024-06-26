import starActive from "../../assets/star-active.svg";
import starInactive from "../../assets/star-inactive.svg";
import { useMemo } from "react";

function Description({ data }) {
  //useMemo so avoid reload errors
  const stars = useMemo(() => {
    let starsArray = [true, true, true, true, true]; // initialize with 5 active stars
    for (let i = data.rating; i < starsArray.length; i++) {
      starsArray[i] = false; // Set inactive stars based on rating
    }
    return starsArray;
  }, [data.rating]); // dependency array: recompute when data.rating changes

  return (
    <div className="description">
      {" "}
      <div className="description--left">
        <p className="description--left--title">{data.title}</p>
        <p className="description--left--location">{data.location}</p>
        <div className="description--left--tags">
          {data.tags.map((tag, index) => (
            <div className="description--left--tag" key={`tag-${index}`}>
              {tag}
            </div>
          ))}
        </div>
      </div>
      <div className="description--right">
        <div className="description--right--person">
          <div className="description--right--name">{data.host.name}</div>
          <img
            className="description--right--photo"
            src={data.host.picture}
            alt={data.host.name}
          ></img>
        </div>
        <div className="description--right--rating">
          {stars.map((isActive, index) => (
            <img
              key={`star-${index}`}
              src={isActive ? starActive : starInactive}
              alt={isActive ? "Active Star" : "Inactive Star"}
              className="star"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Description;
