import Area from "./components/Area";
import './App.css';
import KPI from "./components/KPI";

function App() {
  return (
    <div className="App">
      <h1 className="text-4xl p-4">Area Chart</h1>
      <Area width={900} height={580} />
      <h1 className="text-4xl p-4 pt-12">KPI's</h1>
      <KPI />
    </div>
  );
}

export default App;
