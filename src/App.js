import {Fragment} from "react";
import {Routes,Route} from "react-router-dom";
import Home from "./components/main/Home";
import Footer from "./components/main/Footer";
import Header from "./components/main/Header";
function App() {
  return (
     <Fragment>
       <Header/>
         <Routes>
           <Route exact path={"/"} element={<Home/>}/>

         </Routes>
       <Footer/>
     </Fragment>
  );
}

export default App;
