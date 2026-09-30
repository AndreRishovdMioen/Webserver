import Nav from "./Nav.tsx";

const Header = () => {
  return (
    <header className="bg-gray-600 sticky top-0 z-[1] mx-60  flex flex-wrap items-center justify-between border-b bg-background p-[2em] font-bold uppercase text-text-primary border-gray-800">
      <div className="bg-gray-700 p-2 ">
        <h1>André Rishovd Miøen</h1>
      </div>
      <Nav />
    </header>
  );
};

export default Header;
