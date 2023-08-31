import Counter from "@/components/Counter";
import Image from "next/image";

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center p-24'>
      <h1 className='text-bold text-lg'>Counter App with Redux</h1>
      <Counter />
    </main>
  );
}
