function Navbar() {
  return (
    <div className="flex fixed w-full justify-between items-center px-30 py-8">
      <a href="#">Gabriel Magdugo</a>
      <div>
        <ul className="flex gap-10 [&>li:hover]:text-amber-300">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Experience</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Resume</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
