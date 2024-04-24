import Todo from "./todo";
import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import { setTodos } from "../slice";
import { useSelector,useDispatch } from "react-redux";
uuidv4();

export default function Todomain(){
    const dispatch=useDispatch()
    
    return(
        <>
            <Todo/>
        </>
    )
}