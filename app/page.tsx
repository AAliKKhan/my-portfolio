import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-center"> 
        <div className="md:w-1/2 mb-6 md:mb-0 p-10">
          <h1 className="text-4xl text-violet-400 font-bold font-mono mb-4 mt-2">Muhammad Ali Adnan</h1>
          <p className="text-xl p-6 bg-gradient-to-r from-violet-100 to-violet-300 rounded-md shadow-lg font-serif border-4 border-violet-500">
            I&apos;m a web developer, and my aim is to craft dynamic, responsive websites that bring innovative ideas to life. I&apos;m also expanding my knowledge in cutting-edge technologies like Artificial Intelligence.
          </p>
        </div>

        <div className="relative w-[250px] h-[250px] ml-10 mt-4 md:mt-12">
          <Image 
            src="/yu.png"
            alt="Muhammad Ali Adnan"
            layout="fill"              
            objectFit="cover"         
            className="rounded-full shadow-2xl border-4 border-violet-400"
          />
        </div>
      </div>
      <div>
        <h1 className="text-4xl font-bold text-violet-900">............................................................................................................................</h1><br />

      </div>
    </div>
  );
}