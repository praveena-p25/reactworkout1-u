import react, { useState } from "react";

const Addbuttononclick = () => {
  const [addtext, setAddtext] = useState("");
  const [showbutton, setshowbutton] = useState();

  const buttonHandler = () => {
    setshowbutton(true);
  };

  const addHandler = (event) => {
    setAddtext(event.target.value);
    console.log(addtext);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const getdata = {
      text: addtext,
    };
    console.log(getdata);
  };
  return (
    <form onSubmit={submitHandler}>
      <div>
        {!showbutton && <button onClick={buttonHandler}>OPEN BUTTON</button>}
        <input type="text" value={addtext} onChange={addHandler} />
      </div>
      <div>{showbutton && <button>Add Text</button>}</div>
    </form>
  );
};

export default Addbuttononclick;
