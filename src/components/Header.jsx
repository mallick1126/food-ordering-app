export const Header = () => {
  return (
    <nav id="header" className="bg-black text-white">
      <div className="w-full container mx-auto flex flex-wrap items-center justify-content-between mt-0 py-2">
        <div className="logo-wrapper flex pl-4 ml-10 items-center">
          <img src={"/"} alt="logo" />
        </div>
        <div className="logo-menu-wrapper flex items-center justify-between space-x-10">
          <div>Home</div>
          <div>About</div>
        </div>
        <div className="flex items-center justify-center space-x-4">
          <div>Cart</div>
          <div>Login</div>
          <div>Signup</div>
        </div>
      </div>
    </nav>
  );
};
