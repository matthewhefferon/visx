import Area from "./components/Area";
import "./App.css";
import KPI from "./components/KPI";

function App() {
  return (
    <div className="container mx-auto flex-col flex self-center p-10">
      <KPI />
      <div className="p-10 self-center ">
        <Area width={900} height={580} />
      </div>
    </div>
  );
}

export default App;
