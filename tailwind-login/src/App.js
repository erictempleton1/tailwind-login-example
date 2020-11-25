import './App.css';
import './tailwind.output.css';

function App() {
  return (
    <div className="grid grid-cols-3">
      <div className="shadow-lg rounded-lg p-8">
        <div className="text-xl py-6">
          Sign in to your account
        </div>
        <form>
          <label className="block" for="email">Email</label>
          <input className="w-full h-12 focus:outline-none focus:ring-4 focus:ring-blue-100 rounded-md" id="email" type="text" />
        </form>
      </div>
    </div>
  );
}

export default App;
