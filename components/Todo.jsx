import React from "react";

const Todo = ({title,description,complete,id,mongoId,deleteFunction}) => {
  return (
    <>
      <tr className="border-b ">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-purple-700 whitespace-nowrap"
        >
          {id+1}
        </th>
        <td className="px-6 py-4">{title}</td>
        <td className="px-6 py-4">{description  }</td>
        <td className="px-6 py-4">{complete ? 'complete':'UnComplete'}</td>
        <td className="px-6 py-4 space-x-3 ">
          
          <button onClick={() => deleteFunction(mongoId)} className="bg-purple-500 px-12 py-3 hover:bg-purple-700 duration-300 transition-all text-white rounded-md">
            Delete
          </button>
          <button className="bg-green-500 px-12 py-3 hover:bg-green-700 duration-300 transition-all text-white rounded-md">
            Update
          </button>
        </td>
      </tr>
    </>
  );
};

export default Todo;
