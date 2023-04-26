import Header from "./components/Header";
import Calculator from "./components/model/Calculator";
import Footer from "./components/Footer";
import './assets/App.css';

function App() {
  return (
    <div className="center">
      <Header />
      <Calculator />
      <Footer />
    </div>
  );
}

export default App;