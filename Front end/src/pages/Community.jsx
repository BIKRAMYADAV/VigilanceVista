export default function Community(){
    return(
        <>
        <section class="text-gray-400 bg-gray-900 body-font ">
  <div class="container px-5 py-24 mx-auto flex flex-col">
    <div class="lg:w-4/6 mx-auto">
      
      <div class="flex flex-col sm:flex-row mt-10">
        <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
          <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-800 text-gray-600">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <div class="flex flex-col items-center text-center justify-center">
            <h2 class="font-medium title-font mt-4 text-white text-lg">Phoebe Caulfield</h2>
            <div class="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
          </div>
        </div>
        <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-800 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
          <p class="leading-relaxed text-lg mb-4">text</p>
        
        </div>
      </div>
    </div>
  </div>
  
</section>

<section class="text-gray-400 bg-gray-900 body-font">
  <div class="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
    <div class="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
      
      <div class="flex w-full justify-center items-end">
        <div class="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
          <label for="hero-field" class="leading-7 text-sm text-gray-400">Make a post ..</label>
          <input type="text" id="hero-field" name="hero-field" class="w-full bg-gray-800 rounded border bg-opacity-40 border-gray-700 focus:ring-2 focus:ring-indigo-900 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
        <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Post</button>
      </div>
      
    </div>
  </div>
</section>

        </>
    )}