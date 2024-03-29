import { FiUser } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const isAdminRoute = location.pathname.includes("/admin");
  const login = true;

  // const [login, setLogin] = useState(false);

  // const openSidebar = () => {
  //   document.querySelector(".menu")?.classList.toggle("hidden");
  // };
  const openAccountMenu = () => {
    document.querySelector(".account_menu")?.classList.toggle("hidden");
  };

  const openAccountMenuDesktop = () => {
    document.querySelector(".accmenu")?.classList.toggle("hidden");
  };

  if (isAdminRoute) {
    return null;
  }

  const navLinks = [
    {
      name: "T Shirts",
      path: "/tshirts",
    },
    {
      name: "Hoodies",
      path: "/hoodies",
    },
    {
      name: "Stickers and Posters",
      path: "/stickers",
    },
    {
      name: "Custom",
      path: "/contact",
    },
  ];


  const toggleSideabar = () => {
    document.querySelector(".slide-over")?.classList.toggle("hidden");
  };

  return (
    <>
      <section className="border-b">
        <header className="bg-white">
          <div className="px-4 mx-auto sm:px-6 lg:px-8 xl:px-12">
            <div className="flex items-center justify-between h-16 lg:h-[72px]">
              <div className="flex items-center flex-shrink-0">
                <Link to={"/"} className="inline-flex font-bold text-2xl">
                  DevStore.
                </Link>
              </div>

              <div className="hidden lg:flex lg:justify-start lg:ml-16 lg:space-x-8 xl:space-x-14">
                {navLinks.map((link) => (
                  <Link
                    to={link.path}
                    title=""
                    className="text-base font-medium text-gray-700 transition-all duration-200 rounded hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                  >
                    {" "}
                    {link.name}{" "}
                  </Link>
                ))}
              </div>

              <div className="flex items-center justify-end ml-auto">
                <div className="hidden lg:flex lg:items-center lg:space-x-10">
                  {login ? (
                    <>
                      <button
                        type="button"
                        className="text-xl absolute text-black right-24"
                        onClick={openAccountMenuDesktop}
                      >
                        <FiUser />
                      </button>

                      <div className="z-10 relative top-16 right-22 accmenu hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
                        <ul className="py-2 text-sm text-gray-700">
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-300"
                            >
                              aryans12345678
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-300"
                            >
                              Sign Out
                            </a>
                          </li>
                        </ul>
                      </div>
                    </>
                  ) : (
                    <a
                      href="#"
                      title=""
                      className="text-base font-medium text-gray-900 transition-all duration-200 rounded hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                    >
                      {" "}
                      Login{" "}
                    </a>
                  )}
                </div>

                <div className="flex items-center justify-end space-x-5">
                  <button
                    type="button"
                    className="p-2 -m-2 text-gray-900 transition-all duration-200 lg:hidden hover:text-gray-700"
                    onClick={toggleSideabar}
                  >
                    <svg
                      className="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>

                  <button
                    type="button"
                    className="relative p-2 text-gray-900 transition-all duration-200 hover:text-gray-700"
                    onClick={toggleSideabar}
                  >
                    <svg
                      className="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      />
                    </svg>

                    <span className="absolute top-0 right-0 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-indigo-600 rounded-full">
                      {" "}
                      3{" "}
                    </span>
                  </button>
                </div>
               {/* sidebar  */}

              </div>
            </div>
          </div>

          <div className="w-full hidden menu" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 rtl:space-x-reverse">
              {login ? (
                <li>
                  <a
                    className="block py-2 px-3 text-white bg-blue-700 rounded"
                    aria-current="page"
                    onClick={openAccountMenu}
                  >
                    <FiUser />
                  </a>
                </li>
              ) : (
                <li>
                  <a
                    className="block py-2 px-3 text-white bg-blue-700 rounded"
                    aria-current="page"
                  >
                    Login
                  </a>
                </li>
              )}

              <div className="p-4 account_menu hidden">
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 rounded"
                    aria-current="page"
                  >
                    aryans12345678
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 mt-2 px-3 rounded"
                    aria-current="page"
                  >
                    Sign Out
                  </a>
                </li>
              </div>

              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </header>
      </section>
    </>
  );
};
export default Navbar;
