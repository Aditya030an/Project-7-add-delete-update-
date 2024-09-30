import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addHealthCareData,
  setShowForm,
  setShowUpdate,
} from "../utils/Stores/HealthDataSlice";

const Form = () => {
  const dispatch = useDispatch();
  const items = useSelector((store) => store.healthCareData.items);
  const index = useSelector((store) => store.healthCareData.updateIndex);
  const showUpdate = useSelector((store) => store.healthCareData.showUpdate);
  const data = items[index];

  const [healthCareName, setHealthCareName] = useState("");
  const [discription, setDiscription] = useState("");
  const [price, setPrice] = useState("");
  const [error, setError] = useState(false);

  // Use useEffect to handle the state update when 'showUpdate' is true
  useEffect(() => {
    if (showUpdate && data) {
      setHealthCareName(data.healthCareName);
      setDiscription(data.discription);
      setPrice(data.price);
    }
  }, [showUpdate, data]);

  const handleForm = (e) => {
    e.preventDefault();

    // Get form data
    const formData = {
      healthCareName,
      discription,
      price,
    };

    if (!healthCareName || !discription || !price) {
      setError(true);
      return;
    }

    // Dispatch the action to add healthcare data
    dispatch(addHealthCareData(formData));

    // Reset the form fields after submission
    setHealthCareName("");
    setDiscription("");
    setPrice("");

    // Hide form and reset update mode after a short delay
    setTimeout(() => {
      dispatch(setShowForm(false));
      dispatch(setShowUpdate(false));
    }, 100);
  };

  return (
    <div className=" w-full h-screen flex items-center justify-center">
      <div className=" w-full md:w-8/12 h-full md:h-[540px] flex flex-col gap-5 md:gap-3 xl:gap-10  md:p-5 rounded-md shadow-lg shadow-gray-600 bg-white">
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold">
          {showUpdate ? "Update" : "Add"}{" "}
          <span className="text-emerald-500">Items</span>
        </h1>
        <form onSubmit={handleForm} className="flex flex-wrap gap-6 md:gap-3">
          <div className=" w-full flex flex-col gap-5">
            <div className=" xl:w-[500px] flex flex-col gap-3">
              <h2 className="text-xl">Healthcare Name</h2>
              <input
                type="text"
                placeholder="Enter Healthcare Name"
                name="healthCareName"
                value={healthCareName}
                onChange={(e) => setHealthCareName(e.target.value)}
                className="xl:ml-4 w-full text-[23px] font-semibold text-emerald-500 p-2 outline-none border-2 border-emerald-300 rounded-md"
              />
            </div>
            <div className="w-11/12 flex flex-col gap-3">
              <h2 className="text-xl">Description</h2>
              <textarea
                placeholder="Enter Description"
                name="discription"
                value={discription}
                onChange={(e) => setDiscription(e.target.value)}
                className="md:ml-4 resize-none w-full text-[23px] font-semibold text-emerald-700 p-2 outline-none border-2 border-emerald-300 rounded-md"
              />
            </div>
            <div className="xl:w-[500px] flex flex-col gap-3">
              <h2 className="text-xl">Enter Price</h2>
              <input
                type="number"
                placeholder="Price"
                name="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="xl:ml-4 w-full text-[23px] font-semibold text-emerald-500 p-2 outline-none border-2 border-emerald-300 rounded-md"
              />
            </div>
          </div>
          <div className="w-full ">
            {error && <div className="text-red-500 float-left">Fill details Properly</div>}
            <button
              type="submit"
              className="float-right bg-gray-900 text-white text-xl font-medium p-2 rounded-lg"
            >
              {showUpdate ? "UPDATE NOW" : "SUBMIT"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
