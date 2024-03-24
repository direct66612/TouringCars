import sprite from "../../assets/svgSprite/sprite.svg";
import { Item, List } from "./DetailsList.styled";

export const DetailsList = ({ details }) => {
  const iconsMapping = {
    AC: "icon-ac",
    adults: "icon-adults",
    "air conditioner": "icon-conditioner",
    kitchen: "icon-kitchen",
    beds: "icon-beds",
    TV: "icon-tv",
    CD: "icon-cd",
    radio: "icon-radio",
    shower: "icon-shower",
    toilet: "icon-toilet",
    freezer: "icon-freezer",
    hob: "icon-hob",
    microwave: "icon-microwave",
    gas: "icon-gas",
    water: "icon-water",
    transmission: "icon-automatic",
    engine: "icon-petrol",
  };

  const data = [];

  for (const key in details) {
    if (key === "bathroom") continue;

    if (
      key === "transmission" ||
      key === "engine" ||
      Number.parseInt(details[key]) !== 0
    ) {
      if (key === "airConditioner") {
        data.splice(2, 0, "AC");
        data.push("air conditioner");
      } else {
        data.push(key);
      }
    }
  }
  return (
    <List>
      {data.map((key, index) => (
        <Item key={index}>
          <svg width={20} height={20} fill="none" stroke="#101828">
            <use xlinkHref={`${sprite}#${iconsMapping[key]}`} />
          </svg>
          <span>
            {key === "airConditioner" ||
            key === "beds" ||
            key === "hob" ||
            key === "adults"
              ? details[key]
              : ""}
            {key === "transmission" || key === "engine"
              ? details[key].charAt(0).toUpperCase() + details[key].slice(1)
              : ` ${key}`}
          </span>
        </Item>
      ))}
    </List>
  );
};
