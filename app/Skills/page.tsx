export default function Skills() {
  return (
    <div className="min-h-screen px-6 md:px-12 lg:px-20 py-9 bg-gradient-to-r from-lue-400 to-purple-400">
      <h1 className="text-4xl font-bold text-center py-5 drop-shadow-lg text-violet-600">Skills</h1>

      <div className="max-w-4xl mx-auto space-y-10 lg:space-y-12">
       
        <div className="shadow-lg rounded-lg p-6 md:p-8 lg:p-10 border border-gray-300">
          <h2 className="text-2xl font-bold text-violet-500 mb-4">Languages</h2>
          <ol className="list-disc pl-5 space-y-2">
            <li className="text-violet-200">HTML</li>
            <li className="text-violet-200">CSS</li>
            <li className="text-violet-200">JavaScript</li>
            <li className="text-violet-200">TypeScript</li>
            <li className="text-violet-200">Python</li>
          </ol>
        </div>

      
        <div className="shadow-lg rounded-lg p-6 md:p-8 lg:p-10 border border-gray-300">
          <h2 className="text-2xl font-bold text-violet-500 mb-4">Frameworks/Libraries</h2>
          <ol className="list-disc pl-5 space-y-2">
            <li className="text-violet-200">React</li>
            <li className="text-violet-200">Next.js</li>
            <li className="text-violet-200">Tailwind</li>
            <li className="text-violet-200">Bootstrap</li>
          </ol>
        </div>


        <div className="shadow-lg rounded-lg p-6 md:p-8 lg:p-10 border border-gray-300">
          <h2 className="text-2xl font-bold text-violet-500 mb-4">Designing Tools</h2>
          <ol className="list-disc pl-5 space-y-2">
            <li className="text-violet-200">Canva</li>
          </ol>
        </div>
      </div>
    </div>
  );
}