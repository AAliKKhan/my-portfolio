
import Link from "next/link";
export default function Header() {
  return (
    <div>
      <ul className="flex justify-center gap-4 p-4  shadow-md rounded-lg m-8 ">
        <li>
          <Link
            href="/"
            className="px-4 py-1.5 text-sm font-medium text-gray-700 rounded-md transition-all duration-300 bg-gradient-to-r from-violet-200 to-violet-400 hover:from-violet-300 hover:to-violet-500 shadow hover:shadow-lg"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/PersonalInfo"
            className="px-4 py-1.5 text-sm font-medium text-gray-700 rounded-md transition-all duration-300 bg-gradient-to-r from-violet-200 to-violet-400 hover:from-violet-300 hover:to-violet-500 shadow hover:shadow-lg"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/Skills"
            className="px-4 py-1.5 text-sm font-medium text-gray-700 rounded-md transition-all duration-300 bg-gradient-to-r from-violet-200 to-violet-400 hover:from-violet-300 hover:to-violet-500 shadow hover:shadow-lg"
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            href="/projects"
            className="px-4 py-1.5 text-sm font-medium text-gray-700 rounded-md transition-all duration-300 bg-gradient-to-r from-violet-200 to-violet-400 hover:from-violet-300 hover:to-violet-500 shadow hover:shadow-lg"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            href="/Contact"
            className="px-4 py-1.5 text-sm font-medium text-gray-700 rounded-md transition-all duration-300 bg-gradient-to-r from-violet-200 to-violet-400 hover:from-violet-300 hover:to-violet-500 shadow hover:shadow-lg"
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );}