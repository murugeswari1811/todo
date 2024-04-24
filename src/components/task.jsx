import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useState } from "react"; // Import useState hook
import { useSelector, useDispatch } from "react-redux";
import { setTodos } from "../slice";

export default function Task() {
    const todos = useSelector((state) => state.todo.todos);
    const dispatch = useDispatch();

    const [editIndex, setEditIndex] = useState(null); 
    const [editedTodo, setEditedTodo] = useState(""); 

    const deleteTodo = (deleteItem) => {
        let todoos = todos.filter((todo) => todo !== deleteItem);
        dispatch(setTodos(todoos));
    };

    const editTodo = (index) => {
        setEditIndex(index);
        setEditedTodo(todos[index]);
    };

    const handleEditChange = (event) => {
        setEditedTodo(event.target.value);
    };

    const saveEdit = () => {
        const updatedTodos = [...todos];
        updatedTodos[editIndex] = editedTodo;
        dispatch(setTodos(updatedTodos));
        setEditIndex(null);
    };

    return (
        <>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">Tasks</th>
                        <th scope="col" className="px-6 py-3">Edit</th>
                        <th scope="col" className="px-6 py-3">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((todo, index) => (
                        <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <td className="px-6 py-4">
                                {editIndex === index ? (
                                    <input
                                        class="px-1 py-1"
                                        type="text"
                                        value={editedTodo}
                                        onChange={handleEditChange}
                                    />
                                ) : (
                                    todo
                                )}
                            </td>
                            <td className="px-6 py-4">
                                {editIndex === index ? (
                                    <button onClick={saveEdit}>Save</button>
                                ) : (
                                    <FaEdit onClick={() => editTodo(index)} />
                                )}
                            </td>
                            <td className="px-6 py-4">
                                <MdDelete onClick={() => deleteTodo(todo)} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
