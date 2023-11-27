import { useState, useEffect } from "react";
import "./index.css";
export default function DateCard() {
  const [currentDate, setCurrentDate] = useState();

  function getFormattedDate() {
    const currentDate = new Date();
    let yesterday = new Date();
    yesterday.setDate(currentDate.getDate() - 1);
    let tomorrow = new Date();
    tomorrow.setDate(currentDate.getDate() + 1);
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    let currentFormate = currentDate.toDateString("en-US", options);

    let yesterdayFormate = yesterday.toDateString("en-US", options);

    let tomorrowFormate = tomorrow.toDateString("en-US", options);

    return { yesterdayFormate, tomorrowFormate, currentFormate };
  }

  useEffect(() => {
    setCurrentDate(getFormattedDate().currentFormate);
  }, []);

  return (
    <div className="date-section">
      <div className="date-detail">
        <img
          onClick={() => {
            setCurrentDate(getFormattedDate().yesterdayFormate);
          }}
          className="cursor"
          width="26"
          height="26"
          src="https://img.icons8.com/metro/26/long-arrow-left.png"
          alt="long-arrow-left"
        />

        <h5>{currentDate}</h5>
        <img
          onClick={() => {
            setCurrentDate(getFormattedDate().tomorrowFormate);
          }}
          className="cursor"
          width="26"
          height="26"
          src="https://img.icons8.com/metro/26/long-arrow-right.png"
          alt="long-arrow-right"
        />
      </div>
    </div>
  );
}
