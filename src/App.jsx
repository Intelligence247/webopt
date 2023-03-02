import Logo from "./assets/images/logo.png";
function App() {
  return (
    <div className="text-center  flex justify-center items-center  bg-gradient-to-r from-purple-100 to-white">
      <div>
        <img src={Logo} alt="Logo" />

        <h1 className="text-xl text-purple-500 text-center">
          Increae business Visibility Through Web Optimization
        </h1>
       
      </div>
    </div>
  );
}

export default App;
