'use client'
import { useTodos } from '@/store'
import React, { Suspense } from 'react'
import { useSearchParams } from 'next/navigation';
function TodoWithout() {
    const searchParams= useSearchParams();
    const todoFilter=searchParams.get('todos')
    const { todos,toggleTodoAscompleted,handleTodoDelete } = useTodos()
    let filterTodos = todos;
    if(todoFilter==='active')
    {
        filterTodos=filterTodos.filter((todo)=> !todo.complete)
    }
    if(todoFilter==='complete')
    {
        filterTodos=filterTodos.filter((todo)=> todo.complete)
    }
   

    return (
        <ul className=' w-full rounded-md      mx-auto py-2'>
            {filterTodos.map((todo) => {
                return (
                    <li  className={`flex   px-2 gap-2 md:gap-4  w-[90%] md:w-3/5 mx-auto  py-2  h-16  border-gray-400  border-b-[1px] justify-center items-center ${todo.complete?'bg-rose-100':" "} `} key={todo.id}>
                        <input className='w-4 md:w-8 h-4 accent-rose-500 ' type="checkbox" name="" id={`todo=${todo.id}`} checked={todo.complete}
                         onChange={()=>{
                            toggleTodoAscompleted(todo.id)
                         }} />
                        <label  className={`w-48 md:w-64 text-xs  md:text-sm ${todo.complete?"text-rose-900 line-through":""}`}   htmlFor={`todo-${todo.id}`}>{todo.text}</label>
                        <div className='w-10'>
                        {todo.complete && <button type='button'  className='bg-rose-500 py-1 hover:bg-rose-700  text-xs md:text-base    text-white px-2 rounded-sm' onClick={()=>{
                            handleTodoDelete(todo.id)

                        }}>Delete</button>}
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}


function   Todo() {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <TodoWithout />
      </Suspense>
    );
  }
  
  export default Todo;