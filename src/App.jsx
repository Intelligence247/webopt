import Faq from "./components/Faq";
import Footer from "./components/Footer";
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
      <Faq/>
      <Footer/>
    </div>
  );
}

export default App;
