import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Packages from "./components/Packages";
import Steps from "./components/Steps";
import WhatTodo from "./components/WhatTodo";
function App() {
  return (
    <div className="body">
      <Nav/>
      <Hero/>
      <Steps/>
      <Packages/>
      <WhatTodo/>
    </div>
  );
}

export default App;
