import { Link } from "react-router-dom";

const ContactCTA = () => {
  return (
    <>
      <section className="bg-gray-900 my-24">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="max-w-screen-md">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">
              Let us design something you want.
            </h2>
            <p className="mb-8 font-light sm:text-xl text-gray-400">
              Customize your Tees, Hoodies or Stickers with designs from our
              creative team
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
              <Link
                to={"/contact"}
                className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-white bg-indigo-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-900"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactCTA;
