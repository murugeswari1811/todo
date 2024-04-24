import { useNavigate } from "react-router"
import { FaArrowRight } from "react-icons/fa6";


export default function Home(){
    const navigate=useNavigate()
    return(
        <>
<div class="h-screen w-screen">
  <div class="bg-red-500 w-full h-full p-28 flex items-center justify-center">
    <div class="max-w-3xl flex h-full m-4 md:m-6 bg-black">
      <div class="relative group sm:w-full md:w-1/2 hover:bg-red-500 border-t border-l border-b border-r md:border-r-0 bg-opacity-5 transition-all duration-300">
     

      <h1 class="pl-4 md:pl-8 mt-6 md:mt-8 text-2xl text-white font-serif transform group-hover:translate-x-6 duration-300 uppercase leading-snug">Task Track..!</h1>
      <div class="absolute z-50 bottom-32 md:bottom-10 right-0 transform translate-x-12 flex items-center justify-center w-20 h-20 rounded-full bg-white group-hover:bg-black text-indigo-800 group-hover:text-white font-semibold cursor-pointer group-hover:scale-110 duration-300 select-none" onClick={()=>navigate("/todomain")}>Go!</div>
      <span class="absolute bottom-12 p-4 md:pl-8 text-white text-2xl">Enter Your tasks here<FaArrowRight /></span>
      </div>
    <div class="md:w-1/2 hidden md:block bg-indigo-700">
      <img src="https://jasonlovefiles.com/wp-content/uploads/2022/04/Geeking-out-on-my-Todo-list.jpg" alt="mobile payment" class="h-full" />
    </div>
  </div>
  </div>
  </div>
        </>
    )
}