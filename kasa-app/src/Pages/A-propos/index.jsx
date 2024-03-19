import data from "../../apropos-data.js";
import Collapse from "../../Components/Collapse";
import mountains from "../../assets/mountains.png";

function Apropos() {
  return (
    <div>
      <img src={mountains} alt="moutains" className="aPropos-image" />
      <div className="collapse-container">
        {data.map((item, index) => (
          <Collapse title={item.title} key={`${index}-collapse`}>
            <p>{item.content}</p>
          </Collapse>
        ))}
      </div>
    </div>
  );
}

export default Apropos;
