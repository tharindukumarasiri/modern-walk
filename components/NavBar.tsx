import Link from "next/link";

const NavBar = () => {
  return (
    <div className="border-b-1 bg-lightGray fixed top-0 z-30 flex w-screen justify-center py-8 shadow-md">
      <Link href="/">
        <h1>Modern Walk</h1>
      </Link>
    </div>
  );
};

export default NavBar;
