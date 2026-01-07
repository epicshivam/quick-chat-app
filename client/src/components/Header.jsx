import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector(state => state.userReducer.user);

  if (!user) return null;

  function getFullName() {
    return `${user.firstName} ${user.lastName}`;
  }

  function getInitial() {
    return (
      user.firstName[0].toUpperCase() +
      user.lastName[0].toUpperCase()
    );
  }

  return (
    <header className="h-12 w-full bg-zinc-500 flex justify-between items-center px-5">
      <div className="flex items-center gap-2 text-xl font-bold">
        <svg
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -960 960 960"
          fill="currentColor"
        >
          <path d="M80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Z" />
        </svg>
        <span className="text-zinc-200 font-semibold">
          Quick Chat App
        </span>
      </div>

      <div className="flex items-center gap-2 text-xl font-bold text-zinc-100">
        <span>{getFullName()}</span>
        <span className="bg-zinc-700 px-2 py-1 rounded-full">
          {getInitial()}
        </span>
      </div>
    </header>
  );
};

export default Header;
