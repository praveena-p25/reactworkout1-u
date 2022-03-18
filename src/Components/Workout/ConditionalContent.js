import React, { useState } from "react";
import Funnel from "../Assets/funnel-fill.svg";
import Filtering from "./Filtering";

const ConditionalContent = (props) => {
  const [filter, setfilter] = useState();
  const Handler = () => {
    setfilter((prev) => !prev);
  };
  return (
    <form>
      <div>
        <img src={Funnel} alt="filter" onClick={Handler} />
        {filter && <p>funnel clicked</p>}
        {props.dummy_data.map((expense) => (
          <Filtering title={expense.title} value={expense.value} />
        ))}
      </div>
    </form>
  );
};

export default ConditionalContent;
