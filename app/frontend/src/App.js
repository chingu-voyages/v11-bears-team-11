import React from 'react'

function App () {
  return (
<div className="flex">
  <div className="bg-gray-900 w-20 flex-none flex flex-col min-h-screen h-screen px-2 py-2">

    <div className="overflow-y-auto text-white">
      <ul>
        <li><a className="mt-3">Chat</a></li>
        <li className="mt-3"></li>
        <li><a className="">Bears-11</a></li>
        <li className="mt-3"></li>
        <li><a className="flex items-center justify-center w-12 h-12 bg-gray-800 hover:bg-teal-500 text-teal-500 hover:text-white inline-block rounded-full">
        <img src="../icons8-plus-math-30.png" />          
          </a></li>
        <li className="mt-3"></li>
        <li><a className="flex items-center justify-center w-12 h-12 bg-gray-800 hover:bg-teal-500 text-teal-500 hover:text-white inline-block rounded-full">
        <img src="../icons8-search-30.png" />
         </a></li>
      </ul>
       
    </div>
  </div>
  
  <div className='flex-1 flex flex-col min-h-screen h-screen'>
    <div className="flex">
      <div className="w-56 bg-gray-800 border-b border-teal-500 flex items-center flex-shrink-0 text-white px-4"><span className="font-semibold text-xl tracking-tight">Chingu|Chat App</span></div>
      <div className="flex-1">
      <div className="flex items-center bg-gray-100 justify-between border-b border-teal-500">
      <div className="flex items-center flex-shrink-0 text-blue-800 mr-6 px-4">
        <span className="font-semibold text-xl tracking-tight"># General Chat</span>
      </div>
    <nav className="flex items-center justify-between flex-wrap p-6">
    <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-blue-800 hover:text-yellow-400 hover:border-white">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div>
          <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-blue-800 hover:text-yellow-400 mr-4">Sign In</a>
          <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-blue-800 hover:text-yellow-400 mr-4">Sign Up</a>
          <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-blue-800 hover:text-yellow-400 mr-4">Logout</a>
        </div>
      </div>
    </nav>
      </div>
      </div>
    </div>
         
    <div className="flex-1 bg-gray-900 flex overflow-y-hidden">
    
          <div className="bg-gray-800 text-white px-2 py-2 w-56 flex-none flex flex-col justify-between">
            <div className="overflow-y-auto">
             # Bears 11
            </div>
            <div className="flex">
              Bottom Sidebar
            </div>
          </div>
          <div className="flex-1 flex justify-between">
            <div className="bg-gray-100 px-4 py-2 flex-1 flex flex-col justify-between">
              <div className="overflow-y-auto">
              
              <div className="flex mt-4 border-b py-4 border-green-300">
     
              <div>
                  <img src="../imgs/img1.jpg" className="h-12 w-12 rounded-full"/>
                </div>
                 <div className="flex flex-col ml-4">
                   <p className="font-bold">Goldino<span className="ml-4 font-normal text-gray-500 xsm">Today 08:00 AM</span></p>
                   <p className="text-gray-600">when did you join chingu @jmmedlock</p>
                 </div>

              </div>

              <div className="flex mt-4 border-b py-4 border-green-300">
     
                <div>
                  <img src="../imgs/img0.jpg" className="h-12 w-12 rounded-full" />
                </div>
                <div className="flex flex-col ml-4">
                   <p className="font-bold">gastro<span className="ml-4 font-normal text-gray-500 xsm">Today 45:00 PM</span></p>
                   <p className="text-gray-600">Welcome back @sojelee</p>
                 </div>

              </div>

              <div className="flex mt-4 border-b py-4 border-green-300">
              <div>
                  <img src="../imgs/img1.jpg" className="h-12 w-12 rounded-full" />
                </div>
              <div className="flex flex-col ml-4">
              
                   <p className="font-bold">sojelee<span className="ml-4 font-normal text-gray-500 xsm">Today 45:00 PM</span></p>
                   <p className="text-gray-600">Hollow team</p>
                 </div>
              </div>
            </div>
            <div className="bg-gray-300 h-12 flex items-center">
               <div className="w-12 px-2 py-2 border-r border-gray-100">Left</div>
               <div className="flex-1 px-4 py-2">
                 
               <input className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-1 px-2 block w-full appearance-none leading-normal" type="text" placeholder="Chat # Bears 11" />
              </div>
               <div className="px-2 py-2">Emojis</div>
            </div>
            </div>
            <div className="w-56 bg-gray-300 px-2 py-2 flex-none overflow-y-auto">
            <div className="px-2 py-2">Online-2</div>
            <div className="flex mt-2">
            <div className="relative">
                  <img src="../imgs/img1.jpg" className="h-10 w-10 rounded-full" />
                  <div className="absolute h-4 w-4 bg-green-500 rounded-full m-6 top-0"></div>
                </div>
              <div className="flex flex-col ml-2">
                 <p className="font-bold mt-1">sojelee</p>
              </div>

              </div>

              <div className="flex mt-2">
              <div className="relative">
                  <img src="../imgs/img0.jpg" className="h-10 w-10 rounded-full"/>
                  <div className="absolute h-4 w-4 bg-green-500 rounded-full m-6 top-0"></div>
                </div>
              <div className="flex flex-col ml-2">
                 <p className="font-bold mt-1">chance</p>
              </div>

              </div>


            </div>
          </div>
    
          </div>
   
  </div>
</div>
)
}

export default App
