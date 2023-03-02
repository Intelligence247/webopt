import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Packages from "./components/Packages";
import Steps from "./components/Steps";
import WhatTodo from "./components/WhatTodo";
import Faqs from "./components/Faqs";
import Footer from "./components/footer";

function App() {
  return (
    <div className="body">
      <Nav/>
      <Hero/>
      <Steps/>
      <Packages/>
      <WhatTodo/>
      <Faqs/>
      <Footer/>
    </div>
  );
}

export default App;
