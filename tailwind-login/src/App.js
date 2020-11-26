import './App.css';
import './tailwind.output.css';

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full shadow-lg rounded-lg p-8">
        <div className="text-xl pt-8">
          Sign in to your account
        </div>
        <form>
          <div className="py-2">
            <label className="block py-4" for="email">Email</label>
            <input className="w-full h-12 focus:outline-none focus:ring-4 focus:ring-blue-200 rounded-md border-gray-200" id="email" type="text" />
          </div>
          <div className="py-2">
            <label className="py-4 md:flex lg:flex" for="password">
              Password
              <span className="flex-auto"></span>
              <span className="block pb-1">
                <a className="text-indigo-600 hover:text-indigo-500" href="/">Forgot your password?</a>
              </span>
            </label>
            <input className="w-full h-12 focus:outline-none focus:ring-4 focus:ring-blue-200 rounded-md border-gray-200" id="email" type="password" />
          </div>
          <div className="py-2 flex items-center justify-between">
            <div className="flex items-center">
              <input className="focus:ring-blue-200 border-gray-300 rounded" id="checkbox" type="checkbox" />
              <label className="ml-2 block" for="checkbox">Stay signed in for a week</label>
            </div>
          </div>
          <div className="py-6">
            <button type="submit" className="p-4 border w-full rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-200 bg-indigo-500 text-white">Continue</button>
          </div>
          <div className="pb-8">
            <div className="text-center">
              <a className="text-indigo-600 hover:text-indigo-500" href="/">Use single sign-on (SSO) instead</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
