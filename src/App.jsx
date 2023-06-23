import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Submenu from "./component/Submenu";
import SideBar from "./component/SideBar";
function App() {
  return (
    <main className="h-screen flex flex-col font-OpenSans">
      <Navbar />
      <Hero />
      <Submenu />
      <SideBar />
    </main>
  );
}

export default App;
