import data from "../../apropos-data.js";
import Collapse from "../../Components/Collapse";
import mountains from "../../assets/mountains.png";

function Apropos() {
  return (
    <div>
      <img src={mountains} alt="moutains" className="aPropos-image" />
      <div className="aPropos-collapse-container">
        {data.map((item, index) => (
          <div className="apropos-collapse" key={`${index}-collapse-container`}>
            <Collapse title={item.title} key={`${index}-collapse`}>
              <p>{item.content}</p>
            </Collapse>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Apropos;
