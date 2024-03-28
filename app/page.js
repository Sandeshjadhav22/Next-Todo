'use client'
import Todo from "@/components/Todo";

import { useState } from "react";
import { toast } from "react-toastify";

export default function Home() {
    const [todo, setTodo] = useState({
      title:"",
      description:"",
    })

    const setTitle = (e) => setTodo({
      ...todo, 
      ['title']: e.target.value
    })
    const reset = (e) => setTodo({
      title:"",
      description:"",
    })
    const SetDescription = (e) => setTodo({
      ...todo, 
      ['description']: e.target.value
    })

    const onSubmitHandler = async(e) => {
      e.preventDefault()
      try {
        //APi code
        toast.success('Todo created')
        reset()
      } catch (error) {
        toast.error("Error");
      }
    }
  return (
    <>
      <section className="w-full md:w-[70%] py-24 px-2 mx-auto">
        <form onSubmit={onSubmitHandler}>
          <div className="mb-3">
            <input
            value={todo.title}
            onChange={setTitle}
              type="text"
              className="w-full px-3 py-2 h-10 outline-none border-2 border-purple-500"
              placeholder="Enter Title"
            />
          </div>
          <div className="mb-3">
            <textarea
             value={todo.description}
             onChange={SetDescription}
              className="w-full px-3 py-2  outline-none border-2 border-purple-500"
              placeholder="Enter Description"
              rows={8}
              cols={30}
            />
          </div>
          <div className="mb-3">
            <button type="submit" className="bg-purple-500 px-12 py-3 hover:bg-purple-700 duration-300 transition-all text-white rounded-md">
              Add Todo
            </button>
          </div>
        </form>

        <div className="py-10">
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase">
                <tr>
                  <th scope="col" className="px-6 py-3">
                  Id
                  </th>
                  <th scope="col" className="px-6 py-3">
                   Title
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Discription
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
               {
                Array(10).fill(null).map((c,i) => {
                  return  <Todo key={i}/>
                })
               }
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
