import React from "react";

const RightCard = () => {
  return (
    <div className="h-full w-60 overflow-hidden relative  rounded-4xl">
      <img
        className="h-full w-full object-cover"
        src="https://images.unsplash.com/photo-1600275669439-14e40452d20b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <div className="absolute top-0 left-0 h-full w-full bg-yellow-400 p-8 flex flex-col justify-between">
        <h2 className="font-medium text-2xl bg-white rounded-full h-8 w-8 flex justify-center items-center">1</h2>

        <div>
          <p className="text-lg leading-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
            rerum.
          </p>

          <div>
            <button className="bg-blue-500 rounded-full text-white text-lg  px-5 py-1  ">Satisfied</button>
            <button>
              <i class="ri-arrow-right-line"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightCard;
