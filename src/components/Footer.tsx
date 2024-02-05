import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  const isAdminRoute = location.pathname.includes("/admin");

  if (isAdminRoute) {
    return null;
  }

  return (
    <>


<footer className="shadow bg-gray-800 relative h-full mt-36">
  <div className="w-full mx-auto max-w-screen-xl p-6 md:flex md:items-center md:justify-between">
    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
      <li>
        <a href="#" className="hover:underline me-4 md:me-6">About</a>
      </li>
      <li>
        <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
      </li>
      <li>
        <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
      </li>
      <li>
        <a href="#" className="hover:underline">Contact</a>
      </li>
    </ul>
  </div>
</footer>


    </>
  );
};

export default Footer;
