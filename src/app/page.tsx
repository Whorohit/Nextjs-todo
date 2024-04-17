import Image from "next/image";
import Addtodo from "./components/Addtodo";
import Todo from "./components/Todo";
import Navbar from "./components/Navbar";
import { TbNotes } from "react-icons/tb";
export default function Home() {
  return (
    <main className="min-h-screen py-24">
   <h1 className="text-center font-sans  w-3/4 md:w-1/3  mx-auto  border-b-[1px] pb-2  border-b-green-600 tracking-wider text-sm md:text-2xl font-bold  flex justify-center gap-4 items-center "> <TbNotes  color="green"/> NextJs Todo + TypeScript <TbNotes color="green" /></h1> 
   <Navbar />
   <Addtodo/>
   <Todo/>
    </main>
  );
}
