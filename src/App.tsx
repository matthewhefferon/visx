import Area from "./components/Area";
import "./App.css";
import KPI from "./components/KPI";
import Bars from "./components/Bars";

function App() {
  return (
    <div className="container mx-auto px-4 flex-col flex self-center p-10">
      <KPI />
      <div className="p-10 self-center ">
        <Area width={900} height={580} />
      </div>
      <div className="p-10 self-center ">
        <Bars width={900} height={580} />
      </div>
    </div>
  );
}

export default App;
