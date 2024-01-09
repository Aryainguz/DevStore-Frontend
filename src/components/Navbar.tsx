import { useState } from "react";

const Navbar = () => {
  const [login, setLogin] = useState(false);

  const openSidebar = () => {
    document.querySelector(".menu")?.classList.toggle("hidden");
  };
  const openAccountMenu = () => {
    document.querySelector(".account_menu")?.classList.toggle("hidden");
  };
  return (
    <section>
      <header className="bg-white">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 xl:px-12">
          <div className="flex items-center justify-between h-16 lg:h-[72px]">
            <div className="flex items-center flex-shrink-0">
              <a href="#" title="" className="inline-flex font-bold text-2xl">
                DevStore.
              </a>
            </div>

            <div className="hidden lg:flex lg:justify-start lg:ml-16 lg:space-x-8 xl:space-x-14">
              <a
                href="#"
                title=""
                className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none hover:text-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              >
                {" "}
                T Shirts{" "}
              </a>

              <a
                href="#"
                title=""
                className="text-base font-medium text-gray-900 transition-all duration-200 rounded hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              >
                {" "}
                Hoodies{" "}
              </a>

              <a
                href="#"
                title=""
                className="text-base font-medium text-gray-900 transition-all duration-200 rounded hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              >
                {" "}
                Stickers and Posters{" "}
              </a>
              <a
                href="#"
                title=""
                className="text-base font-medium text-gray-900 transition-all duration-200 rounded hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              >
                {" "}
                Accessories{" "}
              </a>
            </div>

            <div className="flex items-center justify-end ml-auto">
              <div className="hidden lg:flex lg:items-center lg:space-x-8">
                {login ? (
                  <a
                    href="#"
                    title=""
                    className="text-base font-medium text-gray-900 transition-all duration-200 rounded hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                  >
                    {" "}
                    Logout{" "}
                  </a>
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
                  onClick={openSidebar}
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
                  className="relative p-2 -m-2 text-gray-900 transition-all duration-200 hover:text-gray-700"
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
                  Logout ⬇️
                </a>
              </li>
            ) : (
              <li>
                <a
                  className="block py-2 px-3 text-white bg-blue-700 rounded"
                  aria-current="page"
                  onClick={openAccountMenu}
                >
                  Login ⬇️
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
                  Login
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 mt-2 px-3 rounded"
                  aria-current="page"
                >
                  Login
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
  );
};
export default Navbar;
