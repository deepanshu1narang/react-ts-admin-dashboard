import { useState } from "react";
import Main from "../../components/Main";
import Clock from "../../components/Clock";

const Toss = () => {
  const [angle, setAngle] = useState<number>(0);

  const flipCoin = (): void => {
    if (Math.random() > 0.5) {
      setAngle((prev) => prev + 180);
    } else {
      setAngle((prev) => prev + 360);
    }
  };

  return (
    <Main className="dashboard-app-container">
      <h1>Toss</h1>
      <section>
        <Clock />
        <article
          className="toss-coin"
          onClick={flipCoin}
          style={{
            transform: `rotateY(${angle}deg)`,
          }}
        >
          <div></div>
          <div></div>
        </article>
      </section>
    </Main>
  );
};

export default Toss;
