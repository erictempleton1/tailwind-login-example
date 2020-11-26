import './App.css';
import './tailwind.output.css';

function App() {
  return (
    <div className="shadow-lg rounded-lg p-8 w-1/3">
      <div className="text-xl py-4">
        Sign in to your account
        </div>
      <form>
        <div className="py-2">
          <label className="block py-4" for="email">Email</label>
          <input className="w-full h-12 focus:outline-none focus:ring-4 focus:ring-blue-200 rounded-md border-gray-200" id="email" type="text" />
        </div>
        <div className="py-2">
          <label className="block py-4" for="password">Password</label>
          <input className="w-full h-12 focus:outline-none focus:ring-4 focus:ring-blue-200 rounded-md border-gray-200" id="email" type="password" />
        </div>
      </form>
    </div>
  );
}

export default App;
