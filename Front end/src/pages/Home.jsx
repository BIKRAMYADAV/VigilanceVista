export default function Home(){
    return(
    <>
    <section class="text-gray-400 bg-gray-900 body-font">
    <div class="container mx-auto flex flex-col w-full py-24 justify-center items-center">
      
      <div class="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white"> SafeZone Sentinel</h1>
        <p class="mb-8 leading-relaxed">Access CrimeWatch anytime, anywhere, with our user-friendly design. Whether you're at home, at work, or on the go, stay connected and informed about the safety of your surroundings.</p>
        <div class="flex w-full justify-center items-end">
          <div class="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
            <label for="hero-field" class="leading-7 text-sm text-gray-400">eg. "Search - Bhubaneswar" </label>
            <input type="text" id="hero-field" name="hero-field" class="w-full bg-gray-800 rounded border bg-opacity-40 border-gray-700 focus:ring-2 focus:ring-blue-900 focus:bg-transparent focus:border-blue-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
          <button class="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Search</button>
        </div>
        
        
      </div>
    </div>
  </section>


  <section class="text-gray-400 bg-gray-900 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap -m-4 text-center">
        <div class="p-4 sm:w-1/4 w-1/2">
          <h2 class="title-font font-medium sm:text-4xl text-3xl text-white">100</h2>
          <p class="leading-relaxed">Users</p>
        </div>
        <div class="p-4 sm:w-1/4 w-1/2">
          <h2 class="title-font font-medium sm:text-4xl text-3xl text-white">40</h2>
          <p class="leading-relaxed">Zones</p>
        </div>
        <div class="p-4 sm:w-1/4 w-1/2">
          <h2 class="title-font font-medium sm:text-4xl text-3xl text-white">1</h2>
          <p class="leading-relaxed">States</p>
        </div>
        <div class="p-4 sm:w-1/4 w-1/2">
          <h2 class="title-font font-medium sm:text-4xl text-3xl text-white">4</h2>
          <p class="leading-relaxed">Products</p>
        </div>
      </div>
    </div>
  </section>
  </>
  )
} 