import hslToRgbString from "../shared/HSLtoRGB";

interface CategoryItemProps {
  color: string;
  value: number;
  heading: string;
}

const CategoryItem = ({ color, value, heading }: CategoryItemProps) => (
  <div className="category-item">
    <h5>{heading}</h5>
    <div>
      <div
        style={{
          backgroundColor: color.includes("hsl") ? hslToRgbString(color) : color,
          width: `${value}%`,
        }}
      ></div>
    </div>
    {/* <div className="capsule"></div> */}
    <span>{value}%</span>
  </div>
);

export default CategoryItem;
