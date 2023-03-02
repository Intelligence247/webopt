import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Packages from "./components/Packages";
import Steps from "./components/Steps";
function App() {
  return (
    <div className="body">
      <Nav/>
      <Hero/>
      <Steps/>
      <Packages/>
    </div>
  );
}

export default App;
