import Link from "next/link";

export default function Footer(){
    return(
        
            <footer className=" text-black  text-center items-baseline"style={{
                background: '  ',
              }}>
              <p className="text-violet-200">© 2024 M.Ali Adnan. All Rights Reserved.</p>
              <div className="flex justify-center space-x-4 mt-2">
                <a
                  href="https://www.linkedin.com/in/m-ali-adnan-48035a2b8/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-violet-600 text-violet-200"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/AAliKKhan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-violet-600 text-violet-200"
                >
                  GitHub
                </a>
                <a
                  href="https://vercel.com/ali-adnans-projects"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-violet-600 text-violet-200"
                >
                  Vercel
                </a>
              </div>
            </footer>
          
    )
}