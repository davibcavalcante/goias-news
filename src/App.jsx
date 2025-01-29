import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="overflow-x-hidden">
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  );
};

export default App;