import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Packages from "./components/Packages";
import Steps from "./components/Steps";
import WhatTodo from "./components/WhatTodo";
import Faqs from "./components/Faqs";
import Footer from "./components/Footer";

function App() {
  return (
    <div id="body">
      <section className="asect">
      <Nav/>
      </section>
      <main>
      <Hero/>
      <Steps/>
      <Packages/>
      <WhatTodo/>
      <Faqs/>
      <Footer/>
      </main>
    </div>
  );
}
export default App



