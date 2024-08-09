import { useState } from "react";

const Header = ({ text }) => <h2>{text}</h2>;

const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}> {text} </button>
);

const Statistics = ({ clicks }) => {
  const allClicks = clicks.good + clicks.bad + clicks.neutral;
  const totalScore =
    clicks.good * 1.0 + clicks.neutral * 0.0 + clicks.bad * -1.0;

  const averageScore = totalScore / allClicks;

  const posAveScore = (clicks.good * 1.0) / allClicks;

  if (allClicks === 0) {
    return <div>No feedback given</div>;
  }

  return (
    <div>
      <table>
        <tbody>
          <StatisticLine text="good " value={clicks.good}></StatisticLine>

          <StatisticLine text="neutral " value={clicks.neutral}></StatisticLine>

          <StatisticLine text="bad " value={clicks.bad}></StatisticLine>

          <StatisticLine text="all " value={allClicks}></StatisticLine>

          <StatisticLine text="average " value={averageScore}></StatisticLine>

          <StatisticLine text="positive " value={(posAveScore*100).toFixed(1) + '%'}></StatisticLine>
        </tbody>
      </table>
    </div>
  );
};

const App = () => {

  const [clicks, setClicks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const goodClicked = () => {
    setClicks({
      ...clicks,
      good: clicks.good + 1,
    });
  };
  const badClicked = () => {
    setClicks({
      ...clicks,
      bad: clicks.bad + 1,
    });
  };

  const neutralClicked = () => {
    setClicks({
      ...clicks,
      neutral: clicks.neutral + 1,
    });
  };

  return (
    <div>
      <Header text={"give feedback"}></Header>

      <Button text="good" handleClick={goodClicked}></Button>
      <Button text="neutral" handleClick={neutralClicked}></Button>
      <Button text="bad" handleClick={badClicked}></Button>

      <Header text={"statistics"}></Header>

      <Statistics clicks={clicks}></Statistics>

    </div>
  );
};

export default App;
