import React from 'react';
import { navLinksdata } from "../../constants";
import { Link } from "react-scroll";
import resume from '../../assets/resume_test.pdf';
import logo from '../../assets/logo.png';  // Update this line to import your new logo

const Navbar = () => {
  return (
    <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
      <div>
        <img src={logo} alt="Logo" className="w-12 h-12 rounded-full object-cover" />  {/* Update className to style the logo */}
      </div>
      <div>
        <ul className="flex items-center gap-10">
          {
            navLinksdata.map(({_id, title, link}) => (
              <li className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300" key={_id}>
                <Link
                  activeClass="active"
                  to={link}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  {title}
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Navbar;
