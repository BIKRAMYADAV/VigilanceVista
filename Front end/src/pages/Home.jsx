import React, { useState, useEffect } from 'react';



export default function Home(){
  const [crimeData, setCrimeData] = useState([]);
  const [searchDistrict, setSearchDistrict] = useState('');
  const [districtInfo, setDistrictInfo] = useState(null);

  const styles = {
    container: {
      backgroundColor: '#121212', // Dark background color
      color: '#FFFFFF', // White text color
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
    },
    title: {
      fontSize: '24px',
      textAlign: 'center',
      marginBottom: '20px',
    },
    input: {
      padding: '8px',
      fontSize: '16px',
      marginRight: '10px',
      borderRadius: '5px',
      border: 'none',
      backgroundColor: '#333333', // Darker input background color
      color: '#FFFFFF', // White text color
    },
    button: {
      padding: '8px 16px',
      fontSize: '16px',
      borderRadius: '5px',
      border: 'none',
      backgroundColor: '#007bff', // Blue button color
      color: '#FFFFFF', // White text color
      cursor: 'pointer',
    },
    districtInfo: {
      marginTop: '20px',
    },
    text: {
      marginBottom: '5px',
    }
  };

  useEffect(() => {
    // Fetch the JSON data containing crime statistics
    fetch('data/data.json')
      .then(response => response.json())
      .then(data => setCrimeData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleSearch = (event) => {
    let dist = event.target.value
    dist = dist.toUpperCase()
    setSearchDistrict(dist);
  };

  const handleSearchSubmit = () => {
    // Find district info based on search input
    const district = crimeData.find(item => item.DISTRICT === searchDistrict);
    setDistrictInfo(district);
  };
 
  
  return(
    <>
    <div className='h-full'>
    <section class="text-gray-400 bg-gray-900 body-font">
    <div class="container mx-auto flex flex-col w-full py-24 sm:py-8 justify-center items-center">
      
      <div class="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white"> VIGILANCE VISTA </h1>
        <p class="mb-8 leading-relaxed">"Discover your neighborhood like never before with VigilanceVista! Simply input your location and unlock a comprehensive view of crime statistics. Navigate your surroundings with confidence, empowering you to stay vigilant. Based upon real-police data to keep you informed and aware. Join us in creating safer communities one click at a time. Explore, engage, and stay safe!"</p>
        <div class="flex w-full justify-center items-end">
          <div class="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
            <label for="hero-field" class="leading-7 text-sm text-gray-400">eg. "Search - BHUBANESWAR" </label>
            <input type="text"  
        value={searchDistrict} 
        onChange={handleSearch}  id="hero-field" name="hero-field" class="w-full bg-gray-800 rounded border bg-opacity-40 border-gray-700 focus:ring-2 focus:ring-blue-900 focus:bg-transparent focus:border-blue-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
          <button onClick={handleSearchSubmit} class="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Search</button>
        </div>
        
        
      </div>
    </div>
  </section>




  <section class="text-gray-400 bg-gray-900 body-font">
    <div class="container px-5 py-16 mx-auto">
      <div class="flex flex-wrap -m-4 text-center">
      {districtInfo && (
        <div className='font-mono flex flex-wrap flex-col space-x-6 space-y-2 text-xl text-center' style={styles.districtInfo}>
          
          <h2>{districtInfo.DISTRICT}</h2>

          <div className='flex flex-wrap flex-row space-x-6 '>

          <p style={styles.text}>Murder: {districtInfo.MURDER}</p>
          <p style={styles.text}>Attempt to Murder: {districtInfo.ATTEMPT_TO_MURDER}</p>
          <p style={styles.text}>Rape: {districtInfo.RAPE}</p>
          <p style={styles.text}>Kidnapping: {districtInfo.KIDNAPPING}</p>
          <p style={styles.text}>Dacoity: {districtInfo.DACOITY}</p>
          <p style={styles.text}>Robbery: {districtInfo.ROBBERY}</p>
          <p style={styles.text}>Theft: {districtInfo.THEFT}</p>
          <p style={styles.text}>Riots: {districtInfo.RIOTS}</p>
          <p style={styles.text}>Cheating: {districtInfo.CHEATING}</p>
          <p style={styles.text}>Counterfeiting: {districtInfo.COUNTERFEITING}</p>
          <p style={styles.text}>Dowry Deaths: {districtInfo.DOWRY_DEATHS}</p>
          <p style={styles.text}>Cruelty by Husband or His Relatives: {districtInfo.CRUELTY_BY_HUSBAND_OR_HIS_RELATIVES}</p>
          <p style={styles.text}>Other IPC Crimes: {districtInfo.OTHER_IPC_CRIMES}</p>
          <p style={styles.text}>Total IPC Crimes: {districtInfo.TOTAL_IPC_CRIMES}</p>

          </div>
          <p className='main font-bold text-2xl' style={styles.text}>Safety Rating: {districtInfo.SAFETY_RATING}</p>
        </div>
      )}
      </div>
  
    </div>

  </section>
  </div>
  </>
  )

  
} 
