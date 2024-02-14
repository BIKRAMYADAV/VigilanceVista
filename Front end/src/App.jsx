import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Zone from "./pages/Zone";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  return(
  <>
  <div>

    <Nav/>
    {/* <Router>
      <Routes>
          <Route path="/Zone">
          <Zone />
          </Route>
          <Route path="/">
          <Home />
          </Route>
      </Routes>
    </Router> */}
    {/* <Home/> */}
    <Login />
    {/* <Signup/> */}
    {/* <Zone/> */}
    <Footer/>
 
</div>
</>
  )
}

export default App;