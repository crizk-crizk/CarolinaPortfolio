import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./sections/About";
import Portfolio from "./sections/Portfolio";
import Contactme from "./sections/Contactme";

function App() {
  return (
    <>
    <Header />
    
    <div className="home">
      <About />
      <Contactme />
      <Portfolio />
    </div>
      <Footer />
    </>
  );
}

export default App;
