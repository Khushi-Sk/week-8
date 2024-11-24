import ClientComment from "@/components/ClientComment";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <div>
      <nav>
        <Link href={"/about"} >About</Link>
        <Link href={"/posts"}>Posts</Link>
      </nav>
      <h1>Welcome to my HomePage</h1>

      
    </div>
  );
}
