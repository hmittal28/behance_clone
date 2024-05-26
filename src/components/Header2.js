import { IoSearch } from "react-icons/io5";

function Header2()
{
    return(
        <div  className="header2 py-3 px-5  align-middle  ">
            <div className="search-bar  w-full border-2 border rounded-full flex bg-[#f9f9f9] overflow-hidden  flex items-center justify-between   ">
               <div className="header2-left flex align-middle  ">
                   <div className= "flex ml-3 items-center bg-transparent "><IoSearch /></div>   
                   <input className=' ml-2  bg-transparent w-96 outline-none  placeholder:font-bold  l-200  placeholder:text-[#777] ' type="text" placeholder="Search the creative world at work"/>
               </div>
                  
            
             <div className="tags-lists bg-white align-middle h-fit l-100% border-l-2">
              <ul className="flex items-center align-middle justify-between font-medium h-fit l-100% overflow-hidden" >
                <li className="mx-2 py-2"><a href="">Projects</a></li>
                <li className="mx-2 py-2"><a href="">Images</a></li>
                <li className="mx-2 py-2"><a href="">Prototyhpes</a></li>
                <li className="mx-2 py-2"><a href="">Peoples</a></li>
                <li className="mx-2 py-2"><a href="">Moodboards</a></li>
              </ul>
             </div>

            </div>
            
        </div>
    );
}

export default Header2;