import { useState } from "react";
import Navbar from "./Components/Navbar.jsx";
import MessageWindow from "./Components/MessageWindow.jsx";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="app-layout">
      <Navbar open={sidebarOpen} setOpen={setSidebarOpen} />
      <MessageWindow open={sidebarOpen} />
    </div>
  );
}

export default App;
