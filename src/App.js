import "./App.css";
import Navs from "./components/Navs/Navs";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Foods from "./components/foods/Foods";
import Reviews from "./components/reviews/Reviews";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Navs />
      <Home />
      <About />
      <Foods/>
      <Reviews/>
      <Footer/>
    </>
  );
}

export default App;
