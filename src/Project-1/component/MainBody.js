import { useState } from "react";

const MainBody = () => {
  const inputInitialValues = {
    name: "",
    DOB: "",
  };
  const [inputValue, setInputValue] = useState(inputInitialValues);

  updateInput = (event) => {
    setInputValue((prev) => {
      return {
        ...prev,
        [event.target.name]: [event.target.value],
      };
    });
  };

  return (
    <main className="cc min-h-[80vh] flex flex-col">
      <h3 className="text-4xl uppercase font-bold text-slate-600 text-center my-8">
        {inputValue.name ? inputValue.name : "Enter your name below"}
      </h3>
      <p className="text-4xl uppercase font-bold text-slate-600 text-center mb-8">
        {inputValue.DOB ? inputValue.DOB : "Give your DOB below"}
      </p>
      <p>
        In this project mainly i concentration state hook.. i created one state
        hook with two property one for name and another for DOB when ever data
        enter in input filed using onChange function state value will update
        <br />
        <br />
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam quisquam
        error, ab facere itaque cupiditate laboriosam reiciendis repudiandae
        modi tempora recusandae ducimus, atque vero, id magni exercitationem
        enim ullam esse! Cupiditate facere vitae sed beatae ullam,
        exercitationem sint illum id obcaecati cumque. Ut nam rerum expedita
        animi id voluptatem impedit.
      </p>
      <div className=" mt-auto text-center space-x-8">
        <input
          className=" bg-gray-300 px-4 py-1 rounded"
          type="date"
          name="DOB"
          onChange={updateInput}
          value={inputValue.DOB}
        />
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          className=" bg-gray-300 px-4 py-1 rounded"
          onChange={updateInput}
          value={inputValue.name}
        />
      </div>
      <button
        className=" bg-gray-300 px-4 py-1 rounded mx-auto mt-4"
        onClick={() => {
          setInputValue(inputInitialValues);
        }}
      >
        Clear
      </button>
    </main>
  );
};

export default MainBody;
