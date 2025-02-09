import { Outlet } from "react-router-dom";
import { MenuProvider } from "./contexts/MenuContext";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className={`overflow-x-hidden flex flex-col font-main`}>
      <MenuProvider>
        <Header />
        <Outlet />
        <Footer />
      </MenuProvider>
    </div>
  );
};

export default App;