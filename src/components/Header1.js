
function Header1()
{
    return(
        <div className="header1 border-b  px-4 container-fluid flex justify-between ">
        
        {/* Header-1 Left Portion */}
           <div className="header_left flex ">
               <ul className="flex items-center align-center justify-between font-medium">
                <li className="logo_behance mr-8 w-[100px] "><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsR-OsxScVFxpl0JRp8z2XraQ11-4saV78-tehs1ItbQ&s"/> </li>
                <li className="logo_page mx-4 my-0"><a href="#">Explore</a></li>
                <li className="logo_page mx-4 my-0"><a href="#">Discover</a></li>
                <li className="logo_page mx-4 my-0"><a href="#">Livestream</a></li>
                <li className="logo_page mx-4 my-0"><a href="#">Jobs</a></li>
              </ul>
           </div>


           {/* Header-1 Right Portion */}
          <div className="header_right flex items-center align-middle justify-between font-medium ">

             <button type="button" className="log-in-button mt-3  text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2 me-2 mb-3 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Login</button>
          
             <button type="button" className="sign-up-button  text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2 text-sm me-2 mb-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">SignUp</button>
          
             <div className="adobe-button flex items-center align-middle justify-between font-medium ">
                 <img className="adobe-image size-5" src="https://pic.onlinewebfonts.com/thumbnails/icons_521761.svg" alt="img"/>
                 <a href="#" className="adobe" >Adobe</a>
             </div>   

          </div>


        </div>
    );
}

export default Header1;