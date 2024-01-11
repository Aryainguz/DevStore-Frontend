import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <>
    <div className="text-center py-28">

<div className="text-center">
  <h1 className="mb-4 text-6xl font-semibold text-indigo-500">404</h1>
  <p className="mb-4 text-lg text-gray-600">Oops! Looks like you're lost.</p>
  <div className="animate-bounce">
    <svg className="mx-auto h-16 w-16 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
    </svg>
  </div>
  <p className="mt-4 text-gray-600">Let's get you back <Link to={"/"} className="text-indigo-500">home</Link>.</p>
</div>
    </div>
    
    </>
  );
};

export default Error;
