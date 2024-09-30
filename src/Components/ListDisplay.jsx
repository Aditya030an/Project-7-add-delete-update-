import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDeleteIndex, setShowForm, setShowUpdate, setUpdateIndex } from "../utils/Stores/HealthDataSlice";

const ListDisplay = () => {
  const dispatch = useDispatch();
  const handleShowForm = () => {
    dispatch(setShowForm(true));
  };
  const [list, setList] = useState([]);
  const listfromStore = useSelector((store) => store.healthCareData.items);
  useEffect(() => {
    setList(listfromStore);
  }, [listfromStore]);

  // console.log("inside list data", list);
  const handleDelete = (index)=>{
    console.log("delete index" , listfromStore[index]);
    dispatch(setDeleteIndex(index));
  }
  const handleUpdate = (index)=>{
    console.log("handle update")
    dispatch(setUpdateIndex(index));
    dispatch(setShowForm(true));
    dispatch(setShowUpdate(true))
  }
  return (
    <div className=" p-7">
      <div className="border-b-2 border-gray-400 flex justify-between p-4">
        <h1 className="text-2xl lg:text-5xl font-bold tracking-wide">
          All <span className="text-2xl lg:text-5xl text-emerald-500">Services</span>
        </h1>
        <button
          onClick={handleShowForm}
          className="bg-gray-900 hover:bg-gray-800 text-white  sm:text-xl font-medium p-1 sm:p-2 rounded-lg"
        >
          ADD DETAILS
        </button>
      </div>
      <div className=" w-full flex flex-col items-center gap-7 py-12">
        {/* map */}
        {list?.length > 0 ? (
          list?.map((item, index) => {
            return (
              <div className="border-2 border-slate-200 lg:h-[200px] shadow-md shadow-slate-600 w-10/12 flex flex-col justify-evenly gap-3 p-3 rounded-md" key={index}>
                <section className="flex items-center justify-between">
                  <h1 className="text-xl font-medium ">{item.healthCareName}</h1>
                  <p className="text-2xl md:text-3xl font-medium md:font-bold text-slate-600">{item.price} $</p>
                </section>
                <section className=" w-full ">
                  <p className="text-2xl font-semibold text-gray-600 md:mx-4">
                {item.discription}
                  </p>
                </section>
                <section className=" flex items-center justify-evenly md:justify-end  md:gap-7">
                  <button onClick={()=>{handleUpdate(index)}} className="bg-gray-900 hover:bg-gray-800 text-white md:text-xl font-medium p-2 rounded-lg">
                    UPDATE
                  </button>
                  <button onClick={()=>{handleDelete(index)}} className="bg-gray-900 hover:bg-gray-800 text-white md:text-xl font-medium p-2 rounded-lg">
                    DELETE
                  </button>
                </section>
              </div>
            );
          })
        ) : (
          // <div className="border-2 border-slate-200 h-[200px] shadow-md shadow-slate-600 w-10/12 flex   p-3 rounded-md bg-slate-900 items-center justify-center">
          //  <h1 className="text-5xl font-bold text-slate-600 tracking-wide">Add The List</h1>
          // </div>
          null
        )}
      </div>
    </div>
  );
};

export default ListDisplay;
