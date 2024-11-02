import ChooseBox from "./components/ChooseBox";
import "./index.css";

function App() {
  return (
    <div className="p-2 rounded min-h-screen">
      <div>
        <div className="bg-slate-300 rounded-xl p-4">
          <p className=" font-bold  text-center text-2xl font-mono">Favorite Technology</p>
        </div>
        <div className="flex items-center justify-center">
          <ChooseBox />
        </div>
      </div>
    </div>
  );
}

export default App;
