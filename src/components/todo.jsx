import { useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import { GrPrevious } from "react-icons/gr";
import Task from "./task";
import { useSelector,useDispatch } from "react-redux";
import { setValue ,setTodos} from "../slice";
import { useNavigate } from "react-router";


export default function Todo(){
    const dispatch=useDispatch()
    const value=useSelector((state)=>state.todo.value)
    const todos=useSelector((state)=>state.todo.todos)
    const navigate=useNavigate()
    const addnew=value.task
    console.log(value)
    console.log(todos)
    const addTodo = () => {
        dispatch(setTodos([...todos, addnew]));
        dispatch(setValue({...value, task: ''})); 

    };
    
    return(
        <>
        <div class="h-screen w-screen">
            <div class="bg-red-500 w-full h-full p-28 flex items-center justify-center">
            <button class="mr-16 text-2xl" type="button" onClick={()=>navigate(-1)}><GrPrevious /></button>
            <div class="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-gradient-to-tr from-black to-black bg-clip-border p-12 text-white shadow-md shadow-black">
                <div class="relative m-0 mb-8 overflow-hidden rounded-none border-b border-white/10 bg-transparent bg-clip-border pb-8 text-center text-gray-700 shadow-none">
                    <h1 class="flex justify-center gap-1 font-sans text-2xl font-normal tracking-normal text-white antialiased">GET THINGS DONE ...!</h1>
                            <div class="flex rounded-full bg-[#0d1829] px-2 w-full max-w-[600px]">
                                   <form>
                                    <input type="text" value={addnew} class="relative mt-4 rounded-full w-full bg-red-500 flex bg-red-500 p-2 pl-8 pr-8 text-white outline-0" placeholder="What is the task today..." onChange={(e)=>dispatch(setValue({...value,task:e.target.value}))}/>
                                        <button type="button" class="absolute top-12 text-red-500 text-4xl ml-32 " onClick={()=>addTodo()}>
                                        <IoMdAddCircle />
                                        </button>
                                    </form>
                            </div>
                            <div class="mt-5 flex align-items-center justify-content-center">
                            </div>
                            <Task/>

                   
                   
                   
                   
                   
                   
                   
                   
                    {/* <p class="block font-sans text-sm font-normal uppercase leading-normal text-white antialiased">
                        standard
                    </p>
                <h1 class="mt-6 flex justify-center gap-1 font-sans text-7xl font-normal tracking-normal text-white antialiased">
                <span class="mt-2 text-4xl">$</span>29
                <span class="self-end text-4xl">/month</span>
                    </h1>
             </div>
            <div class="p-0">
                <ul class="flex flex-col gap-4">
                <li class="flex items-center gap-4">
                <span class="rounded-full border border-white/20 bg-white/20 p-1">
               
        </span>
        <p class="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
          5 team members
        </p>
      </li>
      <li class="flex items-center gap-4">
        <span class="rounded-full border border-white/20 bg-white/20 p-1">
         
        </span>
        <p class="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
          200+ components
        </p>
      </li>
      <li class="flex items-center gap-4">
        <span class="rounded-full border border-white/20 bg-white/20 p-1">
          
        </span>
        <p class="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
          40+ built-in pages
        </p>
      </li>
      <li class="flex items-center gap-4">
        <span class="rounded-full border border-white/20 bg-white/20 p-1">
          
        </span>
        <p class="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
          1 year free updates
        </p>
      </li>
      <li class="flex items-center gap-4">
       
      </li>
    </ul>
  </div>
  <div class="mt-12 p-0">
    <button
      class="block w-full select-none rounded-lg bg-white py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-pink-500 shadow-md shadow-blue-gray-500/10 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-gray-500/20 focus:scale-[1.02] focus:opacity-[0.85] focus:shadow-none active:scale-100 active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
      data-ripple-dark="true"
    >
      Buy Now
    </button> */}
  </div>
</div>
    </div>
            </div>
         </>
    )
}