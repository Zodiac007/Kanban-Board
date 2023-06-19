import KanbanBoard from "./components/kanban/KanbanBoard";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="w-full">
          <Navbar />

          <KanbanBoard />
        </div>
      </div>
    </>
  );
}

export default App;
