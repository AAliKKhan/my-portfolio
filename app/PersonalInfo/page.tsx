

export default function PersonalInfo() {
  return (
    <div className="min-h-screen px-6 md:px-12 lg:px-20 py-9 ">



      <h1 className="text-4xl font-bold text-center p-5 drop-shadow-lg text-violet-600">
        About Me
      </h1>

      <div className="max-w-4xl mx-auto space-y-10 lg:space-y-12">

        <div className="shadow-lg rounded-lg p-6 md:p-8 lg:p-10 border border-gray-300">
          <h2 className="text-2xl font-bold text-violet-500 mb-4">Personal Information</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li className="text-violet-200">D.O.B: 9th June 2008</li>
            <li className="text-violet-200">Religion: Islam</li>
            <li className="text-violet-200">Languages: English & Urdu</li>
            <li className="text-violet-200">Nationality: Pakistani</li>
          </ul>
        </div>


        <div className="shadow-lg rounded-lg p-6 md:p-8 lg:p-10 border border-gray-300">
          <h2 className="text-2xl font-bold text-violet-500 mb-4">Education</h2>
          <ul className="list-disc pl-5 space-y-2">
          <li className="text-violet-200">Matriculation from St. Paul&rsquo;s English High School</li>
            <li className="text-violet-200">Intermediate from P.E.C.H.S Education Foundation Government College</li>
            <li className="text-violet-200">
              Enrolled in Governor Initiative for Artificial Intelligence, Web 3.0 & Metaverse
            </li>
          </ul>
        </div>
      </div>


     
    </div>
  );
}