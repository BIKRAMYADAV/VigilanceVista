import Logo from "../../public/placeholder.png"
function Footer(){
    return(<footer class="text-gray-400 bg-gray-900 body-font">
    <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
      <a class="flex title-font font-medium items-center md:justify-start justify-center text-white">
      <img src={Logo} alt="" width={30} />
        <span class="ml-3 text-xl"></span>
      </a>
      <p class="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">© 2024 — 
        <a href="https://twitter.com/knyttneve" class="text-gray-500 ml-1" target="_blank" rel="noopener noreferrer">@nodemons</a>
      </p>
      <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
       <h1>made with</h1><span style={{ color: 'blue' }}>&#x2764;&#xFE0F;</span><h1> & javascript</h1>
      </span>
    </div>
  </footer>)
}

export default Footer;