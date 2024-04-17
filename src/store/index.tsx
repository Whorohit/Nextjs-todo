'use client'
import { ReactNode, useState, createContext, useContext } from "react";

export type Todo = {
    id: string;
    text: string;
    complete: boolean;
    createAt: Date;

}
export type ToDoDta = {
    todos: Todo[];
    handleAddtodo: (text: string) => void;
    toggleTodoAscompleted: (id: string) => void;
    handleTodoDelete:(id:string)=>void

}
export const todocontext = createContext<ToDoDta | null>(null);
export function TodoProvider({ children }: { children: ReactNode }) {
    const [todos, setTodos] = useState<Todo[]>(
        ()=>{
            try{
                const newTodos = localStorage.getItem('todos') || "[]";
                return JSON.parse(newTodos) as Todo[]
                }catch (e) {
                    return []
                }
        })
    

    const handleAddtodo = (text: string): void => {
        setTodos((prev) => {
            const newTodos: Todo[] = [{
                id: Math.random().toString(),
                text,
                complete: false,
                createAt: new Date()
            }, ...prev];
            localStorage.setItem("todos",JSON.stringify(newTodos));
            return newTodos;
        });
       
    };
    const toggleTodoAscompleted = (id: string): void => {
        setTodos((prev) => {
            const newTodos: Todo[] = prev.map((todo) => {
                if (id === todo.id) {
                    return { ...todo, complete: !todo.complete }
                }
                return todo
            }
            )
            localStorage.setItem("todos",JSON.stringify(newTodos));
            return newTodos;
        });
    }
    const handleTodoDelete = (id: string): void => {
        setTodos((prev) => {
            const newTodos: Todo[] = prev.filter((todo) => {
                return  id !== todo.id
                    
                
              
            }
            )
            localStorage.setItem("todos",JSON.stringify(newTodos));
            return newTodos;
        });
        console.log(todos);
        
    }

    return (
        <todocontext.Provider value={{ todos, handleAddtodo, handleTodoDelete, toggleTodoAscompleted }}>
            {children}
        </todocontext.Provider>
    );
}
export function useTodos() {
    const todocontextvalue = useContext(todocontext)
    if (!todocontextvalue) {
        throw new Error('nnnnn');
    }
    return todocontextvalue;
}