'use client'
import { useTodos } from '@/store'
import React, { FormEvent, useState } from 'react'
function Addtodo() {
    const {handleAddtodo}=useTodos();
    const [todo, setTodo] = useState<string>('')
    const handleFormSbmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        handleAddtodo(todo)
        setTodo("")
    }
    return (
        <form onSubmit={handleFormSbmit} className='flex justify-center gap-4 my-4 '>
            <input type="text" name="" id="" autoComplete='off' className='outline-none' placeholder='Enter  the Text' value={todo}  disabled={todo.length===50}
                onChange={(e) => {
                    setTodo(e.target.value)
                }} />
            <button className='bg-green-600 px-4 rounded-sm text-white font-mono font-bold' disabled={todo.length===0}>ADD</button>
        </form>
    )
}

export default Addtodo