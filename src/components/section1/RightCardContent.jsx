import React from 'react'

const RightContent = (props) => {
  return (
     <div className="absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between">
        <h2 className="font-medium text-2xl bg-white rounded-full h-8 w-8 flex justify-center items-center">{props.id+1}</h2>

        <div>
          <p className="text-lg leading-relaxed text-white mb-9">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum.
          </p>

          <div className="flex justify-between">
            <button className="bg-blue-500 rounded-full text-white   px-6 py-1  ">{props.tag}</button>
            <button className="bg-blue-500 rounded-full text-white   px-2 py-1 ">
              <i className="ri-arrow-right-line"></i>
            </button>
          </div>
        </div>
      </div>
        )
}

export default RightContent