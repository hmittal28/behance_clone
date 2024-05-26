
function Footer()
{
    return (
        <>
        <div className="footer flex justify-between px-20  py-10 bg-black" >
          <div>
            <h1 className="cursor-pointer text-white text-xl">Behance</h1>
          </div>
            <div className="blocks cursor-pointer">
                <h2 className="text-white">Build For Creatives</h2>
                <ul>
                    <li className="text-white">Try Behance Pro</li>
                    <li className="text-white">Find Inspiration</li>
                    <li className="text-white">Get Hired</li>
                    <li className="text-white">Sell Creative Assests</li>
                    <li className="text-white">Sell Freelance Services</li>
                </ul>
            </div>

            <div className="blocks cursor-pointer">
                <h2 className="text-white">Find Talent</h2>
                <ul>
                    <li className="text-white">Post a Job</li>
                    <li className="text-white">All Featured Freelance Designers</li>
                    <li className="text-white">Graphic Designers</li>
                    <li className="text-white">Photographers</li>
                    <li className="text-white">Video Editor</li>
                    <li className="text-white">Web Designers</li>
                    <li className="text-white">Illustrators</li>
                </ul>
                </div>

                <div className="blocks cursor-pointer">
                <h2 className="text-white">Behnance</h2>
                <ul>
                    <li className="text-white">About Behance</li>
                    <li className="text-white">Adobe Portfolio</li>
                    <li className="text-white">Download App</li>
                    <li className="text-white">Blog</li>
                    <li className="text-white">Careers</li>
                    <li className="text-white">Help Center</li>
                    <li className="text-white">Contact Us</li>
                </ul>
            </div>

            <div className="blocks cursor-pointer">
                <h2 className="text-white">Social</h2>
                <ul>
                    <li className="text-white">Instagram</li>
                    <li className="text-white">Twitter</li>
                    <li className="text-white">Pinterest</li>
                    <li className="text-white">Facebook</li>
                    <li className="text-white">Linkedin</li>
                </ul>
            </div>
        </div>
        <div className="bg-black px-20  pb-10">
        <br className="color-white bg-white"/>
        <p className="text-white">© 2024 Adobe Inc. All rights reserved.</p>
        </div>
        
        </>
    );
}


export default Footer;