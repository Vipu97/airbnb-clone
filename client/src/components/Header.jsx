import { Link } from 'react-router-dom'
import { useUserContext } from '../context/UserContext'

function Header() {
  const { user } = useUserContext()

  return (
    <header className="flex items-center justify-between">
      {/* Logo section */}
      <Link to={'/'} href="" className="flex items-center gap-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 -rotate-90"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
          />
        </svg>
        <span className="font-bold text-xl hidden md:block">HomeStays</span>
      </Link>

      {/* Menus */}
      <div className="flex gap-2 border border-gray-300 rounded-full px-4 py-2 shadow-md shadow-gray-300">
        <div className="border-r-2 border-gray-300 pr-2 font-bold">
          Any where
        </div>
        <div className="border-r-2 border-gray-300 pr-2 font-bold">
          Any week
        </div>
        <div className="pr-2 font-bold">Add guests</div>
      </div>

      {/* User section */}
      <Link
        to={user && user.name ? '/account' : '/login'}
        className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2 overflow-hidden"
      >
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </span>
        <div className="bg-gray-500 text-white rounded-full border border-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 relative top-1"
          >
            <path
              fillRule="evenodd"
              d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        {user && user.name && <span>{user.name}</span>}
      </Link>
    </header>
  )
}

export default Header
