export default function Career() {
  return (
    <div className="min-h-screen px-6 md:px-12 lg:px-20 py-9 bg-gradient-to-r from-ble-300 to-purple-300">
      <h1 className="text-4xl font-bold text-center py-5 drop-shadow-lg text-violet-600 mb-8">Projects</h1>
      
      <div className="space-y-8 max-w-4xl mx-auto">

        <div className="shadow-lg rounded-lg p-6 md:p-8 lg:p-10 border border-gray-300">
          <a
            href="https://walk2-burn.vercel.app/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <h2 className="text-2xl font-semibold text-violet-500 hover:underline">
              Walk2Burn
            </h2>
          </a>
          <h3 className="text-lg font-medium mt-3 text-violet-400">Description</h3>
          <p className="text-violet-200">
            Walk2Burn is a dynamic web application that helps users calculate the calories burned based on the number of steps walked.
          </p>
        </div>

 
        <div className="shadow-lg rounded-lg p-6 md:p-8 lg:p-10 border border-gray-300">
          <a
            href="https://1-rm-calculator.vercel.app/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <h2 className="text-2xl font-semibold text-violet-500 hover:underline">
              1RM Calculator
            </h2>
          </a>
          <h3 className="text-lg font-medium mt-3 text-violet-400">Description</h3>
          <p className="text-violet-200">
            The One Rep Max (1RM) Calculator is a user-friendly web application designed to help fitness enthusiasts determine their maximum strength for various lifts.
          </p>
        </div>


        <div className="shadow-lg rounded-lg p-6 md:p-8 lg:p-10 border border-gray-300">
          <a
            href="https://milestone-5-hackathon.vercel.app/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <h2 className="text-2xl font-semibold text-violet-500 hover:underline">
              Dynamic Resume Builder
            </h2>
          </a>
          <h3 className="text-lg font-medium mt-3 text-violet-400">Description</h3>
          <p className="text-violet-200">
            The Dynamic Resume Builder is an innovative web application that allows users to create personalized resumes effortlessly.
          </p>
        </div>
      </div>
    </div>
  );
}