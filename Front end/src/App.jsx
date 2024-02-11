import Nav from "./components/Nav";
import Search from "./components/Search"
import Footer from "./components/Footer";
import Stats from "./components/Stats";

function App() {
  return(
  <>
  <div>
    <Nav/>
  </div>
  <div>
    <Search/>
  </div>
  <div>
    <Stats/>
  </div>
  <div>
    <Footer/>
  </div>
  </>
  )
}

export default App;