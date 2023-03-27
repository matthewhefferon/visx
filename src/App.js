import "./App.css";
import BaN from "./components/BaN";
import Crypto from "./components/Crypto";

function App() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-500 py-8 px-8">
      {/* <BaN /> */}
      <Crypto />
    </div>
  );
}

export default App;
