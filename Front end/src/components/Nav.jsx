import { NavLink } from "react-router-dom";
import Logo from "../../public/search.gif"
function Nav() {
  return (
    <header class="text-gray-400 bg-gray-900 body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
         <img src={Logo} alt="" width={40} className="border-2 rounded-full" />
          <span class="ml-3 text-xl" ><a href="App.jsx">VigilanceVista</a></span>
        </a>

        {/* <nav class="md:ml-auto flex flex-warp items-center text-base justify-center" >
          <ul>
            <li class="mr-5 hover:text-white"><NavLink to="/">Home</NavLink></li>
            <li><a href="/login">login</a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
          </ul>
        </nav> */}


         <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <ul class = "flex flex-warp items-center text-base justify-center">
            <li class="mr-5 hover:text-white"><NavLink to="/">Home</NavLink></li>
            <li class="mr-5 hover:text-white"><NavLink to="/community">Community</NavLink></li>
            <li class="mr-5 hover:text-white"><NavLink to="/zone">Zone</NavLink></li>
    
          </ul>
          
        </nav>

      </div>
    </header>
  )
}

export default Nav;