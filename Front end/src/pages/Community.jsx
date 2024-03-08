import React, {useEffect, useState} from 'react'


export default function Community(){


   //displaying the data
  
   const [data, setData] = useState([])

   useEffect(() => {
     fetchData();
   })// the major problem of the ui not updating in itself upon the submission of the form data was fixed here when the [] was removed
 
   const fetchData = async () => {
     try {
         const response = await fetch('https://vigilance-vista-server.vercel.app/community')
         const jsonData = await response.json()
         setData(jsonData);
     }
     catch(error) {
         console.log(error)
     }
   }

   //submitting data
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")

  const collectData = async (e) => {
    e.preventDefault();
   
   let result = await fetch('https://vigilance-vista-server.vercel.app/community', {
    method : 'post',
    body : JSON.stringify({name, message}),
    headers : {
        'Content-Type': 'application/json'
    },
   });
   response = await result.json;
   localStorage.setItem("user", JSON.stringify(response));
  if(response.ok) {
    fetchData();
    setName({name : ''});
    setMessage({message : ''});
  }
  }

 


  return(
        <div class="text-gray-400 bg-gray-900 body-font">
    <h1 className='text-4xl pt-8 flex justify-center items-center'>COMMUNITY </h1>

          <section class="text-gray-400 bg-gray-900 body-font p-20">
<form onSubmit={collectData} class="max-w-sm mx-auto">
      <div>
      <label htmlFor="name" class="block mb-2 text-sm font-medium text-white dark:text-white">Name: </label>
      <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" value ={name} onChange={(e) => setName(e.target.value)}  />
      <label htmlFor="message" class="block mb-2 text-sm font-medium text-white dark:text-white" >Message: </label>

      <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={message} onChange={(e) => setMessage(e.target.value)} />
      </div>
      <div>
      <button type='submit' className='mt-8 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>post</button>
      </div>   
    </form>
</section>

<section class="text-gray-400 bg-gray-900 body-font">
  
  <h1 className='text-2xl pl-20 pb-2 flex justify-center items-center'>POSTS </h1>
 
<div>
    <ul>
        {data.map((item) => (<div className='p-2'>
            <li className='text-2xl'>{item.name}</li>
            <li>{item.message}</li>
            </div>

        ))}
    </ul>
   </div>
   </section>

   



        </div>
    )}
