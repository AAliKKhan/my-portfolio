
import Link from "next/link";

export default function Header() {
  const linkClasses =
    "px-4 py-1.5 text-sm font-medium text-gray-700 rounded-md transition-all duration-300 bg-gradient-to-r from-violet-200 to-violet-400 hover:from-violet-300 hover:to-violet-500 shadow hover:shadow-lg";

  return (
    <div>
      <ul className="flex justify-center gap-4 p-4 shadow-md rounded-lg m-8">
        <li>
          <Link href="/" className={linkClasses} aria-label="Go to Home page">
            Home
          </Link>
        </li>
        <li>
          <Link href="/PersonalInfo" className={linkClasses} aria-label="Go to About page">
            About
          </Link>
        </li>
        <li>
          <Link href="/Skills" className={linkClasses} aria-label="Go to Skills page">
            Skills
          </Link>
        </li>
        <li>
          <Link href="/projects" className={linkClasses} aria-label="Go to Projects page">
            Projects
          </Link>
        </li>
        <li>
          <Link href="/Contact" className={linkClasses} aria-label="Go to Contact page">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}