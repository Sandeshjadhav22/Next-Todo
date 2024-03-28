import React from "react";

const Todo = () => {
  return (
    <>
      <tr className="border-b ">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-purple-700 whitespace-nowrap"
        >
          1
        </th>
        <td className="px-6 py-4">Learn java</td>
        <td className="px-6 py-4">today task introduction of java</td>
        <td className="px-6 py-4">Complete</td>
        <td className="px-6 py-4 space-x-3 ">
          
          <button className="bg-purple-500 px-12 py-3 hover:bg-purple-700 duration-300 transition-all text-white rounded-md">
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
