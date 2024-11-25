import ClientComment from "@/components/ClientComment";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <div className="flex justify-center flex-col">
      <nav className="flex justify-around  text-lg bg-neutral-900 ">
        <Link className=" py-5 w-20 flex justify-center hover:text-black hover:bg-neutral-300 rounded-lg" href={"/about"} >About</Link>
        <Link className="py-5 w-20 flex justify-center hover:text-black hover:bg-neutral-300 rounded-lg" href={"/posts"}>Posts</Link>
      </nav>
      <h1 className="p-5 text-3xl flex justify-center mt-20">Welcome to my HomePage</h1>

      
    </div>
  );
}
