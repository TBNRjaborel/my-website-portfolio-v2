import { Bars3Icon } from "@heroicons/react/24/outline";

function Navbar() {
  return (
    <div className="flex fixed bg-[#030420] w-full z-10 justify-between outline-1 items-center px-10 md:px-30 py-8">
      <a href="#" className="hover:text-amber-300">
        Gabriel Magdugo
      </a>
      <div>
        <ul className="hidden md:flex gap-10 [&>li:hover]:text-amber-300">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Experience</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
        </ul>
      </div>
      <button className="md:hidden">
        <Bars3Icon className="h-6 w-6 " />
      </button>
    </div>
  );
}

export default Navbar;
