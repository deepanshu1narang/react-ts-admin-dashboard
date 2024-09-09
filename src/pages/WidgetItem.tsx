import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";

interface WidgetItemProps {
  heading: string;
  value: number;
  percent: number;
  color: string;
  amount?: boolean;
}

const WidgetItem = ({ heading, value, percent, color, amount = false }: WidgetItemProps) => {
  return (
    <article className="widget">
      <div className="widgetInfo">
        <p>{heading}</p>
        <h4>{amount ? `$${value}` : value}</h4>
        {percent > 0 ? (
          <span className="green">
            <HiTrendingUp /> +{percent}%{" "}
          </span>
        ) : (
          <span className="red">
            <HiTrendingDown /> {percent}%{" "}
          </span>
        )}
      </div>
      <div
        className="widgetCircle"
        style={{
          backgroundImage: `conic-gradient(${color} ${(Math.abs(percent) * 360) / 100}deg, transparent ${(Math.abs(percent) * 360) / 100}deg)`,
        }}
      >
        <span style={{ color }}>{percent}%</span>
      </div>
    </article>
  );
};

export default WidgetItem;
