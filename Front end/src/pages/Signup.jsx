import { useState } from "react"
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

export default function Signup() {

  const [name, setName] = useState()
  const [email,setEmail] = useState()
  const [password, setPassword] = useState()

  const navigate = useNavigate()

  const handleSubmit = (e)=> {
    e.preventDefault()
    axios.post('http://localhost:3000/register', {name, email, password})
    .then(result => {
      console.log(result)
      navigate('/login')
    })
    .catch(err => console.log(err))
  }


  return (
   <>
      <div class="text-gray-400 bg-gray-900 body-font ">
        <div class="container px-5 py-24 mx-auto flex flex-wrap items-center justify-center ">

          <div class="lg:w-2/6 md:w-1/2 bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col w-full mt-10 md:mt-0">
            <h2 class="text-white text-lg font-medium title-font mb-5">Sign Up</h2>
          
            <form action="http://localhost:3000/register" method="POST" onSubmit={handleSubmit} >
            <div class="relative mb-4">
              <label for="full-name" class="leading-7 text-sm text-gray-400">Name</label>
              <input type="text" onChange={(e) => setName(e.target.value)} id="full-name" name="name" class="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-blue-900 rounded border border-gray-600 focus:border-blue-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-400">Email</label>
              <input type="email" onChange={(e) => setEmail(e.target.value)} id="email" name="email" class="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-blue-900 rounded border border-gray-600 focus:border-blue-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>

            <div class="relative mb-4">
              <label for="password" class="leading-7 text-sm text-gray-400">Password</label>
              <input type="password" onChange={(e) => setPassword(e.target.value)} id="password" name="password" class="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-blue-900 rounded border border-gray-600 focus:border-blue-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>

            <button type="submit" class="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">Sign Up</button>
          </form>
          </div>

        </div>
  

      </div>
    </>
  )
}